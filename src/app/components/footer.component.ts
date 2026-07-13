import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <footer class="border-t border-border-subtle bg-bg-card py-12 mt-20">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-text-secondary text-sm">
        © 2026 Joshua Ejiobih
      </div>
      <div class="text-text-muted text-sm italic">
        "Every difficult problem teaches you how the next system should be built."
      </div>
    </div>
  </footer>
  `
})
export class FooterComponent {}
