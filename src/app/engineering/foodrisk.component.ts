import { Component } from '@angular/core';
import { CaseStudyLayoutComponent } from '../components/case-study-layout.component';
import { DecisionCardComponent } from '../components/decision-card.component';
import { ArchitectureDiagramComponent } from '../components/architecture-diagram.component';
import { LessonCardComponent } from '../components/lesson-card.component';
import { ResponsibilityTimelineComponent } from '../components/responsibility-timeline.component';

@Component({
  selector: 'app-foodrisk',
  standalone: true,
  imports: [
    CaseStudyLayoutComponent,
    DecisionCardComponent,
    ArchitectureDiagramComponent,
    LessonCardComponent,
    ResponsibilityTimelineComponent
  ],
  template: `
  <app-case-study-layout
    title="FoodRisk AI"
    role="Software Engineer"
    status="Production-ready"
    [techStack]="['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini API', 'Vercel']"
    liveUrl="https://allergy-app-five.vercel.app/"
    imageUrl="/foodrisk.png"
    nextLink="/engineering/scs"
    nextTitle="Sponsor Compliance System"
  >
    <section>
      <h2>Overview</h2>
      <p>FoodRisk AI was designed to help people make safer food choices by combining barcode scanning, AI-powered ingredient analysis, and personalized allergy profiles.</p>
      <p>Rather than simply displaying nutritional information, the goal was to help users understand whether a specific product aligned with their personal dietary needs and restrictions.</p>
      <p>The product combines traditional software engineering with modern AI capabilities, requiring thoughtful frontend architecture, backend integrations, and developer tooling designed to support an evolving product.</p>
    </section>

    <section>
      <h2>The Problem</h2>
      <p>Many existing food applications stop at presenting raw nutritional information.</p>
      <p>The challenge here was different.</p>
      <p>The application needed to interpret ingredients, explain potential risks, personalize responses based on individual user allergies, and present that information in a way that remained understandable to everyday users, not just people with technical or nutritional expertise.</p>
      <p>It also required an administration platform capable of managing products, users, and AI behaviour while remaining maintainable for ongoing development.</p>
    </section>

    <section>
      <h2>My Role</h2>
      <p>I served as the primary software engineer responsible for building the frontend application and translating product requirements into a working platform.</p>
      <p>Beyond implementing interfaces, I contributed to authentication flows, administrative tooling, AI integrations, developer logging, deployment workflows, technical documentation, and architectural decisions that improved long-term maintainability.</p>
    </section>

    <section>
      <h2>Responsibilities</h2>
      <div class="mt-8">
        <app-responsibility-timeline [items]="[
          'Authentication and onboarding flows',
          'Role-Based Access Control (Admin and Super Admin)',
          'Admin Dashboard',
          'Gemini AI Integration via Edge Functions',
          'AI-assisted OCR (replaced traditional OCR)',
          'Barcode scanning workflows',
          'Ingredient analysis features',
          'Recipe suggestions',
          'Activity logging system',
          'Developer error logging system',
          'Analytics dashboard',
          'CSV export',
          'Product override management',
          'Company settings',
          'API key rotation system',
          'Deployment support',
          'Technical documentation'
        ]"></app-responsibility-timeline>
      </div>
    </section>

    <section>
      <h2>Engineering Decisions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <app-decision-card
          title="Why Gemini replaced traditional OCR"
          icon="fas fa-brain"
          tag="Architecture"
        >
          The initial OCR approach produced inconsistent results because food packaging varies significantly in lighting, layout, and image quality. Rather than investing time in improving an increasingly unreliable extraction pipeline, I redesigned the workflow so Gemini Vision handled both text extraction and contextual interpretation simultaneously. The result was a simpler architecture that produced more meaningful, contextual outputs while eliminating the need for multiple processing stages.
        </app-decision-card>

        <app-decision-card
          title="Why centralized API key management"
          icon="fas fa-key"
          tag="Reliability"
        >
          AI systems introduce operational problems that traditional web applications rarely face. Quota exhaustion, rate limits, and temporary service unavailability directly affect user experience in ways that are difficult to predict. I designed an administrative API key management system allowing multiple Gemini API keys to be registered and actively monitored. Requests automatically rotate between available keys based on availability, reducing service interruptions without requiring developer intervention on every failure.
        </app-decision-card>

        <app-decision-card
          title="Why internal logging before external observability"
          icon="fas fa-terminal"
          tag="Developer Experience"
        >
          During earlier projects I learned that debugging production systems becomes significantly harder without visibility into user activity and application failures. Rather than immediately adopting an external observability platform, which would have required justification before the product proved its value, I introduced centralized activity logging and developer-focused error logging that provided immediate insight into system behaviour and helped stakeholders understand the long-term value of production observability.
        </app-decision-card>

        <app-decision-card
          title="Why Vercel for development, Cloudflare for production"
          icon="fas fa-server"
          tag="Infrastructure"
        >
          Development prioritizes iteration speed. Production prioritizes reliability and security. During active development, Vercel provided rapid deployments and simplified the feedback cycle. Production infrastructure was intentionally planned around Cloudflare because its networking, caching, and security capabilities better align with what a healthcare-adjacent product requires at scale.
        </app-decision-card>
      </div>
    </section>

    <section>
      <h2>Architecture</h2>
      <div class="mt-8">
        <app-architecture-diagram [nodes]="[
          'User',
          'Authentication (Supabase Auth)',
          'Application (React Frontend)',
          'Edge Functions (Supabase)',
          'Gemini API',
          'Activity Logs (Supabase DB)',
          'Admin Dashboard'
        ]"></app-architecture-diagram>
      </div>
    </section>

    <section>
      <h2>Biggest Challenge</h2>
      <p>Integrating AI through Supabase Edge Functions proved significantly more complex than simply calling an external API.</p>
      <p>The project introduced an unfamiliar class of problems: authentication failures, configuration mistakes, quota exhaustion, malformed responses, and intermittent AI service availability. Each failure mode required a different debugging approach, and the combination of a new AI provider, an unfamiliar edge computing environment, and a product timeline created sustained pressure throughout development.</p>
      <p>Rather than treating each error as an isolated incident, I gradually redesigned the surrounding architecture: improving error handling, strengthening logging, and introducing automated API key rotation. The experience fundamentally changed how I think about integrating AI capabilities into production software.</p>
    </section>

    <section>
      <h2>What I Learned</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <app-lesson-card title="AI engineering extends beyond prompt writing.">
          Reliability, quota management, and failure handling are engineering concerns that shape system architecture.
        </app-lesson-card>
        <app-lesson-card title="Observability saves development time.">
          Centralized logging paid for itself within days of implementation through faster debugging.
        </app-lesson-card>
        <app-lesson-card title="Iteration produces better software.">
          The final architecture looked nothing like the initial implementation, and was better for it.
        </app-lesson-card>
        <app-lesson-card title="Developer experience matters.">
          Tooling that makes debugging easier reduces frustration and improves the quality of decisions made under pressure.
        </app-lesson-card>
        <app-lesson-card title="Reliable software is designed.">
          Reliability doesn't emerge from careful coding alone. It requires deliberate architectural decisions.
        </app-lesson-card>
        <app-lesson-card title="Question the approach, not just the implementation.">
          Replacing OCR entirely was faster and more effective than optimizing a flawed pipeline.
        </app-lesson-card>
      </div>
    </section>

    <section>
      <h2>Reflection</h2>
      <p>FoodRisk AI became the project where I began thinking less like a frontend developer and more like a software engineer.</p>
      <p>It required balancing product requirements, AI limitations, backend integrations, and long-term maintainability rather than simply implementing the interfaces in a design file.</p>
      <p>Many of the engineering decisions I carry into newer projects, including centralized logging, resilient API integration and thoughtful deployment planning, originated here.</p>
    </section>
  </app-case-study-layout>
  `
})
export class FoodriskComponent {}
