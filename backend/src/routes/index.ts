import { Router } from 'express';
import { architectureHandler, bugDetectionHandler, reviewScoreHandler, taskToCodeHandler } from '../controllers/aiController.js';
import { createProductivitySession, getDashboard } from '../controllers/analyticsController.js';
import { githubWebhookHandler } from '../controllers/githubController.js';

export const router = Router();

router.get('/health', (_req, res) => res.json({ ok: true }));
router.post('/ai/task-to-code', taskToCodeHandler);
router.post('/ai/bugs', bugDetectionHandler);
router.post('/ai/architecture', architectureHandler);
router.post('/ai/review-score', reviewScoreHandler);
router.post('/analytics/session', createProductivitySession);
router.get('/analytics/dashboard', getDashboard);
router.post('/github/webhook', githubWebhookHandler);
