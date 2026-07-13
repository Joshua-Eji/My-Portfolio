import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="max-w-7xl mx-auto px-6">
    <!-- Hero Section -->
    <section class="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20 relative">
      <div class="max-w-4xl">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-status-success/10 border border-status-success/20 mb-8 animate-fade-in">
          <span class="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
          <span class="text-xs font-mono font-medium tracking-wide text-status-success">Open to new opportunities</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-[clamp(3rem,8vw,5rem)] font-bold tracking-tight text-text-primary mb-4 animate-fade-in" style="animation-delay: 100ms">
          Joshua Ejiobih
        </h1>
        
        <h2 class="text-2xl md:text-4xl font-semibold text-accent-violet-soft mb-8 animate-fade-in" style="animation-delay: 200ms">
          Software Engineer
        </h2>
        
        <p class="text-xl md:text-2xl font-medium text-text-primary mb-6 max-w-3xl leading-relaxed animate-fade-in" style="animation-delay: 300ms">
          Building reliable software through thoughtful engineering.
        </p>
        
        <p class="text-lg text-text-secondary leading-relaxed max-w-3xl mb-12 animate-fade-in" style="animation-delay: 400ms">
          I enjoy solving engineering problems across AI-powered products, frontend architecture, backend systems, and developer tooling. I care about building software that is reliable, maintainable, and genuinely useful.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-in" style="animation-delay: 500ms">
          <a routerLink="/" fragment="resume" class="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent-violet text-text-primary font-medium hover:bg-accent-violet-soft transition-colors shadow-lg hover:shadow-accent-violet/20">
            Resume
          </a>
          <a href="https://github.com/Joshua-Eji" target="_blank" class="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-transparent border border-border-subtle text-text-primary font-medium hover:bg-bg-card transition-colors">
            GitHub
            <i class="fas fa-external-link-alt ml-2 text-sm"></i>
          </a>
        </div>
      </div>

      <!-- Stat Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style="animation-delay: 600ms">
        <div class="bg-bg-card border border-border-subtle rounded-xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl">
          <div class="text-3xl font-bold text-text-primary mb-2">5+</div>
          <div class="text-sm text-text-secondary">Production Products</div>
        </div>
        <div class="bg-bg-card border border-border-subtle rounded-xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl">
          <div class="text-3xl font-bold text-text-primary mb-2">100+</div>
          <div class="text-sm text-text-secondary">Developers Mentored</div>
        </div>
        <div class="bg-bg-card border border-border-subtle rounded-xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl">
          <div class="text-3xl font-bold text-text-primary mb-2">3+</div>
          <div class="text-sm text-text-secondary">AI Integrations</div>
        </div>
        <div class="bg-bg-card border border-border-subtle rounded-xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl">
          <div class="text-3xl font-bold text-text-primary mb-2">1</div>
          <div class="text-sm text-text-secondary line-clamp-3">Mission: Build software that genuinely improves people's lives</div>
        </div>
      </div>
    </section>

    <!-- Why I Build Section -->
    <section id="why-i-build" class="py-24">
      <div class="max-w-3xl">
        <div class="text-accent-violet-soft font-mono text-sm mb-4">01.</div>
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-12">Why I Build</h2>
        
        <div class="space-y-6 text-text-secondary text-lg leading-relaxed">
          <p>Joshua's journey into software engineering didn't begin with frontend development.</p>
          <p>He originally started learning mobile application development using Flutter during his industrial training because he was fascinated by the idea of building software people could carry in their pockets.</p>
          <p>After joining Bincom Dev Center, that path changed. The engineering team primarily developed web applications with React, so he transitioned into frontend engineering and began learning HTML, CSS, JavaScript, TypeScript, and React from the ground up.</p>
          <p>Within a relatively short period, he moved from learning the fundamentals to delivering production software for international clients.</p>
          <p>That experience reshaped how he viewed software engineering.</p>
          <p>Frameworks change. Problems don't.</p>
          <p>Today his interests extend beyond frontend into backend engineering, system design, developer tooling, observability, and AI systems — because he believes understanding complete systems leads to better software.</p>
          <p>His goal isn't to become someone who knows every technology.</p>
          <p>His goal is to become someone people trust with difficult engineering problems.</p>
        </div>
        
        <div class="mt-20 mb-12 text-center max-w-2xl mx-auto">
          <p class="text-2xl md:text-3xl font-medium italic text-text-secondary leading-snug">
            Good engineering isn't about knowing every answer — it's about being willing to stay with the problem until one emerges.
          </p>
        </div>
      </div>
    </section>

    <!-- How I Think Section -->
    <section id="how-i-think" class="py-24 border-t border-border-subtle/50">
      <div class="text-accent-violet-soft font-mono text-sm mb-4">02.</div>
      <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-16">How I Think</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-bg-card border border-border-card rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-xl group">
          <h3 class="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-violet-soft transition-colors">Quality comes through iteration.</h3>
          <p class="text-text-secondary leading-relaxed">The first solution is rarely the best solution. I improve systems through observation, testing, and refinement rather than chasing perfection from the start.</p>
        </div>
        
        <div class="bg-bg-card border border-border-card rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-xl group">
          <h3 class="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-violet-soft transition-colors">Logs are features.</h3>
          <p class="text-text-secondary leading-relaxed">Reliable software depends on visibility. Good logging isn't only for developers — it improves debugging, support, and long-term maintainability.</p>
        </div>
        
        <div class="bg-bg-card border border-border-card rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-xl group">
          <h3 class="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-violet-soft transition-colors">Understand before building.</h3>
          <p class="text-text-secondary leading-relaxed">I prefer understanding the product, the users, and the constraints before writing implementation code.</p>
        </div>
        
        <div class="bg-bg-card border border-border-card rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-xl group">
          <h3 class="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-violet-soft transition-colors">Documentation is engineering.</h3>
          <p class="text-text-secondary leading-relaxed">Clear documentation helps software outlive its original developers.</p>
        </div>
        
        <div class="bg-bg-card border border-border-card rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-xl group">
          <h3 class="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-violet-soft transition-colors">Automate repetitive work.</h3>
          <p class="text-text-secondary leading-relaxed">If a process happens repeatedly, I naturally look for ways to automate it.</p>
        </div>
        
        <div class="bg-bg-card border border-border-card rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-xl group">
          <h3 class="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-violet-soft transition-colors">Learn continuously.</h3>
          <p class="text-text-secondary leading-relaxed">Every difficult project teaches something useful that improves the next one.</p>
        </div>
      </div>
    </section>

    <!-- Engineering Toolkit Section -->
    <section id="engineering-toolkit" class="py-24 border-t border-border-subtle/50">
      <div class="text-accent-violet-soft font-mono text-sm mb-4">03.</div>
      <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-16">Engineering Toolkit</h2>
      
      <div class="space-y-12">
        <div>
          <h3 class="text-lg font-mono font-bold text-text-primary mb-6">Languages</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">JavaScript</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">TypeScript</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Dart</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">SQL</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-mono font-bold text-text-primary mb-6">Frontend</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">React</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">HTML</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">CSS</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Tailwind</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Responsive Design</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Accessibility</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-mono font-bold text-text-primary mb-6">Backend</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Supabase</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Firebase</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Authentication</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Edge Functions</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Database Design</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Role Based Access</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-mono font-bold text-text-primary mb-6">AI</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Gemini</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Prompt Engineering</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Vision APIs</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">OCR Pipelines</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">AI Integrations</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-mono font-bold text-text-primary mb-6">Infrastructure</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Vercel</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Cloudflare</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Git</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">GitHub</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Deployment</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Environment Management</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-mono font-bold text-text-primary mb-6">Engineering Practices</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Technical Documentation</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Architecture Planning</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Debugging</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">QA Collaboration</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Developer Tooling</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Observability</span>
            <span class="px-4 py-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Product Thinking</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section id="journey" class="py-24 border-t border-border-subtle/50">
      <div class="text-accent-violet-soft font-mono text-sm mb-4">04.</div>
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary">Journey</h2>
        <a routerLink="/journey" class="text-accent-violet-soft hover:text-accent-violet transition-colors inline-flex items-center gap-2 font-medium">
          View full timeline <i class="fas fa-arrow-right text-sm"></i>
        </a>
      </div>
      
      <div class="relative border-l border-border-subtle ml-3 md:ml-6 pl-8 md:pl-12 space-y-12">
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-accent-violet-soft border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-accent-violet-soft mb-2">Today</div>
          <p class="text-lg text-text-primary font-medium">Deepening backend engineering, system design, AI systems, and cloud infrastructure knowledge</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2025</div>
          <p class="text-lg text-text-primary font-medium mb-1">Facilitated 100+ developers at Bincom Academy</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2026</div>
          <p class="text-lg text-text-primary font-medium mb-1">FoodRisk AI</p>
          <p class="text-text-secondary">AI-powered food safety platform</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2025</div>
          <p class="text-lg text-text-primary font-medium mb-1">Sponsor Compliance System</p>
          <p class="text-text-secondary">UK Home Office compliance platform</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2025</div>
          <p class="text-lg text-text-primary font-medium mb-1">Spirit Connect</p>
          <p class="text-text-secondary">Digital prayer and journaling platform</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2025</div>
          <p class="text-lg text-text-primary font-medium mb-1">Joined Bincom Dev Center</p>
          <p class="text-text-secondary">Transitioned into frontend engineering with React</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2024</div>
          <p class="text-lg text-text-primary font-medium mb-1">Graduated B.Sc. Computer Science</p>
          <p class="text-text-secondary">University of Nigeria Nsukka</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2023</div>
          <p class="text-lg text-text-primary font-medium mb-1">Receipt Genius</p>
          <p class="text-text-secondary">Undergraduate research project — receipt generation app for SMEs built with Flutter</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2023</div>
          <p class="text-lg text-text-primary font-medium mb-1">Industrial Training, Opex Academy</p>
          <p class="text-text-secondary">Learned Flutter and Dart, built mobile applications</p>
        </div>
        
        <div class="relative">
          <div class="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-border-subtle border-4 border-bg-primary"></div>
          <div class="font-mono text-sm text-text-muted mb-2">2019</div>
          <p class="text-lg text-text-primary font-medium mb-1">Data Entry Operator</p>
          <p class="text-text-secondary">Standards Organisation of Nigeria</p>
        </div>
      </div>
    </section>

    <!-- Teaching Section -->
    <section id="teaching" class="py-24 border-t border-border-subtle/50">
      <div class="max-w-3xl">
        <div class="text-accent-violet-soft font-mono text-sm mb-4">05.</div>
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-12">Teaching Software Engineering</h2>
        
        <div class="space-y-6 text-text-secondary text-lg leading-relaxed">
          <p>One of the most rewarding parts of my journey has been helping new developers begin theirs.</p>
          <p>As a facilitator at Bincom Academy, I worked with more than one hundred learners across different training sessions, introducing them to modern frontend development, JavaScript fundamentals, application architecture, and practical software engineering concepts.</p>
          <p>Teaching challenged me to communicate complex ideas clearly, strengthened my own understanding of software engineering, and reminded me that technical excellence also requires empathy and communication.</p>
        </div>
      </div>
    </section>

    <!-- Documentation Section -->
    <section id="documentation" class="py-24 border-t border-border-subtle/50">
      <div class="max-w-3xl">
        <div class="text-accent-violet-soft font-mono text-sm mb-4">06.</div>
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-12">Engineering Beyond Code</h2>
        
        <div class="space-y-6 text-text-secondary text-lg leading-relaxed">
          <p>Software development doesn't end when the feature works.</p>
          <p>Throughout multiple production projects, I contributed to project requirement documents, product requirement documents, backend specification documents, migration guides, architecture diagrams, weekly engineering reports, and project handover documentation.</p>
          <p>Well-written documentation reduces project risk, improves collaboration, and makes software easier to maintain long after it has been delivered.</p>
        </div>
      </div>
    </section>

    <!-- Engineering Work Section -->
    <section id="engineering" class="py-24 border-t border-border-subtle/50">
      <div class="text-accent-violet-soft font-mono text-sm mb-4">07.</div>
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">Engineering Work</h2>
          <p class="text-text-secondary text-lg mb-2">A collection of production software, technical experiments, and engineering decisions that shaped how I think about building reliable systems.</p>
          <p class="text-text-muted text-sm">These case studies focus less on technologies and more on the problems, decisions, and lessons behind each product.</p>
        </div>
        <a routerLink="/engineering" class="text-accent-violet-soft hover:text-accent-violet transition-colors inline-flex items-center gap-2 font-medium shrink-0">
          View all work <i class="fas fa-arrow-right text-sm"></i>
        </a>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <a routerLink="/engineering/foodrisk" class="group flex flex-col bg-bg-card rounded-2xl border border-border-card overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-violet-soft/10 transition-all duration-300">
          <div class="aspect-[4/3] bg-bg-primary relative overflow-hidden border-b border-border-card">
            <img src="/foodrisk.png" alt="FoodRisk AI preview" class="w-full h-full object-cover object-[center_top] opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" referrerpolicy="no-referrer" />
            <div class="absolute inset-0 bg-gradient-to-t from-bg-card/40 to-transparent mix-blend-overlay pointer-events-none"></div>
            <div class="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none"></div>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-4">
              <span class="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
              <span class="text-xs font-mono text-text-secondary">Production-ready</span>
            </div>
            <h4 class="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-violet-soft transition-colors">FoodRisk AI</h4>
            <p class="text-text-secondary text-sm leading-relaxed mb-6 flex-1">AI-powered food safety platform helping users identify allergens and understand food ingredients through barcode scanning and AI-assisted analysis.</p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">React</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">TypeScript</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Supabase</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Gemini</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Vercel</span>
            </div>
          </div>
        </a>

        <!-- Project 2 -->
        <a routerLink="/engineering/scs" class="group flex flex-col bg-bg-card rounded-2xl border border-border-card overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-violet-soft/10 transition-all duration-300">
          <div class="aspect-[4/3] bg-bg-primary relative overflow-hidden border-b border-border-card">
            <img src="/sponsors-guard.png" alt="Sponsor Compliance preview" class="w-full h-full object-cover object-[center_top] opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" referrerpolicy="no-referrer" />
            <div class="absolute inset-0 bg-gradient-to-t from-bg-card/40 to-transparent mix-blend-overlay pointer-events-none"></div>
            <div class="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none"></div>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-4">
              <span class="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
              <span class="text-xs font-mono text-text-secondary">Production</span>
            </div>
            <h4 class="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-violet-soft transition-colors">Sponsor Compliance System</h4>
            <p class="text-text-secondary text-sm leading-relaxed mb-6 flex-1">Compliance management platform for UK Home Office Licensed Sponsors. Contributed to frontend architecture, RBAC, database migrations, centralized logging, and a custom production migration workflow.</p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">React</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">TypeScript</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Supabase</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Cloudflare</span>
            </div>
          </div>
        </a>

        <!-- Project 3 -->
        <a routerLink="/engineering/spiritconnect" class="group flex flex-col bg-bg-card rounded-2xl border border-border-card overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-violet-soft/10 transition-all duration-300">
          <div class="aspect-[4/3] bg-gradient-to-br from-bg-card to-border-subtle flex items-center justify-center p-8 border-b border-border-card relative overflow-hidden group-hover:from-bg-card group-hover:to-accent-violet-soft/10 transition-colors duration-500">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bg-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none"></div>
            <div class="relative z-10 flex flex-col items-center justify-center gap-4">
              <div class="w-16 h-16 rounded-full bg-bg-primary/50 border border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-accent-violet-soft/30 transition-all duration-500">
                <i class="fas fa-dove text-2xl text-text-muted group-hover:text-accent-violet-soft transition-colors duration-500"></i>
              </div>
              <h3 class="text-2xl font-bold text-text-muted/50 group-hover:text-text-primary/80 transition-all duration-500">Spirit Connect</h3>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-4">
              <span class="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
              <span class="text-xs font-mono text-text-secondary">Production</span>
            </div>
            <h4 class="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-violet-soft transition-colors">Spirit Connect</h4>
            <p class="text-text-secondary text-sm leading-relaxed mb-6 flex-1">Progressive web application for guided prayer, spiritual journaling, and community engagement. Built automated prayer sessions with synchronized audio across browsers and devices.</p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">React</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">JavaScript</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Cloudflare</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Resend</span>
              <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Speechmatics</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="py-24 border-t border-border-subtle/50">
      <div class="max-w-3xl">
        <div class="text-accent-violet-soft font-mono text-sm mb-4">08.</div>
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-12">Resume</h2>
        
        <div class="bg-bg-card border border-border-card rounded-2xl p-8 md:p-12 mb-8">
          <h3 class="text-2xl font-bold text-text-primary mb-2">Joshua Ejiobih</h3>
          <p class="text-accent-violet-soft font-medium mb-8">Software Engineer</p>
          
          <div class="space-y-8">
            <div>
              <h4 class="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">Recent Role</h4>
              <p class="text-lg text-text-primary font-medium">Software Engineer</p>
              <p class="text-text-secondary">Bincom Dev Center (April 2025–June 2026)</p>
            </div>
            
            <div>
              <h4 class="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">Education</h4>
              <p class="text-lg text-text-primary font-medium">B.Sc. Computer Science</p>
              <p class="text-text-secondary">University of Nigeria Nsukka (2024)</p>
            </div>
            
            <div>
              <h4 class="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">Key Certifications</h4>
              <ul class="space-y-2 text-text-primary">
                <li>• AI Fluency (Anthropic)</li>
                <li>• Claude 101 (Anthropic)</li>
                <li>• Introduction to Cybersecurity (Cisco)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <a routerLink="/resume" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-border-subtle text-text-primary hover:bg-bg-card hover:border-accent-violet-soft/50 hover:text-accent-violet-soft transition-all duration-300">
            <i class="fas fa-file-alt text-accent-violet-soft"></i> View Full Resume
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 border-t border-border-subtle/50">
      <div class="max-w-3xl">
        <div class="text-accent-violet-soft font-mono text-sm mb-4">09.</div>
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-8">Get In Touch</h2>
        
        <p class="text-xl text-text-secondary leading-relaxed mb-10">
          I'm always interested in conversations about thoughtful engineering, graduate study, AI-powered products, and opportunities to solve meaningful problems. If something here resonates with you, I'd be happy to connect.
        </p>
        
        <div class="mb-12">
          <h3 class="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">Open to</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Software Engineering</span>
            <span class="px-3 py-1.5 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Graduate Opportunities</span>
            <span class="px-3 py-1.5 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Research</span>
            <span class="px-3 py-1.5 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-sm">Fellowships</span>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-6">
          <a href="mailto:joshuaejiobih@gmail.com" class="inline-flex items-center gap-3 text-lg text-text-primary hover:text-accent-violet-soft transition-colors font-medium">
            <i class="fas fa-envelope"></i> joshuaejiobih&#64;gmail.com
          </a>
          <a href="https://github.com/Joshua-Eji" target="_blank" class="inline-flex items-center gap-3 text-lg text-text-primary hover:text-accent-violet-soft transition-colors font-medium">
            <i class="fab fa-github"></i> github.com/Joshua-Eji
          </a>
          <a href="https://linkedin.com/in/joshua-ejiobih-3993a26a" target="_blank" class="inline-flex items-center gap-3 text-lg text-text-primary hover:text-accent-violet-soft transition-colors font-medium">
            <i class="fab fa-linkedin"></i> linkedin.com/in/joshua-ejiobih
          </a>
        </div>
      </div>
    </section>
  </div>
  `
})
export class HomeComponent {}
