import { Request, Response } from 'express';
import { z } from 'zod';
import { pool } from '../db/pool.js';

const sessionSchema = z.object({
  userId: z.string().min(2),
  tasksCompleted: z.number().int().nonnegative(),
  bugsPrevented: z.number().int().nonnegative(),
  focusScore: z.number().int().min(0).max(100),
  aiReviewScore: z.number().int().min(0).max(100),
});

export const createProductivitySession = async (req: Request, res: Response) => {
  const data = sessionSchema.parse(req.body);
  const query = `
    INSERT INTO productivity_sessions (user_id, tasks_completed, bugs_prevented, focus_score, ai_review_score)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const result = await pool.query(query, [data.userId, data.tasksCompleted, data.bugsPrevented, data.focusScore, data.aiReviewScore]);
  res.status(201).json(result.rows[0]);
};

export const getDashboard = async (_req: Request, res: Response) => {
  const result = await pool.query(`
    SELECT
      COALESCE(AVG(tasks_completed), 0)::numeric(10,2) AS avg_tasks,
      COALESCE(AVG(bugs_prevented), 0)::numeric(10,2) AS avg_bugs_prevented,
      COALESCE(AVG(focus_score), 0)::numeric(10,2) AS avg_focus,
      COALESCE(AVG(ai_review_score), 0)::numeric(10,2) AS avg_review_score
    FROM productivity_sessions;
  `);
  res.json(result.rows[0]);
};
