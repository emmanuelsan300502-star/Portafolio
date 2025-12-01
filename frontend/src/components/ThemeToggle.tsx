import { Moon, Sun } from 'lucide-react';

interface Props {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export const ThemeToggle = ({ theme, onToggle }: Props) => (
  <button
    onClick={onToggle}
    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-brand hover:text-brand"
  >
    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
  </button>
);


