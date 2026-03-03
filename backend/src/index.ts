import express from 'express';
import cors from 'cors';
import { env } from './config.js';
import { router } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { initDb } from './db/pool.js';

const app = express();
app.use(cors({ origin: env.FRONTEND_ORIGIN }));
app.use(express.json({ limit: '2mb' }));
app.use('/api', router);
app.use(errorHandler);

initDb()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Backend listening on port ${env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize DB', error);
    process.exit(1);
  });
