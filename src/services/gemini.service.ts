import { Injectable, signal } from '@angular/core';

interface ChatTurn {
  role: 'user' | 'model';
  text: string;
}

const MAX_HISTORY_TURNS = 20;

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private history: ChatTurn[] = [];

  public isLoading = signal<boolean>(false);

  async sendMessage(message: string): Promise<string> {
    this.isLoading.set(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: this.history })
      });

      if (!response.ok) {
        throw new Error(`Chat endpoint returned ${response.status}`);
      }

      const data = await response.json();
      const text = data.text || "I processed that, but couldn't generate a response. Try asking something else.";

      this.history.push({ role: 'user', text: message }, { role: 'model', text });
      if (this.history.length > MAX_HISTORY_TURNS) {
        this.history = this.history.slice(-MAX_HISTORY_TURNS);
      }

      return text;
    } catch (error) {
      console.error('Chat request failed:', error);
      return "I can't reach the assistant right now. Try again in a moment, or email Joshua directly at joshuaejiobih@gmail.com.";
    } finally {
      this.isLoading.set(false);
    }
  }

  reset(): void {
    this.history = [];
  }
}
