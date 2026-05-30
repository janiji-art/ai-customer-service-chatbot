# NeuroForge AI OS

A production-ready, full-stack AI coding assistant platform designed to compete with Copilot, Cursor, and Codex.

## Why this product feels 10 years ahead
- **Task-to-code engine** with contextual implementation generation.
- **Real-time bug detection** with severity, remediation, and fixed patches.
- **Auto architecture visualization** from plain-English requirements.
- **GitHub auto-integration hooks** for pull request intelligence.
- **AI code review genius score (0-100)** for quality benchmarking.
- **Productivity analytics dashboard** for high-performance engineering teams.
- **Dark glassmorphism UI** with subtle motion effects and ultra-minimal interaction patterns.

## Tech stack
- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Node.js + Express + TypeScript
- **AI**: OpenAI API
- **Database**: PostgreSQL

## Architecture diagram
```mermaid
flowchart LR
  U[Developer] --> F[React Frontend]
  F -->|REST /api| B[Express API]
  B --> O[OpenAI API]
  B --> P[(PostgreSQL)]
  G[GitHub Webhooks] --> B
  B --> A[Analytics + Genius Score Engine]
  A --> F
```

## Folder structure
```text
.
├── backend
│   ├── src
│   │   ├── config.ts
│   │   ├── controllers
│   │   ├── db
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── lib
│   │   ├── types
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tailwind.config.ts
│   └── vite.config.ts
├── docker-compose.yml
├── package.json
└── README.md
```

## Environment setup
Create `backend/.env`:
```bash
NODE_ENV=development
PORT=8080
FRONTEND_ORIGIN=http://localhost:5173
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/neuroforge
GITHUB_APP_ID=
GITHUB_PRIVATE_KEY=
GITHUB_WEBHOOK_SECRET=
```

Create `frontend/.env`:
```bash
VITE_API_BASE_URL=http://localhost:8080/api
```

## Local development
```bash
npm install
npm run dev
```
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`

## API surface
- `POST /api/ai/task-to-code`
- `POST /api/ai/bugs`
- `POST /api/ai/architecture`
- `POST /api/ai/review-score`
- `POST /api/github/webhook`
- `POST /api/analytics/session`
- `GET /api/analytics/dashboard`

## Deployment guide

### Option A: Docker Compose (recommended for staging)
```bash
docker compose up --build
```

### Option B: Cloud deployment blueprint
1. **Frontend** → Vercel / Netlify (set `VITE_API_BASE_URL`).
2. **Backend** → Render / Fly.io / AWS ECS (set env vars, autoscaling enabled).
3. **Database** → Managed PostgreSQL (Neon, RDS, Supabase).
4. **Secrets** → Vault/SSM-managed keys for OpenAI and GitHub app credentials.
5. **Observability** → Add OpenTelemetry + Sentry + centralized logs.
6. **Security hardening**:
   - CORS allow-list
   - Rate limiting + input validation
   - Signed GitHub webhook verification
   - CI/CD scans (SAST, dependency, container)

## Production readiness checklist
- [x] TypeScript strict mode
- [x] Input validation with Zod
- [x] API layer separation (controllers/services)
- [x] Environment schema enforcement
- [x] PostgreSQL persistence for analytics
- [x] CI-friendly workspace scripts
- [ ] Add auth (OIDC/SAML) for enterprise tenants
- [ ] Add queue + worker for asynchronous large AI jobs
- [ ] Add Redis caching + rate limiter

## License
MIT
