import { motion } from 'framer-motion';

import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { ProjectsSection } from '../components/ProjectsSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Loader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <motion.div
      className="h-16 w-16 rounded-full border-4 border-brand border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
    />
  </div>
);

const ErrorState = ({ message }: { message: string }) => (
  <div className="mx-auto max-w-2xl rounded-3xl border border-red-500/30 bg-red-500/10 p-8 text-center">
    <h3 className="text-2xl font-semibold text-red-200">Ups...</h3>
    <p className="text-white/80">{message}</p>
  </div>
);

export const HomePage = () => {
  const { about, services, projects, technologies, testimonials, loading, error } = usePortfolioData();

  return (
    <Layout>
      {loading && <Loader />}
      {!loading && error && <ErrorState message={error} />}
      {!loading && !error && (
        <>
          <Hero about={about} />
          <AboutSection about={about} technologies={technologies} />
          <ServicesSection services={services} />
          <ProjectsSection projects={projects} />
          <TestimonialsSection testimonials={testimonials} />
          <ContactSection about={about} />
        </>
      )}
    </Layout>
  );
};

