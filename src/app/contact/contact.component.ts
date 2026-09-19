import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
  <div class="max-w-4xl mx-auto px-6 py-20 animate-fade-in">
    <div class="mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-text-primary mb-6">Get In Touch</h1>
      <p class="text-xl text-text-secondary leading-relaxed max-w-2xl">
        I'm always interested in conversations about thoughtful engineering, graduate study, AI-powered products, and opportunities to solve meaningful problems.
      </p>
    </div>

    <div class="bg-bg-card border border-border-card rounded-2xl p-8 md:p-12 mb-12">
      <h3 class="text-sm font-mono text-text-muted uppercase tracking-wider mb-6">Open to</h3>
      <div class="flex flex-wrap gap-3 mb-10">
        <span class="px-4 py-2 rounded-full bg-bg-primary border border-border-subtle text-text-secondary text-sm font-medium">Software Engineering</span>
        <span class="px-4 py-2 rounded-full bg-bg-primary border border-border-subtle text-text-secondary text-sm font-medium">Graduate Opportunities</span>
        <span class="px-4 py-2 rounded-full bg-bg-primary border border-border-subtle text-text-secondary text-sm font-medium">Research</span>
        <span class="px-4 py-2 rounded-full bg-bg-primary border border-border-subtle text-text-secondary text-sm font-medium">Fellowships</span>
      </div>

      <h3 class="text-sm font-mono text-text-muted uppercase tracking-wider mb-6">Connect</h3>
      <div class="flex flex-col gap-6">
        <a href="mailto:joshuaejiobih@gmail.com" class="inline-flex items-center gap-4 text-xl text-text-primary hover:text-accent-violet-soft transition-colors font-medium">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-bg-primary border border-border-subtle text-accent-violet-soft group-hover:bg-accent-violet group-hover:text-text-primary transition-colors">
            <i class="fas fa-envelope"></i>
          </div>
          joshuaejiobih&#64;gmail.com
        </a>
        <a href="https://github.com/Joshua-Eji" target="_blank" class="inline-flex items-center gap-4 text-xl text-text-primary hover:text-accent-violet-soft transition-colors font-medium">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-bg-primary border border-border-subtle text-accent-violet-soft group-hover:bg-accent-violet group-hover:text-text-primary transition-colors">
            <i class="fab fa-github"></i>
          </div>
          github.com/Joshua-Eji
        </a>
        <a href="https://www.linkedin.com/in/joshua-ejiobih/" target="_blank" class="inline-flex items-center gap-4 text-xl text-text-primary hover:text-accent-violet-soft transition-colors font-medium">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-bg-primary border border-border-subtle text-accent-violet-soft group-hover:bg-accent-violet group-hover:text-text-primary transition-colors">
            <i class="fab fa-linkedin"></i>
          </div>
          linkedin.com/in/joshua-ejiobih
        </a>
      </div>
    </div>
  </div>
  `
})
export class ContactComponent {}
