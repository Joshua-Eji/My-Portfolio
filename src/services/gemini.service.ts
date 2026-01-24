
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
          - Working Style: Transparent use of AI tools for planning/debugging, while retaining full ownership of system behavior and deployment quality.
          
          Key Projects:
          1. Sponsor Compliance System (SCS): A compliance platform. Joshua stabilized workflows, fixed complex RBAC security issues, and prepared it for production deployment.
          2. SpiritConnect: A PWA for prayer. Joshua handled full application setup, auth, offline-first features, and backend integration.
          
          Guidelines:
          - Do NOT claim he is a senior architect or backend guru.
          - Emphasize his ability to integrate systems, stabilize codebases, and deliver production-ready apps.
          - If asked about AI, explain that he uses it to enhance productivity but manually reviews and owns all code.
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
