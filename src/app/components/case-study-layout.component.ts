import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-case-study-layout',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="max-w-4xl mx-auto px-6 py-20 animate-fade-in">
    <!-- Breadcrumb -->
    <div class="mb-12">
      <a routerLink="/engineering" class="text-text-muted hover:text-text-primary transition-colors font-mono text-sm inline-flex items-center gap-2">
        <i class="fas fa-arrow-left"></i> Engineering Work
      </a>
      <span class="text-text-muted mx-3">/</span>
      <span class="text-text-primary font-mono text-sm">{{ title() }}</span>
    </div>

    <!-- Hero -->
    <div class="mb-16">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight">{{ title() }}</h1>
      <div class="flex flex-wrap items-center gap-4 mb-8">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card border border-border-subtle">
          <i class="fas fa-user-astronaut text-accent-violet-soft text-sm"></i>
          <span class="text-sm font-medium text-text-secondary">{{ role() }}</span>
        </div>
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card border border-border-subtle">
          <span class="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
          <span class="text-sm font-medium text-text-secondary">{{ status() }}</span>
        </div>
        @if (liveUrl()) {
          <a [href]="liveUrl()" target="_blank" class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-violet-soft/10 text-accent-violet hover:bg-accent-violet-soft/20 transition-colors border border-accent-violet-soft/20">
            <i class="fas fa-external-link-alt text-sm"></i>
            <span class="text-sm font-medium">View Live App</span>
          </a>
        }
      </div>
      <div class="flex flex-wrap gap-2">
        @for (tech of techStack(); track tech) {
          <span class="px-3 py-1 rounded-full bg-bg-primary border border-border-subtle text-xs font-mono text-text-muted">{{ tech }}</span>
        }
      </div>
    </div>

    <!-- Image or Placeholder -->
    @if (imageUrl()) {
      <div class="mb-20 rounded-2xl overflow-hidden border border-border-card shadow-2xl flex items-center justify-center bg-bg-card">
        <img [src]="imageUrl()" [alt]="title()" class="w-full h-auto object-cover" referrerpolicy="no-referrer" />
      </div>
    } @else {
      <div class="aspect-[21/9] bg-gradient-to-br from-bg-card to-border-subtle rounded-2xl border border-border-card flex items-center justify-center mb-20 overflow-hidden relative group">
        <div class="absolute inset-0 bg-bg-primary/10 mix-blend-overlay"></div>
        <h3 class="text-3xl md:text-4xl font-bold text-text-muted/30 group-hover:scale-105 transition-transform duration-700 select-none text-center px-6">{{ title() }}</h3>
      </div>
    }

    <!-- Content Area (with global styles for case study typography) -->
    <div class="space-y-24 case-study-content">
      <ng-content></ng-content>
      
      <!-- Navigation -->
      <div class="pt-12 border-t border-border-subtle flex flex-col sm:flex-row justify-between gap-6">
        @if (prevLink()) {
          <a [routerLink]="prevLink()" class="flex flex-col gap-2 group">
            <span class="text-xs font-mono text-text-muted uppercase tracking-wider">Previous</span>
            <span class="text-lg font-medium text-text-primary group-hover:text-accent-violet-soft transition-colors flex items-center gap-2">
              <i class="fas fa-arrow-left text-sm transition-transform group-hover:-translate-x-1"></i> {{ prevTitle() }}
            </span>
          </a>
        } @else {
          <div></div>
        }

        @if (nextLink()) {
          <a [routerLink]="nextLink()" class="flex flex-col gap-2 text-right group sm:items-end">
            <span class="text-xs font-mono text-text-muted uppercase tracking-wider">Next</span>
            <span class="text-lg font-medium text-text-primary group-hover:text-accent-violet-soft transition-colors flex items-center gap-2 justify-end">
              {{ nextTitle() }} <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </span>
          </a>
        } @else {
          <div></div>
        }
      </div>
    </div>
  </div>
  `,
  styles: [`
    /* Global styles targeted at content injected via ng-content inside .case-study-content */
    :host ::ng-deep .case-study-content h2 {
      @apply text-2xl md:text-3xl font-bold text-text-primary mb-6 tracking-tight;
    }
    :host ::ng-deep .case-study-content p {
      @apply text-lg text-text-secondary leading-relaxed mb-6;
    }
    :host ::ng-deep .case-study-content section {
      @apply mb-20;
    }
  `]
})
export class CaseStudyLayoutComponent {
  title = input.required<string>();
  role = input.required<string>();
  status = input.required<string>();
  techStack = input.required<string[]>();
  
  liveUrl = input<string>();
  imageUrl = input<string>();
  
  prevLink = input<string>();
  prevTitle = input<string>();
  
  nextLink = input<string>();
  nextTitle = input<string>();
}
