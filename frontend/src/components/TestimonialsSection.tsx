import { motion } from 'framer-motion';

import { SectionTitle } from './SectionTitle';
import { Testimonial } from '../services/api';

interface Props {
  testimonials: Testimonial[];
}

export const TestimonialsSection = ({ testimonials }: Props) => {
  if (!testimonials.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Testimonios"
        title="Confianza respaldada por líderes de producto"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <p className="text-lg text-white/80">“{item.quote}”</p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={item.avatar_url}
                alt={item.author_name}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-white">{item.author_name}</p>
                <p className="text-sm text-white/60">
                  {item.role} · {item.company}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};


