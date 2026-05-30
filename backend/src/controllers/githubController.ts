import { Request, Response } from 'express';

export const githubWebhookHandler = async (req: Request, res: Response) => {
  const event = req.header('x-github-event');
  if (event === 'pull_request') {
    // Future: trigger AI review + architecture drift checks.
    return res.status(202).json({ status: 'accepted', message: 'PR event queued for AI review.' });
  }

  return res.status(202).json({ status: 'accepted', message: `Unhandled event type: ${event}` });
};
