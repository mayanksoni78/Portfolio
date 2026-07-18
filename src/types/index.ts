export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  resumeUrl: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string | StaticImageData;
}

export interface Skill {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tool';
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description?: string;
}

export interface Achievement {
  title: string;
  description: string;
  stat?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
