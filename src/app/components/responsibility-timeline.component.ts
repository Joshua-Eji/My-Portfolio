import { Component, input } from '@angular/core';

@Component({
  selector: 'app-responsibility-timeline',
  standalone: true,
  template: `
  <div class="relative border-l-2 border-border-subtle ml-3 pl-8 space-y-8 py-4">
    @for (item of items(); track item) {
      <div class="relative group">
        <div class="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-border-subtle border-4 border-bg-primary group-hover:bg-accent-violet-soft transition-colors duration-300"></div>
        <p class="text-lg text-text-primary font-medium group-hover:text-accent-violet-soft transition-colors duration-300">{{ item }}</p>
      </div>
    }
  </div>
  `
})
export class ResponsibilityTimelineComponent {
  items = input.required<string[]>();
}
