import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
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
              <a href="https://linkedin.com/in/joshua-ejiobih-3993a26a" target="_blank" class="hover:text-accent-violet transition-colors">linkedin.com/in/joshua-ejiobih</a> &middot; 
              <a href="https://my-portfoio.vercel.app" target="_blank" class="hover:text-accent-violet transition-colors">my-portfoio.vercel.app</a>
            </div>
          </div>

          <!-- Summary -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Summary</h2>
            <p class="text-gray-700 leading-relaxed">
              Software engineer with experience building production web applications spanning AI, healthcare, regulatory compliance, and digital communities. I enjoy solving ambiguous engineering problems, from integrating AI services and designing reliable logging systems to improving developer workflows and shipping user-focused products. My long-term goal is to build intelligent software that combines thoughtful user experiences with dependable engineering.
            </p>
          </section>

          <!-- Experience -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Experience</h2>
            
            <div class="mb-6">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <span class="text-lg font-bold text-gray-900">Software Engineer</span>
                <span class="text-sm text-gray-500 font-medium">April 2025 &ndash; June 2026</span>
              </div>
              <div class="text-gray-600 font-medium italic mb-3">Bincom Dev Center &middot; Lagos, Nigeria</div>
              <p class="text-gray-700 mb-3">Collaborated with a multidisciplinary engineering team to deliver production software across healthcare, compliance, and community platforms.</p>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>Built and maintained major frontend features across five production applications using React and TypeScript.</li>
                <li>Integrated Gemini-powered AI functionality through Supabase Edge Functions, including AI-assisted image analysis and ingredient evaluation.</li>
                <li>Designed centralized audit and error logging systems that improved production debugging and reduced time to diagnosis across multiple projects.</li>
                <li>Implemented secure authentication, onboarding flows, and role-based access control across healthcare and compliance products.</li>
                <li>Executed database schema migrations and supported deployment workflows.</li>
                <li>Authored technical documentation including PRDs, migration guides, architecture diagrams, backend specifications, and project handover documents.</li>
                <li>Collaborated with designers, QA engineers, product managers, and technical writers throughout the full software development lifecycle.</li>
              </ul>
            </div>
          </section>

          <!-- Projects -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Projects</h2>
            
            <div class="mb-6">
              <div class="font-bold text-gray-900 text-lg">FoodRisk AI</div>
              <div class="text-gray-600 italic mb-2">AI-assisted food safety platform helping users identify allergens and understand food ingredients.</div>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700 mb-2">
                <li>Built the full application frontend from scratch including all major feature modules.</li>
                <li>Replaced conventional OCR with AI-assisted image analysis after evaluating accuracy limitations &mdash; questioning the approach, not optimising the wrong tool.</li>
                <li>Designed an API key rotation mechanism to improve service reliability under quota and rate-limit constraints, allowing administrators to manage multiple Gemini API keys with automatic failover.</li>
                <li>Implemented centralized audit and error logging to accelerate debugging and support QA workflows.</li>
                <li>Built administrative dashboards with granular role-based permissions for Admin and Super Admin users.</li>
              </ul>
              <div class="text-sm text-gray-500 italic">Stack: React &middot; TypeScript &middot; Tailwind CSS &middot; Supabase &middot; Gemini API &middot; Vercel</div>
            </div>

            <div class="mb-6">
              <div class="font-bold text-gray-900 text-lg">Sponsor Compliance System</div>
              <div class="text-gray-600 italic mb-2">Compliance platform supporting UK Home Office Licensed Sponsors.</div>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700 mb-2">
                <li>Improved application architecture, maintainability, and UI consistency across existing modules.</li>
                <li>Designed audit and diagnostic logging for operational visibility.</li>
                <li>Implemented a secure migration strategy to transfer production data from a restricted Lovable-managed development environment into a standalone Supabase deployment &mdash; a migration conventional tools could not support.</li>
              </ul>
              <div class="text-sm text-gray-500 italic">Stack: React &middot; TypeScript &middot; Supabase &middot; Tailwind CSS &middot; Cloudflare</div>
            </div>

            <div class="mb-4">
              <div class="font-bold text-gray-900 text-lg">Spirit Connect</div>
              <div class="text-gray-600 italic mb-2">Community-driven digital prayer and journaling platform.</div>
              <ul class="list-disc pl-5 space-y-1.5 text-gray-700 mb-2">
                <li>Built automated guided prayer sessions with synchronized text, speech synthesis, and background audio.</li>
                <li>Resolved cross-device consistency issues affecting prayer session automation across browsers and mobile operating systems through multiple stakeholder iterations.</li>
                <li>Developed testimony moderation, prayer management systems, and administrative dashboards.</li>
              </ul>
              <div class="text-sm text-gray-500 italic">Stack: React &middot; JavaScript &middot; Cloudflare &middot; Resend &middot; Speechmatics</div>
            </div>
          </section>

          <!-- Technical Impact -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Technical Impact</h2>
            <ul class="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>Contributed to five production software products across healthcare, compliance, and digital communities.</li>
                <li>Facilitated technical learning for 100+ students across multiple development cohorts at Bincom Academy.</li>
                <li>Collaborated across engineering, QA, product, design, and documentation teams on concurrent projects.</li>
                <li>Introduces engineering improvements &mdash; centralized logging, AI key rotation, secure migrations &mdash; that increased maintainability, reliability, and debugging efficiency.</li>
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
              
              <div class="font-bold text-gray-800">Tools</div>
              <div>Git &middot; GitHub &middot; Cloudflare &middot; Vercel &middot; Resend &middot; Speechmatics</div>
            </div>
          </section>

          <!-- Education -->
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Education</h2>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <span class="font-bold text-gray-900 text-lg">B.Sc. Computer Science</span>
              <span class="text-sm text-gray-500 font-medium">2024</span>
            </div>
            <div class="text-gray-700 font-medium mb-1">University of Nigeria, Nsukka</div>
            <div class="text-gray-600 italic">Research: Receipt Genius &mdash; Design and Implementation of a Receipt Generation Application for SMEs</div>
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
