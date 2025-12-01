import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

import { Experience } from '../services/api';

interface Props {
  experiences: Experience[];
}

const formatDate = (value: string | null) => {
  if (!value) return 'Actual';
  return new Date(value).toLocaleDateString('es-MX', { month: 'short', year: 'numeric' });
};

export const Timeline = ({ experiences }: Props) => (
  <div className="relative pl-6">
    <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-white/20 to-transparent" />
    {experiences.map((experience) => (
      <motion.div
        key={experience.id}
        className="relative mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-[37px] top-6 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white shadow-lg">
          <Briefcase size={16} />
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
          {formatDate(experience.start_date)} – {formatDate(experience.end_date)}
        </p>
        <h4 className="mt-2 text-xl font-semibold">
          {experience.role} · <span className="text-brand">{experience.company}</span>
        </h4>
        <p className="text-sm text-white/70">{experience.description}</p>
      </motion.div>
    ))}
  </div>
);

