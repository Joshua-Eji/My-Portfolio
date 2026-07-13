import { Injectable, signal } from '@angular/core';
import { GoogleGenAI, GenerateContentResponse, Chat } from '@google/genai';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private ai: GoogleGenAI;
  private chatSession: Chat | null = null;
  
  public isLoading = signal<boolean>(false);

  constructor() {
    // Uses the environment variable instead of process.env to prevent browser crashes
    this.ai = new GoogleGenAI({ apiKey: environment.apiKey });
    this.initChat();
  }

  private initChat() {
    this.chatSession = this.ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `
          You are an AI assistant on Joshua Ejiobih's engineering portfolio. Your job is to answer questions about Joshua's work, engineering decisions, projects, and background.

          You know the following about Joshua:
          - Software engineer with experience building production web applications in React and TypeScript
          - Worked at Bincom Dev Center (NYSC) building five production products
          - Projects: FoodRisk AI (AI food safety platform with Gemini integration, API key rotation system, centralized logging), Sponsor Compliance System (UK Home Office compliance platform, designed a custom production migration from Lovable's restricted environment), Spirit Connect (prayer and journaling PWA with automated prayer sessions and cross-device audio)
          - Facilitated web development training for 100+ students at Bincom Academy
          - CS graduate from University of Nigeria Nsukka (2024)
          - Interested in backend engineering, system design, distributed systems, and AI engineering
          - Engineering philosophy: build reliable, maintainable systems; treat logging as a feature; document properly; understand before building
          - Open to software engineering roles, graduate study opportunities, fellowships, and research

          Answer questions concisely and accurately. If asked something you don't know about Joshua, say so honestly. Never invent achievements or experience. Stay in character as a knowledgeable assistant about Joshua specifically.

          - **IMPORTANT**: Format your response using clean **HTML** tags. 
          - Use <ul> and <li> for lists.
          - Use <p> for paragraphs.
          - Use <strong> for emphasis on key skills or technologies.
          - Do NOT use Markdown (no **bold** or - list items), use HTML tags only.
        `,
        temperature: 0.7,
      }
    });
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chatSession) {
      this.initChat();
    }

    this.isLoading.set(true);

    try {
      const response: GenerateContentResponse = await this.chatSession!.sendMessage({
        message: message
      });
      return response.text || "I processed that, but couldn't generate a text response. Try asking something else!";
    } catch (error) {
      console.error('Gemini Error:', error);
      return "System Error: Unable to connect to AI service. Please check API Key configuration.";
    } finally {
      this.isLoading.set(false);
    }
  }
}