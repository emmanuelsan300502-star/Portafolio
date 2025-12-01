import { useEffect, useState } from 'react';

import { About, portfolioAPI, Project, Service, Technology, Testimonial } from '../services/api';

export interface PortfolioState {
  about?: About;
  services: Service[];
  projects: Project[];
  technologies: Technology[];
  testimonials: Testimonial[];
  loading: boolean;
  error?: string;
}

export const usePortfolioData = (): PortfolioState => {
  const [state, setState] = useState<PortfolioState>({
    services: [],
    projects: [],
    technologies: [],
    testimonials: [],
    loading: true,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const [aboutRes, servicesRes, projectsRes, techRes, testimonialsRes] = await Promise.all([
          portfolioAPI.getAbout(),
          portfolioAPI.getServices(),
          portfolioAPI.getProjects(),
          portfolioAPI.getTechnologies(),
          portfolioAPI.getTestimonials(),
        ]);

        setState({
          about: aboutRes.data[0],
          services: servicesRes.data,
          projects: projectsRes.data,
          technologies: techRes.data,
          testimonials: testimonialsRes.data,
          loading: false,
        });
      } catch (error) {
        console.error(error);
        setState((prev) => ({
          ...prev,
          loading: false,
          error: 'No pudimos recuperar los datos. Intenta más tarde.',
        }));
      }
    };

    load();
  }, []);

  return state;
};


