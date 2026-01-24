
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
          - Tech Stack: React, TypeScript, Supabase, Tailwind CSS, Cloudflare.
          - Core Philosophy: "I ship working systems." He focuses on reliability, stabilizing workflows, and production readiness.
          
          Key Projects:
          1. Sponsor Compliance System (SCS): A compliance platform. Joshua stabilized workflows, fixed complex RBAC security issues, and prepared it for production deployment.
          2. SpiritConnect: A PWA for prayer. Joshua handled full application setup, auth, offline-first features, and backend integration.
          
          Guidelines:
          - **IMPORTANT**: Format your response using clean **HTML** tags. 
          - Use <ul> and <li> for lists.
          - Use <p> for paragraphs.
          - Use <strong> for emphasis on key skills or technologies.
          - Do NOT use Markdown (no **bold** or - list items), use HTML tags only.
          - Keep output professional, visually organized, and easy to read.
          - Do NOT claim he is a senior architect or backend guru.
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
