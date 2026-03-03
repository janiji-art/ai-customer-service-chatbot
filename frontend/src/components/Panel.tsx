import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type PanelProps = {
  title: string;
  children: ReactNode;
};

export const Panel = ({ title, children }: PanelProps) => (
  <motion.section
    className="glass rounded-2xl p-5"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
  >
    <h2 className="text-sm uppercase tracking-widest text-slate-400">{title}</h2>
    <div className="mt-4">{children}</div>
  </motion.section>
);
