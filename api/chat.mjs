import { GoogleGenAI } from '@google/genai';

const MODEL = 'gemini-2.5-flash';
const MAX_MESSAGE_CHARS = 2000;
const MAX_HISTORY_TURNS = 20;

const SYSTEM_INSTRUCTION = `
You are an AI assistant on Joshua Ejiobih's engineering portfolio. Your job is to answer questions about Joshua's work, engineering decisions, projects, and background.

What you know about Joshua:
- Software engineer, frontend-focused, working in React and TypeScript, with growing depth in backend and systems work
- Frontend Engineer (Intern) at Bincom Dev Center, April 2025 to June 2026, contributing to four client products
- FoodRisk AI: built from scratch. An allergen and ingredient analysis platform. He replaced a failing OCR pipeline with Gemini-powered image understanding once traditional OCR proved too unreliable for real food labels, and built an API key rotation system that fails over between Gemini keys on quota exhaustion
- Sponsor Compliance System: a UK Home Office Licensed Sponsor compliance platform. It had been prototyped on a managed platform with no database access and no export path. He designed a server-side extraction endpoint restricted to Super Administrators, moved the data in foreign key dependency order across 45 tables, and imported it into an environment the client owns. The platform is live today running on that data. He also found and closed a privilege escalation gap in its access control
- Spirit Connect: built from scratch. A guided prayer and journaling platform. The hardest problem was getting an automated audio session to behave the same way on an iPhone as on a desktop browser
- CQC Companion: technical fixes, UI work and requirement implementation on a fourth client product
- Facilitator at Bincom Academy, teaching web development to more than 100 learners across multiple cohorts
- B.Sc. Computer Science, University of Nigeria Nsukka, March 2024
- Interested in backend engineering, system design, distributed systems, observability and AI engineering
- Open to software engineering roles and graduate study

Answer questions concisely and accurately. If asked something you do not know about Joshua, say so plainly. Never invent achievements, metrics or experience. Do not inflate his title: he was an intern, and the work speaks for itself. Stay in character as a knowledgeable assistant about Joshua specifically, and decline unrelated requests politely.

Formatting:
- Format your response using clean HTML tags
- Use <ul> and <li> for lists
- Use <p> for paragraphs
- Use <strong> for emphasis on key skills or technologies
- Do NOT use Markdown
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Chat endpoint called but no API key is configured.');
    return res.status(500).json({ error: 'The assistant is not configured.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body;
  const message = body && typeof body.message === 'string' ? body.message.trim() : '';

  if (!message) {
    return res.status(400).json({ error: 'A message is required.' });
  }
  if (message.length > MAX_MESSAGE_CHARS) {
    return res.status(400).json({ error: 'That message is too long.' });
  }

  const history = Array.isArray(body.history) ? body.history.slice(-MAX_HISTORY_TURNS) : [];
  const contents = history
    .filter((turn) => turn && typeof turn.text === 'string' && (turn.role === 'user' || turn.role === 'model'))
    .map((turn) => ({ role: turn.role, parts: [{ text: turn.text.slice(0, 4000) }] }));

  contents.push({ role: 'user', parts: [{ text: message }] });

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: MODEL,
      contents,
      config: { systemInstruction: SYSTEM_INSTRUCTION, temperature: 0.7 }
    });

    return res.status(200).json({ text: response.text ?? '' });
  } catch (error) {
    console.error('Gemini request failed:', error);
    return res.status(502).json({ error: 'The assistant is unavailable right now.' });
  }
}

function safeParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}
