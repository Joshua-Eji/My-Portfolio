import { Component, inject, signal, ElementRef, ViewChild, ChangeDetectionStrategy, effect } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GeminiService } from './services/gemini.service';

interface TechItem {
  name: string;
  icon: string;
}

interface ProjectDeployment {
  url?: string;           // The actual clickable link (e.g., https://app...)
  displayText: string;    // What to show (e.g., app.spiritconnects.org)
  status: string;         // e.g., "Production-ready / Active deployment"
}

interface Project {
  title: string;
  role: string;
  description: string;
  responsibilities: string[];
  outcome: string;
  tags: string[];
  image: string;
  deployment: ProjectDeployment;
  repoUrl?: string;
  aiAssisted?: boolean;
}

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private geminiService = inject(GeminiService);

  // Signals
  isChatOpen = signal(false);
  currentMessage = signal('');
  chatMessages = signal<ChatMessage[]>([]);
  isLoading = this.geminiService.isLoading;
  
  // Modal State
  selectedProject = signal<Project | null>(null);
  
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  // Data Signals - Updated with Joshua's Skills
  techStack = signal<TechItem[]>([
    { name: 'React', icon: 'fab fa-react' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'Supabase', icon: 'fas fa-database' },
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3' },
    { name: 'Cloudflare', icon: 'fas fa-cloud' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Git', icon: 'fab fa-git-alt' },
  ]);

  // Updated with Rich Project Data & Live Screenshots
  projects = signal<Project[]>([
    {
      title: 'Sponsor Compliance System',
      role: 'Frontend Engineer',
      description: 'A compliance management platform for UK Home Office Licensed Sponsors. I worked on stabilizing core workflows, resolving role-based access control issues, and preparing the system for production deployment.',
      responsibilities: [
        'Stabilized core workflows for compliance management',
        'Resolved complex role-based access control (RBAC) security issues',
        'Managed production deployment preparation and data integrity',
        'Implemented secure document handling workflows'
      ],
      outcome: 'System stabilized, security gaps resolved, and platform prepared for controlled production deployment.',
      tags: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Cloudflare'],
      // Live screenshot of the sponsors portal
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fsponsors.mgvprojects.co.uk?w=800&h=600',
      deployment: {
        url: 'https://sponsors.mgvprojects.co.uk',
        displayText: 'sponsors.mgvprojects.co.uk',
        status: 'Production-ready / Active deployment',
      },
      repoUrl: 'https://github.com/Joshua-Ejiobih/sponsor-guard-scs.git',
      aiAssisted: true
    },
    {
      title: 'SpiritConnect',
      role: 'Frontend Engineer',
      description: 'A Progressive Web Application (PWA) for guided prayer and journaling. I handled full application setup including authentication, offline-first behavior, backend integration, and deployment readiness.',
      responsibilities: [
        'Implemented core application flows and offline-first PWA features',
        'Integrated authentication and managed user sessions',
        'Designed and implemented backend data models with Supabase',
        'Managed cloud infrastructure and deployment via Cloudflare'
      ],
      outcome: 'A functional, production-ready PWA delivered with end-to-end ownership across frontend and backend integration.',
      tags: ['React', 'PWA', 'Supabase', 'Firebase', 'Tailwind'],
      // Live screenshot of the SpiritConnect app
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fapp.spiritconnects.org?w=800&h=600',
      deployment: {
        url: 'https://app.spiritconnects.org',
        displayText: 'app.spiritconnects.org',
        status: 'Production-ready / Active deployment'
      },
      repoUrl: 'https://github.com/Joshua-Ejiobih/spiritconnect.git',
      aiAssisted: true
    }
  ]);

  constructor() {
    // Auto-scroll effect
    effect(() => {
      const messages = this.chatMessages();
      const loading = this.isLoading(); // Depend on loading state too
      setTimeout(() => {
        if (this.scrollContainer?.nativeElement) {
          this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        }
      }, 50);
    });
  }

  toggleChat() {
    this.isChatOpen.update(v => !v);
  }

  updateMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.currentMessage.set(input.value);
  }

  async sendMessage(event: Event) {
    event.preventDefault();
    const msg = this.currentMessage().trim();
    if (!msg) return;

    // Add user message
    this.chatMessages.update(msgs => [...msgs, { role: 'user', text: msg }]);
    this.currentMessage.set('');

    // Get AI response
    const response = await this.geminiService.sendMessage(msg);
    
    // Add AI message
    this.chatMessages.update(msgs => [...msgs, { role: 'model', text: response }]);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}