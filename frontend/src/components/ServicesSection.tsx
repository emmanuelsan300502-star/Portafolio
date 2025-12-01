import { motion } from 'framer-motion';
import { LucideIcon, icons } from 'lucide-react';

import { Service } from '../services/api';
import { SectionTitle } from './SectionTitle';

interface Props {
  services: Service[];
}

const getIcon = (name: string): LucideIcon => icons[name as keyof typeof icons] ?? icons.Sparkles;

export const ServicesSection = ({ services }: Props) => (
  <section id="services" className="mx-auto max-w-6xl px-6 py-16">
    <SectionTitle
      eyebrow="Servicios"
      title="Soluciones end-to-end para productos digitales"
      description="Cada servicio está diseñado para cubrir el ciclo completo: descubrimiento, diseño, desarrollo y lanzamiento."
    />
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, index) => {
        const Icon = getIcon(service.icon);
        return (
          <motion.article
            key={service.id}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-brand/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="mb-6 inline-flex rounded-full bg-brand/10 p-3 text-brand">
              <Icon size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-white/70">{service.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              {service.highlight ? 'Prioritario' : 'On-demand'}
            </p>
          </motion.article>
        );
      })}
    </div>
  </section>
);


