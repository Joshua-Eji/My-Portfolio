import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
  <header 
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    [class.glass]="isScrolled()"
    [class.py-4]="isScrolled()"
    [class.py-6]="!isScrolled()"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a routerLink="/" class="flex items-center gap-3 group">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-violet-soft)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 group-hover:scale-105 transition-transform">
          <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" fill="var(--bg-primary)" />
          <text x="12" y="17" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle" fill="var(--accent-violet-soft)" stroke="none">J</text>
        </svg>
        <span class="font-mono font-bold tracking-tight text-lg">Joshua.dev</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <a routerLink="/" fragment="" class="text-text-secondary hover:text-text-primary transition-colors">Home</a>
        <a routerLink="/engineering" class="text-text-secondary hover:text-text-primary transition-colors">Engineering</a>
        <a routerLink="/journey" class="text-text-secondary hover:text-text-primary transition-colors">Journey</a>
        <a routerLink="/" fragment="how-i-think" class="text-text-secondary hover:text-text-primary transition-colors">Thinking</a>
        <a routerLink="/resume" class="text-text-secondary hover:text-text-primary transition-colors">Resume</a>
        <a routerLink="/contact" class="text-text-secondary hover:text-text-primary transition-colors">Contact</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-text-secondary hover:text-text-primary" (click)="toggleMobileMenu()">
        <i class="fas fa-bars text-xl" [class.fa-times]="isMobileMenuOpen()"></i>
      </button>
    </div>

    <!-- Mobile Menu Drawer -->
    @if (isMobileMenuOpen()) {
      <div class="md:hidden absolute top-full left-0 right-0 bg-bg-card border-b border-border-subtle p-6 shadow-xl animate-fade-in flex flex-col gap-6">
        <a routerLink="/" fragment="" (click)="toggleMobileMenu()" class="text-text-primary font-medium text-lg">Home</a>
        <a routerLink="/engineering" (click)="toggleMobileMenu()" class="text-text-primary font-medium text-lg">Engineering</a>
        <a routerLink="/journey" (click)="toggleMobileMenu()" class="text-text-primary font-medium text-lg">Journey</a>
        <a routerLink="/" fragment="how-i-think" (click)="toggleMobileMenu()" class="text-text-primary font-medium text-lg">Thinking</a>
        <a routerLink="/resume" (click)="toggleMobileMenu()" class="text-text-primary font-medium text-lg">Resume</a>
        <a routerLink="/contact" (click)="toggleMobileMenu()" class="text-text-primary font-medium text-lg">Contact</a>
      </div>
    }
  </header>
  `
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }
}
