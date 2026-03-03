import { runStructuredPrompt } from './openaiService.js';

export const convertTaskToCode = async (task: string, stack: string) =>
  runStructuredPrompt(
    'You are an elite principal engineer. Return implementation strategy, pseudocode, and production TypeScript code snippets.',
    `Task: ${task}\nStack: ${stack}`,
  );

export const detectBugsRealtime = async (code: string) =>
  runStructuredPrompt(
    'You are a static analysis engine. Return likely bugs, severity (1-5), and fixed code blocks.',
    `Analyze this code:\n${code}`,
  );

export const generateArchitecture = async (requirements: string) =>
  runStructuredPrompt(
    'Return a mermaid diagram and a concise architecture rationale for a scalable AI coding platform.',
    requirements,
  );

export const scoreReview = async (diff: string) =>
  runStructuredPrompt(
    'Score this code review from 0-100 and explain with categories: correctness, scalability, readability, security.',
    diff,
  );
