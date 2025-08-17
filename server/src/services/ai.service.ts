import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import env from "dotenv";
env.config();

const API_KEY = process.env.GOOGLE_GEMINI_KEY;
if (!API_KEY) {
  throw new Error("GOOGLE_GEMINI_KEY is not defined in environment variables");
}

const genAI = new GoogleGenerativeAI(API_KEY);

// Initialize model
const model: GenerativeModel = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
You are an AI assistant specialized in summarizing transcripts.

How it Works:
1. The user uploads a transcript (meeting notes, call transcript, etc.).
2. The user provides a custom instruction (e.g., "Summarize in bullet points for executives" or "Highlight only action items").
3. Based on the instruction + transcript, generate a **clear, structured summary**.
4. The summary should be editable by the user after generation.
5. Once edited, the user can share the final summary via email.

Guidelines for your response:
- Follow the user's custom instruction carefully.
- Maintain clarity, conciseness, and professional tone.
- Structure the output logically (e.g., sections, bullet points, numbered lists).
- Focus on **key takeaways, action items, and insights**.
- Never include unnecessary raw transcript text unless asked.
  `,
});

// Define function types
export interface GenerateSummaryOptions {
  transcript: string;
  instruction?: string;
}

export async function generateSummary({
  transcript,
  instruction = "Summarize in bullet points, highlight action items and deadlines.",
}: GenerateSummaryOptions): Promise<string> {
  try {
    const prompt = `
You are an AI assistant specialized in summarizing transcripts.

Your task:
- Take any transcript input (meeting notes, call transcript, or any other format) provided by the user.
- Follow the user's instruction (e.g., "Summarize in bullet points for executives" or "Highlight action items") but DO NOT add extra text like "Okay, I will summarize..."
- Detect key information yourself: topics, decisions, action items, deadlines, and responsible persons.

Formatting rules for the summary:
1. **Title:** One line at the top that describes the main topic of the transcript.
2. **Summary:** Provide main points as bullet points. Each bullet point should be on a separate line.
3. **Action Items / Deadlines:** Clearly highlight action items and deadlines using bold for names and deadlines.
4. Do NOT merge everything into one line. Ensure readability with proper line breaks.

Example output format:

Title: Q3 Roadmap Discussion
nextLine
Summary:
- Team discussed the Q3 roadmap and priorities.
- Coordinated responsibilities for upcoming features.
- Planned meetings with other departments.
nextLine
Action Items and Deadlines:
- Bob: Finalize the budget by Friday EOD.
- Charlie: Take the lead on feature X and share initial mockups by Wednesday.
- Alice: Schedule a meeting with the marketing team by next Monday.

Transcript:
"""
${transcript}
"""

User Instruction:
"${instruction}"

Output ONLY the structured summary following the above rules.
`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    throw new Error("Failed to generate summary");
  }
}
