import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-engineering',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="max-w-7xl mx-auto px-6 py-20">
    <div class="max-w-2xl mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-text-primary mb-6 animate-fade-in">Engineering Work</h1>
      <p class="text-xl text-text-secondary leading-relaxed animate-fade-in" style="animation-delay: 100ms">
        A collection of production software, technical experiments, and engineering decisions that shaped how I think about building reliable systems.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in" style="animation-delay: 200ms">
      <!-- Project 1 -->
      <a routerLink="/engineering/foodrisk" class="group flex flex-col bg-bg-card rounded-2xl border border-border-card overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-violet-soft/10 transition-all duration-300">
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
      <a routerLink="/engineering/scs" class="group flex flex-col bg-bg-card rounded-2xl border border-border-card overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-violet-soft/10 transition-all duration-300">
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
      <a routerLink="/engineering/spiritconnect" class="group flex flex-col bg-bg-card rounded-2xl border border-border-card overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-violet-soft/10 transition-all duration-300 lg:col-span-2">
        <div class="aspect-[21/9] bg-gradient-to-br from-bg-card to-border-subtle flex items-center justify-center p-8 border-b border-border-card relative overflow-hidden group-hover:from-bg-card group-hover:to-accent-violet-soft/10 transition-colors duration-500">
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bg-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div class="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none"></div>
          <div class="relative z-10 flex flex-col items-center justify-center gap-4">
            <div class="w-20 h-20 rounded-full bg-bg-primary/50 border border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-accent-violet-soft/30 transition-all duration-500">
              <i class="fas fa-dove text-3xl text-text-muted group-hover:text-accent-violet-soft transition-colors duration-500"></i>
            </div>
            <h3 class="text-4xl font-bold text-text-muted/50 group-hover:text-text-primary/80 transition-all duration-500 z-10">Spirit Connect</h3>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
            <span class="text-xs font-mono text-text-secondary">Production</span>
          </div>
          <h4 class="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-violet-soft transition-colors">Spirit Connect</h4>
          <p class="text-text-secondary text-sm leading-relaxed mb-6 lg:w-2/3">Progressive web application for guided prayer, spiritual journaling, and community engagement. Built automated prayer sessions with synchronized audio across browsers and devices.</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">React</span>
            <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">JavaScript</span>
            <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Cloudflare</span>
            <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Resend</span>
            <span class="text-xs font-mono text-text-muted bg-bg-primary px-2 py-1 rounded">Speechmatics</span>
          </div>
        </div>
      </a>
    </div>

    <!-- Final Section -->
    <div class="mt-32 max-w-2xl mx-auto animate-fade-in" style="animation-delay: 300ms">
      <h2 class="text-3xl font-bold text-text-primary mb-6">What I'm Exploring</h2>
      <p class="text-xl text-text-secondary leading-relaxed mb-8">
        These case studies represent where my engineering thinking has been. The next chapter involves problems I haven't encountered yet.
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-20 pl-4 border-l-2 border-accent-violet-soft/30">
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-violet-soft"></div>
          <span class="text-text-primary font-medium">Backend Engineering</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-violet-soft"></div>
          <span class="text-text-primary font-medium">Distributed Systems</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-violet-soft"></div>
          <span class="text-text-primary font-medium">Cloud Infrastructure</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-violet-soft"></div>
          <span class="text-text-primary font-medium">System Design</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-violet-soft"></div>
          <span class="text-text-primary font-medium">Developer Tooling</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-violet-soft"></div>
          <span class="text-text-primary font-medium">AI Engineering</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-violet-soft"></div>
          <span class="text-text-primary font-medium">Observability</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-violet-soft"></div>
          <span class="text-text-primary font-medium">Software Architecture</span>
        </div>
      </div>

      <div class="text-center bg-bg-card border border-border-card rounded-2xl p-10 md:p-16">
        <p class="text-xl text-text-primary leading-relaxed mb-10 max-w-xl mx-auto">
          I'm always interested in conversations about thoughtful engineering, graduate study, AI-powered products, and opportunities to solve meaningful problems. If something here resonates with you, I'd be happy to connect.
        </p>
        <a routerLink="/contact" class="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-text-primary text-bg-primary font-semibold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Get In Touch
          <i class="fas fa-arrow-right text-sm"></i>
        </a>
      </div>
    </div>
  </div>
  `
})
export class EngineeringComponent {}
