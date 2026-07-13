import { Component } from '@angular/core';
import { CaseStudyLayoutComponent } from '../components/case-study-layout.component';
import { DecisionCardComponent } from '../components/decision-card.component';
import { LessonCardComponent } from '../components/lesson-card.component';
import { ResponsibilityTimelineComponent } from '../components/responsibility-timeline.component';

@Component({
  selector: 'app-spiritconnect',
  standalone: true,
  imports: [
    CaseStudyLayoutComponent,
    DecisionCardComponent,
    LessonCardComponent,
    ResponsibilityTimelineComponent
  ],
  template: `
  <app-case-study-layout
    title="Spirit Connect"
    role="Software Engineer"
    status="Production"
    [techStack]="['React', 'JavaScript', 'Cloudflare', 'Resend', 'Speechmatics']"
    prevLink="/engineering/scs"
    prevTitle="Sponsor Compliance System"
  >
    <section>
      <h2>Overview</h2>
      <p>Spirit Connect is a guided prayer platform designed to help users build consistent prayer habits through structured sessions, personal journaling, and community engagement.</p>
      <p>The application combines automation, content management, and audio experiences to create a consistent guided spiritual journey accessible across devices.</p>
    </section>

    <section>
      <h2>The Problem</h2>
      <p>The platform required a highly automated prayer experience capable of delivering synchronized voice narration, background audio, and structured prayer content across desktop browsers, mobile browsers, and varying network conditions.</p>
      <p>Unlike most web applications where timing is a concern of user experience, here timing consistency was part of the product itself. A prayer session that stuttered, skipped, or stopped unexpectedly wasn't just a bug — it was a broken experience at a meaningful personal moment.</p>
    </section>

    <section>
      <h2>My Role</h2>
      <p>I served as the software engineer responsible for building the frontend application, implementing automated prayer sessions, integrating third-party audio and speech services, and collaborating directly with stakeholders to refine the experience through multiple iterations.</p>
    </section>

    <section>
      <h2>Responsibilities</h2>
      <div class="mt-8">
        <app-responsibility-timeline [items]="[
          'Authentication and user onboarding',
          'Personal prayer journal',
          'Guided prayer session automation',
          'Speechmatics speech synthesis integration',
          'Administrative dashboard',
          'Prayer library management',
          'CSV-powered prayer content import',
          'Community testimony submission',
          'Testimony moderation system',
          'Daily prayer automation',
          'Email workflows (Resend)',
          'Responsive design across devices',
          'Production deployment on Cloudflare',
          'Technical documentation'
        ]"></app-responsibility-timeline>
      </div>
    </section>

    <section>
      <h2>Engineering Decisions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <app-decision-card
          title="Why prayer sessions were automated"
          icon="fas fa-magic"
          tag="Product"
        >
          Manual prayer sessions would have required users to navigate between steps independently, breaking the continuity that makes guided prayer meaningful. Automating the session flow — advancing through steps, triggering audio at the right moments, handling pauses and transitions — allowed the application to guide users through an experience rather than simply presenting content for them to navigate.
        </app-decision-card>

        <app-decision-card
          title="Why Cloudflare over Vercel for production"
          icon="fas fa-cloud"
          tag="Infrastructure"
        >
          Spirit Connect served a community of users who expected consistent access. Cloudflare's global edge network, caching capabilities, and DDoS protection provided a stronger reliability foundation for a production application serving a community whose trust depended on consistent availability.
        </app-decision-card>
      </div>
    </section>

    <section>
      <h2>Biggest Challenge</h2>
      <p>The automated prayer session behaved inconsistently across browsers and mobile devices.</p>
      <p>Audio playback timing varied between browsers. Mobile browsers applied different autoplay restrictions. Background audio and voice narration sometimes fell out of sync. Content provided by the client occasionally contained formatting inconsistencies that disrupted session flow.</p>
      <p>Rather than applying isolated fixes for each device or browser, I continued refining the session architecture — improving how audio was loaded and triggered, standardizing content preprocessing, and testing across real devices rather than browser developer tools.</p>
      <p>The process required patience and close collaboration with the client to standardize content and validate each iteration. It also reinforced something important: software must be tested where users actually use it, not where developers build it.</p>
    </section>

    <section>
      <h2>What I Learned</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <app-lesson-card title="Cross-device testing is not optional.">
          Issues that don't appear in desktop development tools can be fundamental to mobile browser behaviour.
        </app-lesson-card>
        <app-lesson-card title="Content quality affects software quality.">
          Poorly structured input data can break otherwise reliable systems. Preprocessing and validation are engineering responsibilities.
        </app-lesson-card>
        <app-lesson-card title="Automation requires careful design.">
          Automated sequences that depend on timing need to account for network latency, browser restrictions, and device capabilities.
        </app-lesson-card>
        <app-lesson-card title="Software can carry meaning.">
          Building a platform designed to help people pray reminded me that software is sometimes more than functional — it can be meaningful.
        </app-lesson-card>
      </div>
    </section>

    <section>
      <h2>Reflection</h2>
      <p>Spirit Connect reminded me that not all software is purely transactional.</p>
      <p>The experience a user has during a guided prayer session is the product. Technical correctness is necessary but not sufficient — the session has to feel right.</p>
      <p>That distinction — between software that works and software that works well in the context it was built for — is one I carry into every project since.</p>
    </section>
  </app-case-study-layout>
  `
})
export class SpiritconnectComponent {}
