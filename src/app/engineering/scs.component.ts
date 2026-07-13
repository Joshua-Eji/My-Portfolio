import { Component } from '@angular/core';
import { CaseStudyLayoutComponent } from '../components/case-study-layout.component';
import { DecisionCardComponent } from '../components/decision-card.component';
import { LessonCardComponent } from '../components/lesson-card.component';
import { ResponsibilityTimelineComponent } from '../components/responsibility-timeline.component';

@Component({
  selector: 'app-scs',
  standalone: true,
  imports: [
    CaseStudyLayoutComponent,
    DecisionCardComponent,
    LessonCardComponent,
    ResponsibilityTimelineComponent
  ],
  template: `
  <app-case-study-layout
    title="Sponsor Compliance System"
    role="Software Engineer"
    status="Production"
    [techStack]="['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Cloudflare']"
    liveUrl="https://sponsors.mgvprojects.co.uk/"
    imageUrl="/sponsors-guard.png"
    prevLink="/engineering/foodrisk"
    prevTitle="FoodRisk AI"
    nextLink="/engineering/spiritconnect"
    nextTitle="Spirit Connect"
  >
    <section>
      <h2>Overview</h2>
      <p>The Sponsor Compliance System is a compliance management platform supporting UK Home Office Licensed Sponsors. It centralizes workforce and compliance management for organizations that sponsor international workers under UK immigration routes.</p>
      <p>My involvement focused on improving the existing platform's reliability, maintainability, and production readiness while continuing to support active feature development.</p>
    </section>

    <section>
      <h2>The Problem</h2>
      <p>The application had been bootstrapped rapidly and needed significant improvements before it could be considered production-ready.</p>
      <p>Core issues included inconsistent frontend architecture, missing observability into system behaviour, access control vulnerabilities, and an urgent data migration requirement created by a platform transition that conventional tools could not support.</p>
    </section>

    <section>
      <h2>My Role</h2>
      <p>I joined an existing engineering team and contributed to stabilizing and improving the platform across multiple areas simultaneously — frontend quality, security, logging infrastructure, and a complex production migration.</p>
    </section>

    <section>
      <h2>Responsibilities</h2>
      <div class="mt-8">
        <app-responsibility-timeline [items]="[
          'Production issue fixes across multiple modules',
          'Database schema migrations (Supabase)',
          'Role-Based Access Control improvements',
          'Developer activity logging',
          'Audit logging system',
          'Responsive UI improvements',
          'Deployment support',
          'QA collaboration',
          'Technical documentation'
        ]"></app-responsibility-timeline>
      </div>
    </section>

    <section>
      <h2>Engineering Decisions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <app-decision-card
          title="Why centralized logging was prioritized early"
          icon="fas fa-terminal"
          tag="Developer Experience"
        >
          Production systems without logging force developers to debug blind. Early in the engagement it became clear that diagnosing issues required reconstructing user behaviour from incomplete information. Introducing centralized activity logging and administrative error logging created immediate visibility into system behaviour, shortened debugging cycles, and provided stakeholders with a concrete record of system activity.
        </app-decision-card>

        <app-decision-card
          title="Why RBAC restructuring was necessary"
          icon="fas fa-shield-alt"
          tag="Architecture"
        >
          Role-based access control had been implemented at the UI layer only, which meant that determined users could bypass access restrictions by navigating directly to restricted routes. I restructured the permission system to enforce checks at both the UI and data layers, ensuring that unauthorized data access was prevented regardless of how users navigated the application.
        </app-decision-card>

        <app-decision-card
          title="Why a custom migration was necessary"
          icon="fas fa-database"
          tag="Architecture"
        >
          The production database was hosted within Lovable's managed environment, which restricted direct database access. Conventional migration tools could not connect to export the data. This was not a technical limitation that could be worked around through configuration — the platform simply did not expose the database externally.
        </app-decision-card>
      </div>
    </section>

    <section>
      <h2>The Migration</h2>
      <p>One particularly challenging task involved migrating application data from Lovable's managed environment after the project transitioned to an independently managed Supabase instance.</p>
      <p>Direct database migration was not possible because the original platform restricted database access by design.</p>
      <p>After exploring several approaches — including attempting to reconstruct the data manually and investigating undocumented API endpoints — I designed a secure extraction workflow using Supabase Edge Functions restricted to Super Administrators.</p>
      <p>The function allowed authorized administrators to export production data in a structured format. That data was then transformed into a schema compatible with the new Supabase environment and imported successfully.</p>
      <p>The migration succeeded despite the platform limitations. More importantly, it reinforced a principle I carry into every new project: constraints are not always blockers. Sometimes they require a different kind of engineering.</p>
    </section>

    <section>
      <h2>What I Learned</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <app-lesson-card title="Platform limitations require creative engineering.">
          When standard tools don't work, the solution usually requires understanding the platform's actual capabilities rather than assuming impossibility.
        </app-lesson-card>
        <app-lesson-card title="Logging is infrastructure, not an afterthought.">
          Introducing observability early would have prevented hours of debugging throughout the project.
        </app-lesson-card>
        <app-lesson-card title="Security requires depth, not surface-level controls.">
          UI-layer access control without backend enforcement provides almost no real security.
        </app-lesson-card>
        <app-lesson-card title="Documentation reduces project risk.">
          Clear migration documentation protected the team from data loss risk and provided a repeatable process for future transitions.
        </app-lesson-card>
      </div>
    </section>

    <section>
      <h2>Reflection</h2>
      <p>This project taught me that engineering often involves understanding platform limitations as deeply as understanding application code.</p>
      <p>The migration problem had no obvious solution. It required persistence, a systematic exploration of alternatives, and a willingness to build something that didn't exist rather than conclude that the migration was impossible.</p>
      <p>That experience changed how I approach unfamiliar constraints.</p>
    </section>
  </app-case-study-layout>
  `
})
export class ScsComponent {}
