import { Request, Response } from 'express';
import { z } from 'zod';
import { convertTaskToCode, detectBugsRealtime, generateArchitecture, scoreReview } from '../services/aiService.js';

const taskSchema = z.object({ task: z.string().min(10), stack: z.string().default('React, Node.js, PostgreSQL') });
const codeSchema = z.object({ code: z.string().min(5) });
const archSchema = z.object({ requirements: z.string().min(10) });
const reviewSchema = z.object({ diff: z.string().min(5) });

export const taskToCodeHandler = async (req: Request, res: Response) => {
  const { task, stack } = taskSchema.parse(req.body);
  const output = await convertTaskToCode(task, stack);
  res.json({ output });
};

export const bugDetectionHandler = async (req: Request, res: Response) => {
  const { code } = codeSchema.parse(req.body);
  const output = await detectBugsRealtime(code);
  res.json({ output });
};

export const architectureHandler = async (req: Request, res: Response) => {
  const { requirements } = archSchema.parse(req.body);
  const output = await generateArchitecture(requirements);
  res.json({ output });
};

export const reviewScoreHandler = async (req: Request, res: Response) => {
  const { diff } = reviewSchema.parse(req.body);
  const output = await scoreReview(diff);
  res.json({ output });
};
