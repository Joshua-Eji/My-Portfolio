import { Component, inject, signal, ElementRef, ViewChild, ChangeDetectionStrategy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeminiService } from '../../services/gemini.service';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

@Component({
  selector: 'app-dev-bot',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
    <!-- Chat Window -->
    <div class="pointer-events-auto bg-bg-card border border-border-card rounded-xl shadow-2xl w-80 md:w-96 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right"
         [class.scale-0]="!isChatOpen()"
         [class.opacity-0]="!isChatOpen()"
         [class.scale-100]="isChatOpen()"
         [class.opacity-100]="isChatOpen()">
      
      <!-- Header -->
      <div class="bg-bg-card-hover p-4 border-b border-border-card flex justify-between items-center backdrop-blur-md">
        <div class="flex items-center gap-2">
          <div class="h-2 w-2 rounded-full bg-status-success animate-pulse"></div>
          <span class="font-mono font-bold text-sm text-text-primary">Ask Joshua's AI</span>
        </div>
        <button (click)="toggleChat()" class="text-text-muted hover:text-text-primary transition-colors">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- Messages -->
      <div class="h-80 overflow-y-auto p-4 space-y-4 bg-bg-primary/50" #scrollContainer>
        <!-- Initial Message -->
        <div class="flex gap-3">
          <div class="h-8 w-8 rounded-full bg-accent-violet/20 flex items-center justify-center flex-shrink-0 text-xs font-mono border border-accent-violet/50 text-accent-violet-soft">AI</div>
          <div class="bg-bg-card-hover p-3 rounded-lg rounded-tl-none text-sm border border-border-card text-text-secondary">
            Hi! I'm an AI assistant on Joshua's portfolio. Ask me about his work, engineering decisions, projects, or background!
          </div>
        </div>

        @for (msg of chatMessages(); track msg) {
          <div class="flex gap-3" [class.flex-row-reverse]="msg.role === 'user'">
             @if (msg.role === 'model') {
                <div class="h-8 w-8 rounded-full bg-accent-violet/20 flex items-center justify-center flex-shrink-0 text-xs font-mono border border-accent-violet/50 text-accent-violet-soft">AI</div>
             }
             @if (msg.role === 'user') {
                <div class="h-8 w-8 rounded-full bg-bg-card-hover flex items-center justify-center flex-shrink-0 text-xs border border-border-card text-text-secondary"><i class="fas fa-user"></i></div>
             }
             
             <div class="p-3 rounded-lg text-sm border max-w-[85%] chat-content"
                  [innerHTML]="msg.text"
                  [class.bg-accent-violet]="msg.role === 'user'"
                  [class.text-text-primary]="msg.role === 'user'"
                  [class.rounded-tr-none]="msg.role === 'user'"
                  [class.border-accent-violet]="msg.role === 'user'"
                  [class.bg-bg-card-hover]="msg.role === 'model'"
                  [class.text-text-secondary]="msg.role === 'model'"
                  [class.rounded-tl-none]="msg.role === 'model'"
                  [class.border-border-card]="msg.role === 'model'">
             </div>
          </div>
        }

        @if (isLoading()) {
          <div class="flex gap-3">
            <div class="h-8 w-8 rounded-full bg-accent-violet/20 flex items-center justify-center flex-shrink-0 text-xs font-mono border border-accent-violet/50 text-accent-violet-soft">AI</div>
            <div class="bg-bg-card-hover p-3 rounded-lg rounded-tl-none text-sm border border-border-card flex gap-1 items-center">
              <span class="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce"></span>
              <span class="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
              <span class="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
            </div>
          </div>
        }
      </div>

      <!-- Input -->
      <div class="p-3 border-t border-border-card bg-bg-primary">
        <form (submit)="sendMessage($event)" class="flex gap-2">
          <input 
             type="text" 
             [value]="currentMessage()" 
             (input)="updateMessage($event)"
            placeholder="Type your question..."
            class="flex-1 bg-bg-card border border-border-card rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-violet text-text-primary placeholder:text-text-muted"
          >
          <button 
             type="submit" 
             [disabled]="!currentMessage() || isLoading()"
            class="bg-accent-violet text-text-primary p-2 rounded-md hover:bg-accent-violet-soft disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-10 flex items-center justify-center">
            <i class="fas fa-paper-plane text-xs"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- Toggle Button -->
    <button (click)="toggleChat()" class="pointer-events-auto mt-4 h-14 w-14 rounded-full bg-accent-violet text-text-primary shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-2 border-bg-primary z-50">
      @if (isChatOpen()) {
        <i class="fas fa-chevron-down text-xl"></i>
      } @else {
        <i class="fas fa-comment text-xl"></i>
      }
    </button>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevBotComponent {
  private geminiService = inject(GeminiService);

  isChatOpen = signal(false);
  currentMessage = signal('');
  chatMessages = signal<ChatMessage[]>([]);
  isLoading = this.geminiService.isLoading;
  
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor() {
    effect(() => {
      const messages = this.chatMessages();
      const loading = this.isLoading();
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

    this.chatMessages.update(msgs => [...msgs, { role: 'user', text: msg }]);
    this.currentMessage.set('');

    const response = await this.geminiService.sendMessage(msg);
    this.chatMessages.update(msgs => [...msgs, { role: 'model', text: response }]);
  }
}
