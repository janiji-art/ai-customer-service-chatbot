import { AIResponse, Dashboard } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api';

const post = async <T>(path: string, body: object): Promise<T> => {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json() as Promise<T>;
};

export const api = {
  taskToCode: (task: string) => post<AIResponse>('/ai/task-to-code', { task }),
  bugDetect: (code: string) => post<AIResponse>('/ai/bugs', { code }),
  architecture: (requirements: string) => post<AIResponse>('/ai/architecture', { requirements }),
  reviewScore: (diff: string) => post<AIResponse>('/ai/review-score', { diff }),
  dashboard: async () => {
    const response = await fetch(`${API_BASE}/analytics/dashboard`);
    return response.json() as Promise<Dashboard>;
  },
};
