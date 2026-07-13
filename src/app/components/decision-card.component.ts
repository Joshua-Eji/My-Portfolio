import { Component, input } from '@angular/core';

@Component({
  selector: 'app-decision-card',
  standalone: true,
  template: `
  <div class="bg-bg-card border border-border-card rounded-xl p-6 h-full flex flex-col">
    <div class="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-bg-primary border border-border-subtle text-accent-violet-soft">
      <i [class]="icon() + ' text-xl'"></i>
    </div>
    <h3 class="text-xl font-bold text-text-primary mb-4">{{ title() }}</h3>
    <p class="text-text-secondary leading-relaxed mb-6 flex-1">
      <ng-content></ng-content>
    </p>
    <div class="mt-auto">
      <span class="inline-block px-3 py-1 rounded-md bg-bg-primary border border-border-subtle text-xs font-mono text-text-muted">
        [{{ tag() }}]
      </span>
    </div>
  </div>
  `
})
export class DecisionCardComponent {
  icon = input.required<string>();
  title = input.required<string>();
  tag = input.required<string>();
}
