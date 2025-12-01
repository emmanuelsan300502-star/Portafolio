import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

import { About } from '../services/api';

interface Props {
  about?: About;
}

export const Hero = ({ about }: Props) => {
  if (!about) return null;

  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-20 pt-24 text-center md:flex-row md:text-left">
      <motion.div
        className="flex-1 space-y-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm uppercase tracking-[0.5em] text-brand-accent">Portafolio 2025</p>
        <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
          {about.headline}
          <span className="block text-brand">{about.subheadline}</span>
        </h1>
        <div className="flex flex-col gap-4 md:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand/30"
          >
            {about.cta_primary}
            <ArrowRight size={16} />
          </a>
          <a
            href={`mailto:${about.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white/80"
          >
            <Mail size={16} /> {about.cta_secondary}
          </a>
        </div>
      </motion.div>
      <motion.div
        className="relative flex-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="relative h-80 w-80 overflow-hidden rounded-[2.5rem] border border-white/20 bg-slate-900/40 shadow-2xl">
          {about.hero_illustration ? (
            <img
              src={about.hero_illustration}
              alt="Hero Illustration"
              className="h-full w-full object-cover object-[center_20%]"
              loading="lazy"
              onError={(e) => {
                console.error('Error cargando imagen hero:', about.hero_illustration);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-white/40">
              <p className="text-sm">Sin imagen</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
        </div>
        <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/20 bg-slate-950/80 px-5 py-4 text-left shadow-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contacto</p>
          <p className="font-semibold">Emmanuel Sanchez Rodriguez</p>
          <p className="text-sm text-white/70">{about.location}</p>
        </div>
      </motion.div>
    </section>
  );
};


