import { Component } from '@angular/core';
import { CaseStudyLayoutComponent } from '../components/case-study-layout.component';
import { DecisionCardComponent } from '../components/decision-card.component';
import { LessonCardComponent } from '../components/lesson-card.component';

@Component({
  selector: 'app-scs',
  standalone: true,
  imports: [
    CaseStudyLayoutComponent,
    DecisionCardComponent,
    LessonCardComponent
  ],
  template: `
  <app-case-study-layout
    title="Sponsor Compliance System"
    role="Frontend Engineer (Intern)"
    status="Production"
    [techStack]="['React', 'TypeScript', 'Supabase', 'Edge Functions', 'Deno', 'Cloudflare']"
    liveUrl="https://sponsors.mgvprojects.co.uk/"
    imageUrl="/sponsors-guard.png"
    prevLink="/engineering/foodrisk"
    prevTitle="FoodRisk AI"
    nextLink="/engineering/spiritconnect"
    nextTitle="Spirit Connect"
  >
    <section>
      <h2>Getting production data out of a platform that was not built to let go of it</h2>
      <p>The data was right there. I could see it in the application, rendering in tables, updating whenever somebody saved a form. I just could not get it out.</p>
      <p>The Sponsor Compliance System serves UK Home Office Licensed Sponsors: organisations licensed to employ overseas workers, who have to evidence their compliance with that licence. The records are the kind that have to be correct. Who is employed, on what basis, with what documentation sitting behind them.</p>
      <p>The product had been prototyped on Lovable before the engineering team picked it up. Lovable provisions a Supabase instance for you and manages it on your behalf. That is a gift while you are still deciding what you are building, and a problem the moment you have decided. Nobody had ever connected an independently owned project, so the database holding real records lived inside an environment none of us administered.</p>
      <p>When the client decided to move onto infrastructure they owned, everyone assumed a routine migration.</p>
    </section>

    <section>
      <h2>What "no access" actually means</h2>
      <p>A normal Supabase migration assumes a connection. You reach the project through the dashboard or a connection string, dump the schema, dump the rows, restore on the other side. Fifteen minutes of work, and most of that is waiting.</p>
      <p>We had none of it. No dashboard. No connection string. No pg_dump.</p>
      <p>What we did have was an application that could authenticate against the database and read through the ordinary permission rules, the same way any signed-in user could. Nothing lower level than that existed.</p>
      <p>I spent the first stretch of this hunting for a door that was not there. Some export feature nobody had documented. An undocumented endpoint. A way to escalate access. That time felt wasted while I was spending it, and it was not. Ruling things out is how you earn the right to build something unusual. It is also how you avoid having to explain later why you skipped the obvious answer.</p>
      <p>Eventually the question changed shape. It stopped being "how do I run a migration" and became "what access do I actually have, and is it enough".</p>
    </section>

    <section>
      <h2>The one door that was open</h2>
      <p>The application had legitimate authenticated access to the data. That was the asset. Everything else was closed.</p>
      <p>So I designed an extraction endpoint that used it: a Supabase Edge Function running on Deno, server side. I specified what it had to do, had it generated, then worked through it until it did exactly that and nothing more.</p>
      <p>Two things mattered about where it ran. The service role key is read from the function's own environment and never leaves the server, so nothing privileged is ever handed to a browser. And the function refuses to do anything at all until it knows who is asking.</p>
      <p>It checks twice. First it builds a client from the caller's own authorization header and asks Supabase who that is. A missing or expired session dies there. Only then does it use the service role client to look that same user up in the roles table and confirm they hold super_admin. Anything else gets a 403 and no data.</p>
      <p>That second check is not paranoia. Consider what this endpoint is: a button that dumps an entire compliance database. You do not leave that lying around in a system where a mistake in access control has regulatory consequences. Building the constraint in on day one cost an afternoon. Adding it after discovering somebody had found it would have cost rather more.</p>
    </section>

    <section>
      <h2>Engineering decisions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <app-decision-card
          title="Why the endpoint refuses everyone but Super Admins"
          icon="fas fa-shield-alt"
          tag="Security"
        >
          A one-time administrative operation does not need to be available to anyone else, ever. The function verifies the caller's session against Supabase first, then confirms that same user holds super_admin before a single row is read. Gating it on day one was cheaper than gating it after somebody found it.
        </app-decision-card>

        <app-decision-card
          title="Why dependency order, not alphabetical"
          icon="fas fa-project-diagram"
          tag="Data Integrity"
        >
          Forty five tables reference each other across four levels of depth. Written in the wrong order, the import dies partway through on a constraint violation and leaves a half populated database behind. The export groups tables by what they depend on and wraps the whole thing in a transaction, so a failure rolls back instead of settling.
        </app-decision-card>

        <app-decision-card
          title="Why the exporter carries a column type map"
          icon="fas fa-code"
          tag="Correctness"
        >
          PostgreSQL arrays and jsonb columns do not survive naive string conversion. They import without complaining and land in the wrong shape, which is the failure mode you discover weeks later rather than immediately. Explicit types on the way out were the only way to be sure.
        </app-decision-card>
      </div>
    </section>

    <section>
      <h2>Foreign keys, or why order is the whole problem</h2>
      <p>Here is the part that surprises people who have not done this before.</p>
      <p>You cannot write rows in whatever order they come back. Forty five tables came out of that database, and they have opinions about each other. Employees need organisations to exist first. Visa details, certificates of sponsorship and DBS checks all need employees. Applicant forms hang off onboarding records, which hang off employees, which hang off organisations. Four levels deep before you reach a form somebody actually filled in.</p>
      <p>Get that order wrong and the import dies partway through on a constraint violation, leaving you with a database that is half populated and entirely untrustworthy. The loud failure is the lucky one. The version where it fails quietly is worse.</p>
      <p>So the export writes in explicit dependency order, grouped into levels. Organisations first, because nothing exists without one. Then everything hanging off an organisation: employees, settings, audit and logging tables, retention policies, support tickets. Then everything hanging off an employee. Then the tokens and forms attached to onboarding records. Then the remainder.</p>
      <p>The whole file is wrapped in BEGIN and COMMIT, so a failed import rolls back rather than leaving half a database for somebody to find on Monday.</p>
    </section>

    <section>
      <h2>The types nobody warns you about</h2>
      <p>I expected foreign keys to be the hard part. They were tedious. What actually cost me time was column types.</p>
      <p>A generic row-to-SQL converter will happily turn a PostgreSQL array into a quoted string. It looks fine. It imports without complaining. And then a column that should hold a list of recipient email addresses holds one long piece of text that merely resembles a list, and you find out when something downstream tries to iterate it.</p>
      <p>Jsonb has the same shape of problem. Audit log before and after values, applicant employment history, visa dependants, task checklists. All of it needs an explicit cast on the way in, or it lands as text pretending to be JSON.</p>
      <p>So the function carries a map of which columns are arrays and which are jsonb, and escapes each accordingly. Not elegant. Correct, which was the requirement.</p>
      <p>If you take one thing from this page, take that. The failures that hurt are not the ones that throw. They are the ones that succeed with the wrong shape.</p>
    </section>

    <section>
      <h2>Two things that had to travel on their own</h2>
      <p><strong>Users.</strong> The auth schema is not something you treat like the rest of the tables. Users came out through the admin API into their own script, and passwords do not carry across. Everyone resets on the other side. That is a consequence worth naming out loud in a migration plan, rather than discovering in production the morning after.</p>
      <p><strong>Files.</strong> Four storage buckets held company assets, employee documents, organisation exports and confirmed interests. The function emits a manifest of what sits in each one, so files could be moved and reconciled once the rows had landed. Data first, then storage. The other order gives you documents pointing at records that do not exist yet.</p>
    </section>

    <section>
      <h2>How I knew it had worked</h2>
      <p>The export writes its own verification at the bottom of the file: a row count query per table, with the expected number beside it, taken from what was actually read on the way out.</p>
      <p>I ran them, and I checked every table. Not a sample.</p>
      <p>Then a QA engineer went through the migrated application independently and found bugs I had missed.</p>
      <p>That second part is the part I would rather be judged on. My own check proved the rows had arrived. It said nothing about whether the application still behaved correctly sitting on top of them, and I was the wrong person to notice the difference. You cannot QA your own migration. You are the one person in the building who already knows what it is supposed to do.</p>
    </section>

    <section>
      <h2>What I would do differently</h2>
      <p>The export reads each table with a limit of ten thousand rows.</p>
      <p>That was fine for the data we had. It is also a quiet failure waiting for whoever runs it next. A table that grows past ten thousand gets truncated with no error, and the row count verification would cheerfully confirm the truncated number, because it counts what was read rather than what exists. The check and the bug share an assumption. That is the worst kind of check, and it is mine. It should page through, or fail loudly when it reaches the ceiling.</p>
      <p>The bigger change is the order of work. I built the verification last. Building it first would have forced me to decide up front exactly how I intended to prove the data arrived intact, and that decision would have shaped the extraction rather than trailing behind it.</p>
    </section>

    <section>
      <h2>What I learned</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <app-lesson-card title="The failures that hurt are the ones that succeed.">
          An error tells you where to look. A write that lands in the wrong shape tells you nothing until something downstream breaks, weeks later, somewhere unrelated.
        </app-lesson-card>
        <app-lesson-card title="You cannot QA your own migration.">
          You know what the system is supposed to do, which is exactly why you stop seeing what it actually does. The bugs QA found were in the blind spot my own certainty created.
        </app-lesson-card>
        <app-lesson-card title="A check that shares an assumption with the bug is not a check.">
          My row counts verified what the exporter read, not what the database held. Both were wrong in the same direction, so the verification agreed with the mistake.
        </app-lesson-card>
        <app-lesson-card title="Ask what leaving looks like.">
          Every managed platform is a trade. The convenience arrives immediately and the bill arrives on the day you want to move, long after the person who chose it can do anything about it.
        </app-lesson-card>
      </div>
    </section>

    <section>
      <h2>The part that was not technical</h2>
      <p>This migration was difficult because of a decision made months earlier, by somebody else, for good reasons.</p>
      <p>Prototyping on a managed platform is genuinely faster, and the team that chose it was right to choose it. The cost did not appear on the day they decided. It appeared on the day the product needed to leave, which is a long way from anyone who could still do something about it.</p>
      <p>I think about that whenever a tool offers to manage something on my behalf. The question is not whether this is easier today. It is what leaving looks like.</p>
    </section>

    <section>
      <h2>Outcome</h2>
      <p>The platform is live at sponsors.mgvprojects.co.uk, on infrastructure the client owns and administers, running on the rows this migration moved.</p>
      <p>That last clause is the one that counts. Not that the export ran. That the data it wrote is the data the production system is serving right now.</p>
    </section>
  </app-case-study-layout>
  `
})
export class ScsComponent {}
