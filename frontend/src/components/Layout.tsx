import { Github, Linkedin } from 'lucide-react';
import { ReactNode } from 'react';

import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../styles/utils';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={cn(
        'relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white transition-colors',
        theme === 'light' && 'from-slate-50 via-white to-slate-100 text-slate-900',
      )}
    >
      <div className="noise" />
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-slate-950/80 border-b border-white/5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="font-display text-xl tracking-tight">ESR</p>
          <nav className="hidden gap-8 text-sm uppercase tracking-widest md:flex">
            <a href="#about" className="hover:text-brand transition">Sobre mí</a>
            <a href="#services" className="hover:text-brand transition">Servicios</a>
            <a href="#projects" className="hover:text-brand transition">Proyectos</a>
            <a href="#contact" className="hover:text-brand transition">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 p-2 hover:border-brand transition"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 p-2 hover:border-brand transition"
            >
              <Linkedin size={16} />
            </a>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      </header>
      <main className="relative z-10">{children}</main>
      <footer className="border-t border-white/5 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60">
          © {new Date().getFullYear()} Emmanuel - Ingeniería en Sistemas Computacionales.
        </div>
      </footer>
    </div>
  );
};

