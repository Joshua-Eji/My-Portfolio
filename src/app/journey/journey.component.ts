import { Component } from '@angular/core';

@Component({
  selector: 'app-journey',
  standalone: true,
  template: `
  <div class="max-w-4xl mx-auto px-6 py-20 animate-fade-in">
    <div class="mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-text-primary mb-6">Journey</h1>
      <p class="text-xl text-text-secondary leading-relaxed max-w-2xl">
        My path in software engineering, from mobile development to frontend engineering and beyond.
      </p>
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
  </div>
  `
})
export class JourneyComponent {}
