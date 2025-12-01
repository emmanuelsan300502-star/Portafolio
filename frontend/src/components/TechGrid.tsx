import { motion } from 'framer-motion';

import { Technology } from '../services/api';

interface Props {
  technologies: Technology[];
}

export const TechGrid = ({ technologies }: Props) => (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {technologies.map((tech, index) => (
      <motion.div
        key={tech.id}
        className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-brand/40 hover:bg-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">{tech.category}</p>
        <h4 className="text-2xl font-semibold text-white">{tech.name}</h4>
        <p className="text-sm text-white/70">{tech.description}</p>
        <span
          className="mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold text-slate-950"
          style={{ backgroundColor: tech.color }}
        >
          {tech.level}
        </span>
      </motion.div>
    ))}
  </div>
);


