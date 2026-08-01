export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'database'
  | 'infrastructure'
  | 'devops';

export type SkillLevel = 'Primary' | 'Experienced' | 'Working knowledge' | 'Learning';

export interface Technology {
  name: string;
  category: SkillCategory;
  level?: SkillLevel;
}

export interface ExpertiseArea {
  id: SkillCategory;
  eyebrow: string;
  title: string;
  description: string;
  technologies: Technology[];
  capabilities: string[];
  image: string;
  imagePosition: 'left' | 'right';
  accent: 'blue' | 'cyan' | 'purple' | 'orange';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  category: 'Full-stack' | 'Backend';
  technologies: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
  features: string[];
  role: string;
  status: string;
  image: string;
  featured?: boolean;
  liveUrl?: string;
  repositoryUrl?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location?: string;
  contributions: string[];
  type: 'work' | 'education';
}

export interface Certificate {
  id: string;
  title: string;
  issuer?: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  skills?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
