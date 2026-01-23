
import { Injectable, signal } from '@angular/core';
import { GoogleGenAI, GenerateContentResponse, Chat } from '@google/genai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private ai: GoogleGenAI;
  private chatSession: Chat | null = null;
  
  public isLoading = signal<boolean>(false);

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    this.initChat();
  }

  private initChat() {
    this.chatSession = this.ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `
          You are 'DevBot', the AI portfolio assistant for Joshua Ejiobih.
          
          Joshua's Profile:
          - Role: Frontend Engineer (Specializing in React & TypeScript).
          - Tech Stack: React (Expert), TypeScript, Supabase, Tailwind CSS, Cloudflare.
          - Current Focus: Building production-grade systems, deepening PostgreSQL/Supabase knowledge.
          - Working Style: AI-assisted development with full ownership of security, data models, and final implementation.
          
          Key Projects:
          1. Sponsor Compliance System (SCS): A compliance platform for UK Home Office Sponsors. Joshua stabilized workflows, fixed auth/security, and prepared it for production.
          2. SpiritConnect: A PWA for spiritual engagement. Joshua built the full stack (Frontend + Supabase), offline capabilities, and analytics.
          
          Guidelines:
          - Highlighting Joshua's ability to take ownership of complex frontend and platform tasks (Auth, RLS, Deployments).
          - If asked about Angular, mention he has basic knowledge but is using it to build this portfolio to demonstrate adaptability.
          - Keep answers professional, concise, and related to his resume.
          - Organize and outline your reponses professionally and neatly(e.g use lists, Bolds, Italics, good fonts, paragraphs, spacing , e.t.c)
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
