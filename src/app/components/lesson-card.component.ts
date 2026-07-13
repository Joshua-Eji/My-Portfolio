import { Component, input } from '@angular/core';

@Component({
  selector: 'app-lesson-card',
  standalone: true,
  template: `
  <div class="bg-bg-card border border-border-card rounded-xl p-6 h-full border-l-4 border-l-accent-violet-soft flex flex-col gap-3">
    <h3 class="text-lg font-bold text-text-primary">"{{ title() }}"</h3>
    <p class="text-text-secondary leading-relaxed">
      <ng-content></ng-content>
    </p>
  </div>
  `
})
export class LessonCardComponent {
  title = input.required<string>();
}
