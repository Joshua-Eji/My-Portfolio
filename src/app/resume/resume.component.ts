import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="min-h-screen pt-16 pb-24 bg-bg-base">
      <div class="max-w-4xl mx-auto px-6">

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <div class="text-accent-violet-soft font-mono text-sm mb-2">My Resume</div>
            <h1 class="text-3xl md:text-4xl font-bold text-text-primary">Curriculum Vitae</h1>
          </div>

          <a href="/Joshua_SoftwareEngineer_Resume.pdf" download class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-violet text-white hover:bg-accent-violet-soft transition-colors shadow-lg shadow-accent-violet/20 font-medium whitespace-nowrap">
            <i class="fas fa-download"></i>
            Download PDF
          </a>
        </div>

        <!-- The beautifully styled resume document -->
        <div class="bg-[#f8fafc] text-gray-900 rounded-xl shadow-2xl p-8 md:p-16 border border-border-card max-w-[850px] mx-auto print:shadow-none print:bg-white print:p-0">

          <!-- Header -->
          <div class="mb-10">
            <h1 class="text-4xl font-bold text-gray-900 tracking-tight mb-2">Joshua Ejiobih</h1>
            <div class="text-xl text-gray-600 font-medium italic mb-4">Software Engineer</div>
            <div class="text-sm text-gray-500 border-b-2 border-gray-200 pb-4 flex flex-wrap gap-x-2 gap-y-1">
              <span>Lagos, Nigeria</span> &middot;
              <a href="mailto:joshuaejiobih&#64;gmail.com" class="hover:text-accent-violet transition-colors">joshuaejiobih&#64;gmail.com</a> &middot;
              <a href="https://www.linkedin.com/in/joshua-ejiobih/" target="_blank" rel="noopener" class="hover:text-accent-violet transition-colors">linkedin.com/in/joshua-ejiobih</a> &middot;
              <a href="https://github.com/Joshua-Eji" target="_blank" rel="noopener" class="hover:text-accent-violet transition-colors">github.com/Joshua-Eji</a>
            </div>
          </div>

          <!-- Summary -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Summary</h2>
            <p class="text-gray-700 leading-relaxed">
              Pulled a client's entire database out of a platform with no export feature at all, by directing its built-in AI tooling to generate the one tool that could do the job, then running the migration myself under a locked-down admin session. That platform is live today on the data I moved. I also found and closed a privilege escalation gap in its access control. Software engineer focused on frontend development, with experience building production web applications across healthcare, UK immigration compliance and community platforms, comfortable moving between frontend architecture, authentication systems and AI integration, with backend and system design as the next stretch of that range.
            </p>
          </section>

          <!-- Experience -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Experience</h2>

            <div class="mb-6">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <span class="text-lg font-bold text-gray-900">Frontend Engineer (Intern)</span>
                <span class="text-sm text-gray-500 font-medium">April 2025 &ndash; June 2026</span>
              </div>
              <div class="text-gray-600 font-medium italic mb-3">Bincom Dev Center &middot; Lagos, Nigeria</div>
              <p class="text-gray-700 mb-3">Contributed to four client software products &mdash; FoodRisk AI, Sponsor Compliance System, Spirit Connect and CQC Companion &mdash; across healthcare, UK immigration compliance and community engagement, building two from the ground up within a cross-functional team.</p>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>Built and maintained major frontend features in React and TypeScript.</li>
                <li>Integrated Gemini-powered AI functionality through Supabase Edge Functions, including AI-assisted image analysis and ingredient evaluation.</li>
                <li>Designed centralized audit and error logging so production failures could be traced to a cause rather than guessed at.</li>
                <li>Implemented authentication, onboarding, email verification, Google OAuth and role-based access control across healthcare and compliance products.</li>
                <li>Executed database schema migrations and supported deployment workflows.</li>
                <li>Authored technical documentation including PRDs, migration guides, architecture diagrams, backend specifications, and project handover documents.</li>
                <li>Collaborated with designers, QA engineers, product managers, and technical writers throughout the full software development lifecycle.</li>
              </ul>
            </div>

            <div class="mb-6">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <span class="text-lg font-bold text-gray-900">Facilitator</span>
                <span class="text-sm text-gray-500 font-medium">August 2025 &ndash; May 2026</span>
              </div>
              <div class="text-gray-600 font-medium italic mb-3">Bincom Academy &middot; Lagos, Nigeria</div>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>Taught web development to more than one hundred learners across multiple cohorts &mdash; JavaScript, TypeScript, React, Git workflows and deployment fundamentals.</li>
                <li>Built the instructional material and mentored beginners individually through project work.</li>
              </ul>
            </div>

            <div class="mb-2">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <span class="text-lg font-bold text-gray-900">Industrial Trainee</span>
                <span class="text-sm text-gray-500 font-medium">May 2023 &ndash; August 2023</span>
              </div>
              <div class="text-gray-600 font-medium italic mb-3">Opex Academy</div>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>Built mobile applications in Flutter and Dart within a structured team development environment &mdash; the starting point of a path into frontend and production engineering.</li>
              </ul>
            </div>
          </section>

          <!-- Projects -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Projects</h2>

            <div class="mb-6">
              <div class="font-bold text-gray-900 text-lg">FoodRisk AI</div>
              <div class="text-gray-600 italic mb-2">Built from scratch. An AI-powered platform that helps people catch food risks and allergens before they eat, not after.</div>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700 mb-2">
                <li>Built the full application frontend from scratch including all major feature modules.</li>
                <li>Replaced a failing OCR pipeline with Gemini-powered image understanding once traditional OCR proved too unreliable for real food labels &mdash; questioning the approach rather than optimising the wrong tool.</li>
                <li>Built a key rotation system that kept AI features running through quota limits, switching between Gemini keys automatically instead of dropping requests.</li>
                <li>Built the Admin and Super Admin dashboards from the ground up, including audit logs and error tracking that gave the team visibility into failures they could not see before.</li>
              </ul>
              <div class="text-sm text-gray-500 italic">Stack: React &middot; TypeScript &middot; Tailwind CSS &middot; Supabase &middot; Gemini API &middot; Vercel</div>
            </div>

            <div class="mb-6">
              <div class="font-bold text-gray-900 text-lg">Sponsor Compliance System</div>
              <div class="text-gray-600 italic mb-2">A compliance platform used by UK Licensed Sponsors to track workforce and immigration requirements, where a mistake in access control has real regulatory consequences.</div>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700 mb-2">
                <li>Pulled the platform's entire database out of a system with no export feature at all, by directing its built-in AI tooling to generate the one tool that could do the job, then running the migration under a locked-down admin session. The platform is live today on that data. <a routerLink="/engineering/scs" class="text-accent-violet hover:underline font-medium">Full write-up</a>.</li>
                <li>Found a privilege escalation flaw in the platform's access control and rebuilt the permission checks at the layer where they actually needed to sit.</li>
                <li>Built the centralized activity and error logging that gave the team visibility into production issues for the first time.</li>
                <li>Improved application architecture, maintainability and UI consistency across existing modules.</li>
              </ul>
              <div class="text-sm text-gray-500 italic">Stack: React &middot; TypeScript &middot; Supabase &middot; Tailwind CSS &middot; Cloudflare</div>
            </div>

            <div class="mb-4">
              <div class="font-bold text-gray-900 text-lg">Spirit Connect</div>
              <div class="text-gray-600 italic mb-2">Built from scratch. A guided prayer and journaling platform where the hardest problem was not the backend &mdash; it was getting an automated audio session to behave the same way on an iPhone as it did on a desktop browser.</div>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700 mb-2">
                <li>Built automated guided prayer sessions with synchronized text, speech synthesis and background audio.</li>
                <li>Resolved cross-device audio inconsistencies through repeated testing and iteration with the client, standardizing timing and playback behaviour across browsers and mobile operating systems.</li>
                <li>Developed testimony moderation, prayer library administration and administrative dashboards.</li>
              </ul>
              <div class="text-sm text-gray-500 italic">Stack: React &middot; JavaScript &middot; Cloudflare &middot; Resend &middot; Speechmatics</div>
            </div>
          </section>

          <!-- Technical Impact -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Technical Impact</h2>
            <ul class="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>Contributed to four client software products across healthcare, compliance and digital communities, building two of them from scratch.</li>
                <li>Facilitated technical learning for 100+ students across multiple development cohorts at Bincom Academy.</li>
                <li>Introduced engineering improvements &mdash; centralized logging, AI key rotation, a secure migration out of a closed platform &mdash; that made the systems easier to maintain and to debug.</li>
                <li>Collaborated across engineering, QA, product, design and documentation teams on concurrent projects.</li>
                <li>Authored extensive technical documentation supporting production software delivery and long-term maintainability.</li>
            </ul>
          </section>

          <!-- Skills -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Skills</h2>
            <div class="grid grid-cols-[150px_1fr] gap-y-2 gap-x-4 text-gray-700">
              <div class="font-bold text-gray-800">Languages</div>
              <div>JavaScript &middot; TypeScript &middot; Dart &middot; HTML &middot; CSS</div>

              <div class="font-bold text-gray-800">Frameworks</div>
              <div>React &middot; Tailwind CSS</div>

              <div class="font-bold text-gray-800">Backend & Cloud</div>
              <div>Supabase &middot; Firebase &middot; REST APIs &middot; Edge Functions</div>

              <div class="font-bold text-gray-800">AI</div>
              <div>Gemini API &middot; AI-assisted image analysis &middot; Prompt-driven features</div>

              <div class="font-bold text-gray-800">Practices</div>
              <div>Authentication &middot; Role-Based Access Control &middot; Database Migrations &middot; Observability and Logging &middot; Technical Documentation</div>

              <div class="font-bold text-gray-800">Tools</div>
              <div>Git &middot; GitHub &middot; Cloudflare &middot; Vercel &middot; Resend &middot; Speechmatics</div>
            </div>
          </section>

          <!-- Education -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Education</h2>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <span class="font-bold text-gray-900 text-lg">B.Sc. Computer Science</span>
              <span class="text-sm text-gray-500 font-medium">March 2024</span>
            </div>
            <div class="text-gray-700 font-medium mb-1">University of Nigeria, Nsukka</div>
            <div class="text-gray-600 italic">Research: Receipt Genius &mdash; a receipt generation application for SMEs, built in Flutter</div>
          </section>

          <!-- Certifications & Languages -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Certifications</h2>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700">
                <li><strong>Anthropic</strong> AI Fluency: Framework and Foundations &mdash; 2026</li>
                <li><strong>Anthropic</strong> Claude 101 &mdash; 2026</li>
                <li><strong>Cisco Networking Academy</strong> Introduction to Cybersecurity &mdash; 2023</li>
                <li><strong>Opex Academy</strong> Mobile Application Development &mdash; 2023</li>
              </ul>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Languages</h2>
              <p class="text-gray-700"><strong>English</strong> &mdash; Fluent</p>
            </section>
          </div>

        </div>
      </div>
    </main>
  `
})
export class ResumeComponent {}
