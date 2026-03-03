import OpenAI from 'openai';
import { env } from '../config.js';

const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });

export const runStructuredPrompt = async (system: string, user: string) => {
  const completion = await client.chat.completions.create({
    model: env.OPENAI_MODEL,
    temperature: 0.2,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
  });

  return completion.choices[0]?.message?.content ?? 'No response generated.';
};
