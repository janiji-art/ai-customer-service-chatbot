import { useEffect, useState } from 'react';
import { Activity, Bot, Bug, GitPullRequest, LayoutPanelTop, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { api } from './lib/api';
import { Panel } from './components/Panel';
import { Dashboard } from './types';

const starterTask = 'Build an event-driven pull request bot that triages, runs tests, and proposes fixes.';

export default function App() {
  const [taskResult, setTaskResult] = useState('');
  const [bugResult, setBugResult] = useState('');
  const [archResult, setArchResult] = useState('');
  const [reviewResult, setReviewResult] = useState('');
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);

  useEffect(() => {
    api.dashboard().then(setDashboard).catch(() => undefined);
  }, []);

  const cards = [
    {
      title: 'Task → Code',
      icon: Sparkles,
      action: async () => setTaskResult((await api.taskToCode(starterTask)).output),
      output: taskResult,
    },
    {
      title: 'Real-time Bug Detection',
      icon: Bug,
      action: async () => setBugResult((await api.bugDetect('const value = data.items[0].name.toUpperCase();')).output),
      output: bugResult,
    },
    {
      title: 'Auto Architecture Visualizer',
      icon: LayoutPanelTop,
      action: async () => setArchResult((await api.architecture('Multi-tenant AI IDE with live collaboration')).output),
      output: archResult,
    },
    {
      title: 'AI Code Review Genius Score',
      icon: Bot,
      action: async () => setReviewResult((await api.reviewScore('diff --git a/app.ts b/app.ts\n+ eval(userInput)')).output),
      output: reviewResult,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 md:p-10">
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neon-400">NeuroForge AI OS</p>
          <h1 className="text-3xl font-semibold md:text-5xl">The Future of Software Creation</h1>
        </div>
        <div className="glass rounded-xl px-4 py-3 text-sm text-slate-300">
          <GitPullRequest className="mr-2 inline size-4" />
          GitHub Auto-Integration Ready
        </div>
      </motion.header>

      <section className="grid gap-6 lg:grid-cols-2">
        {cards.map(({ title, icon: Icon, action, output }) => (
          <Panel key={title} title={title}>
            <button onClick={() => void action()} className="rounded-lg bg-neon-500 px-4 py-2 text-sm font-medium hover:bg-neon-400">
              Run AI Module
            </button>
            <div className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap rounded-lg bg-slate-950/70 p-3 text-sm text-slate-200">
              {output || 'No output yet.'}
            </div>
            <Icon className="mt-4 size-5 text-neon-400" />
          </Panel>
        ))}
      </section>

      <section className="mt-6 grid gap-6 md:grid-cols-4">
        <Panel title="Tasks / day">
          <p className="text-2xl font-semibold">{dashboard?.avg_tasks ?? '--'}</p>
        </Panel>
        <Panel title="Bugs prevented">
          <p className="text-2xl font-semibold">{dashboard?.avg_bugs_prevented ?? '--'}</p>
        </Panel>
        <Panel title="Focus score">
          <p className="text-2xl font-semibold">{dashboard?.avg_focus ?? '--'}</p>
        </Panel>
        <Panel title="Genius score">
          <p className="text-2xl font-semibold">{dashboard?.avg_review_score ?? '--'}</p>
          <Activity className="mt-4 size-5 text-emerald-400" />
        </Panel>
      </section>
    </main>
  );
}
