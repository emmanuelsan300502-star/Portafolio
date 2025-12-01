import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { Project } from '../services/api';
import { SectionTitle } from './SectionTitle';

interface Props {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: Props) => (
  <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
    <SectionTitle
      eyebrow="Proyectos"
      title="Casos de éxito seleccionados"
      description="Interfaces inmersivas, dashboards animados y experiencias altamente performantes."
    />
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <motion.article
          key={project.id}
          className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img src={project.image_url} alt={project.title} className="h-64 w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />
            <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white">
              {project.year}
            </div>
          </div>
          <div className="space-y-4 px-8 py-8">
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="text-white/70">{project.summary || project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech.id}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-brand hover:text-brand"
                >
                  <Github size={16} /> Código
                </a>
              )}
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-accent"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);


