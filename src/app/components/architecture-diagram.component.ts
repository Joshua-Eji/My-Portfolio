import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-diagram',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="bg-bg-card border border-border-card rounded-xl p-12 overflow-x-auto flex flex-col items-center justify-center min-h-[400px]">
    <div class="flex flex-col items-center gap-6 min-w-[280px]">
      @for (node of nodes(); track node; let last = $last) {
        <div class="w-full max-w-[320px] py-4 px-6 rounded-lg border border-accent-violet-soft/50 bg-bg-primary text-text-primary font-medium text-center shadow-[0_0_15px_rgba(139,92,246,0.05)] relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-accent-violet-soft/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          {{ node }}
        </div>
        @if (!last) {
          <div class="flex flex-col items-center justify-center">
            <div class="w-0.5 h-8 bg-border-subtle"></div>
            <i class="fas fa-chevron-down text-border-subtle text-sm -mt-2"></i>
          </div>
        }
      }
    </div>
  </div>
  `
})
export class ArchitectureDiagramComponent {
  nodes = input.required<string[]>();
}
