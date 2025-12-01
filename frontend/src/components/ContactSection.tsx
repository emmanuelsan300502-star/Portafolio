import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

import { About, portfolioAPI } from '../services/api';
import { SectionTitle } from './SectionTitle';
import { Button } from './ui/Button';

const initialForm = {
  full_name: '',
  email: '',
  message: '',
};

interface Props {
  about?: About;
}

export const ContactSection = ({ about }: Props) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    try {
      await portfolioAPI.sendContact(form);
      setForm(initialForm);
      setStatus('sent');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Contacto"
        title="Listo para colaborar"
        description="Envíame un mensaje y agendemos una llamada de descubrimiento para entender los retos de tu producto."
      />
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <label className="text-sm uppercase tracking-[0.3em] text-white/50">
            Nombre completo
            <input
              type="text"
              required
              value={form.full_name}
              onChange={(e) => setForm((prev) => ({ ...prev, full_name: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white outline-none focus:border-brand"
              placeholder="Tu nombre completo"
            />
          </label>
          <label className="text-sm uppercase tracking-[0.3em] text-white/50">
            Correo electrónico
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white outline-none focus:border-brand"
              placeholder="tu@email.com"
            />
          </label>
          <label className="text-sm uppercase tracking-[0.3em] text-white/50">
            Mensaje
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white outline-none focus:border-brand"
              placeholder="Cuéntame qué necesitas..."
            />
          </label>
          <Button type="submit" disabled={status === 'sending'} className="w-full gap-2">
            <Send size={16} />
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
          {status === 'sent' && (
            <p className="text-sm text-brand">✓ Mensaje enviado correctamente. Te responderé pronto.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400">
              Ocurrió un error. Escríbeme directamente a {about?.email ?? 'emmanuelsan300502@gmail.com'}
            </p>
          )}
        </motion.form>
        <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Email</p>
            <a
              href={`mailto:${about?.email ?? 'emmanuelsan300502@gmail.com'}`}
              className="mt-2 flex items-center gap-2 text-lg font-semibold hover:text-brand transition"
            >
              <Mail size={18} /> {about?.email ?? 'emmanuelsan300502@gmail.com'}
            </a>
          </div>
          {about?.phone && (
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">WhatsApp</p>
              <a
                href={`https://wa.me/${about.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, me interesa tu servicio')}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center gap-2 text-lg font-semibold hover:text-brand transition cursor-pointer"
              >
                <MessageCircle size={18} /> {about.phone}
              </a>
            </div>
          )}
          <p className="text-white/70">
            También puedes contactarme directamente por WhatsApp o email. Respondo lo antes posible.
          </p>
        </div>
      </div>
    </section>
  );
};

