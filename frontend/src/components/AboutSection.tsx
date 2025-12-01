import { About, Technology } from '../services/api';
import { SectionTitle } from './SectionTitle';
import { Timeline } from './Timeline';
import { TechGrid } from './TechGrid';

interface Props {
  about?: About;
  technologies: Technology[];
}

export const AboutSection = ({ about, technologies }: Props) => {
  if (!about) return null;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Sobre mí"
        title="Ingeniero en Sistemas Computacionales"
        description={about.description}
      />
      <div className="grid gap-12">
        <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Ubicación</p>
              <p className="text-xl font-semibold">{about.location}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Contacto</p>
              <p className="text-xl font-semibold">{about.email}</p>
            </div>
          </div>
          <Timeline experiences={about.experiences} />
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Stack</p>
          <TechGrid technologies={technologies.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
};


