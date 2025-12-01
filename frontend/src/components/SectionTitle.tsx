import { motion } from 'framer-motion';

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionTitle = ({ eyebrow, title, description }: Props) => (
  <div className="mb-10 space-y-2 text-center md:text-left">
    <motion.p
      className="text-xs uppercase tracking-[0.4em] text-brand-accent"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {eyebrow}
    </motion.p>
    <motion.h2
      className="text-3xl font-display text-white md:text-4xl"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {description && (
      <p className="max-w-2xl text-base text-white/70">{description}</p>
    )}
  </div>
);


