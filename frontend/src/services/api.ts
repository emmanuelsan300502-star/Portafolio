import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
});

export interface Experience {
  id: number;
  role: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string | null;
  location: string;
  icon: string;
}

export interface About {
  id: number;
  headline: string;
  subheadline: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  avatar_url: string;
  hero_illustration: string;
  resume_url: string;
  cta_primary: string;
  cta_secondary: string;
  experiences: Experience[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  highlight: boolean;
}

export interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  level: string;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  summary: string;
  image_url: string;
  github_url: string;
  demo_url: string;
  featured: boolean;
  year: number;
  technologies: Technology[];
}

export interface Testimonial {
  id: number;
  author_name: string;
  role: string;
  company: string;
  quote: string;
  avatar_url: string;
  highlight: boolean;
}

export interface ContactPayload {
  full_name: string;
  email: string;
  message: string;
}

export const portfolioAPI = {
  getAbout: () => apiClient.get<About[]>('/about/'),
  getServices: () => apiClient.get<Service[]>('/services/'),
  getProjects: () => apiClient.get<Project[]>('/projects/'),
  getTechnologies: () => apiClient.get<Technology[]>('/technologies/'),
  getTestimonials: () => apiClient.get<Testimonial[]>('/testimonials/'),
  sendContact: (payload: ContactPayload) => apiClient.post('/contact/', payload),
};


