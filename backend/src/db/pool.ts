import { Pool } from 'pg';
import { env } from '../config.js';

export const pool = new Pool({ connectionString: env.DATABASE_URL });

export const initDb = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS productivity_sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id TEXT NOT NULL,
      tasks_completed INT NOT NULL,
      bugs_prevented INT NOT NULL,
      focus_score INT NOT NULL,
      ai_review_score INT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
};
