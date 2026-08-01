import backendImage from '../assets/portfolio/Backend.webp';
import certificatesImage from '../assets/portfolio/Certificates.webp';
import contactImage from '../assets/portfolio/Contact.webp';
import databaseImage from '../assets/portfolio/Database.webp';
import devopsImage from '../assets/portfolio/DevOpandCloud.webp';
import frontendImage from '../assets/portfolio/Frontend.webp';
import infrastructureImage from '../assets/portfolio/IT&Technical.webp';
import projectsImage from '../assets/portfolio/ProjectsSection.webp';
import type { Certificate, ExperienceItem, ExpertiseArea, Project } from '../types';

export const PERSONAL_INFO = {
  name: 'Patience INGABIRE TUYISENGE',
  shortName: 'Patience Tuyisenge',
  role: 'Full-Stack Developer & IT Professional',
  email: 'ingabirepatience3@gmail.com',
  phone: '0782280449',
  location: 'Kigali, Rwanda',
  summary:
    'I design, build, deploy, and support secure digital products—from responsive interfaces and backend systems to databases, cloud infrastructure, and technical support.',
  profile:
    'I am an adaptable IT professional with hands-on experience across the full product lifecycle. I turn business needs into maintainable interfaces, dependable APIs, well-structured data, and production-ready systems, then stay close to the work through deployment, troubleshooting, and support.',
  githubUrl: '',
  linkedinUrl: '',
  cvUrl: '',
} as const;

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: 'backend',
    eyebrow: '01 / Systems & APIs',
    title: 'Backend Development',
    description:
      'I build secure backend systems, REST APIs, authentication workflows, business logic, integrations, and reliable server-side services.',
    technologies: [
      { name: 'Python', category: 'backend', level: 'Primary' },
      { name: 'Django REST', category: 'backend', level: 'Primary' },
      { name: 'Node.js', category: 'backend', level: 'Experienced' },
      { name: 'Express.js', category: 'backend', level: 'Experienced' },
      { name: 'REST APIs', category: 'backend', level: 'Primary' },
      { name: 'JWT & OAuth', category: 'backend', level: 'Experienced' },
      { name: 'Swagger / OpenAPI', category: 'backend', level: 'Experienced' },
    ],
    capabilities: ['API design', 'Authentication & authorization', 'Business logic', 'Validation & error handling', 'Third-party integrations', 'Performance & security'],
    image: backendImage,
    imagePosition: 'right',
    accent: 'blue',
  },
  {
    id: 'frontend',
    eyebrow: '02 / Interfaces',
    title: 'Frontend Development',
    description:
      'I create responsive, accessible, and maintainable interfaces that stay clear and fast across desktop, tablet, and mobile devices.',
    technologies: [
      { name: 'React', category: 'frontend', level: 'Primary' },
      { name: 'TypeScript', category: 'frontend', level: 'Primary' },
      { name: 'JavaScript', category: 'frontend', level: 'Experienced' },
      { name: 'HTML & CSS', category: 'frontend', level: 'Primary' },
      { name: 'Tailwind CSS', category: 'frontend', level: 'Experienced' },
      { name: 'Bootstrap', category: 'frontend', level: 'Experienced' },
      { name: 'WordPress', category: 'frontend', level: 'Experienced' },
      { name: 'Elementor', category: 'frontend', level: 'Experienced' },
    ],
    capabilities: ['Responsive design', 'Component architecture', 'API integration', 'Accessibility', 'Performance optimization', 'Cross-device experiences'],
    image: frontendImage,
    imagePosition: 'left',
    accent: 'purple',
  },
  {
    id: 'database',
    eyebrow: '03 / Data Foundations',
    title: 'Database & Data Management',
    description:
      'I design reliable data structures, protect application data, optimize access patterns, and build safe transactional workflows.',
    technologies: [
      { name: 'PostgreSQL', category: 'database', level: 'Primary' },
      { name: 'MySQL', category: 'database', level: 'Experienced' },
      { name: 'SQLite', category: 'database', level: 'Experienced' },
      { name: 'NoSQL', category: 'database', level: 'Working knowledge' },
      { name: 'SQL', category: 'database', level: 'Primary' },
      { name: 'GIS queries', category: 'database', level: 'Working knowledge' },
    ],
    capabilities: ['Schema design', 'Relationships & normalization', 'Query optimization', 'Data validation', 'Transactions & locking', 'Access control & integrity'],
    image: databaseImage,
    imagePosition: 'right',
    accent: 'cyan',
  },
  {
    id: 'infrastructure',
    eyebrow: '04 / Reliable Operations',
    title: 'IT Infrastructure & Technical Support',
    description:
      'I configure, maintain, troubleshoot, and secure systems, networks, devices, and the environments people rely on every day.',
    technologies: [
      { name: 'Windows', category: 'infrastructure', level: 'Experienced' },
      { name: 'Linux', category: 'infrastructure', level: 'Experienced' },
      { name: 'Networking', category: 'infrastructure', level: 'Experienced' },
      { name: 'Systems support', category: 'infrastructure', level: 'Primary' },
      { name: 'Hardware diagnostics', category: 'infrastructure', level: 'Experienced' },
      { name: 'Cybersecurity fundamentals', category: 'infrastructure', level: 'Working knowledge' },
    ],
    capabilities: ['Troubleshooting', 'System maintenance', 'User support', 'Network configuration', 'Security checks', 'Server administration'],
    image: infrastructureImage,
    imagePosition: 'left',
    accent: 'orange',
  },
  {
    id: 'devops',
    eyebrow: '05 / Delivery',
    title: 'DevOps & Cloud Deployment',
    description:
      'I move applications from development to production using repeatable deployment, testing, and environment-management practices.',
    technologies: [
      { name: 'Git & GitHub', category: 'devops', level: 'Primary' },
      { name: 'Docker', category: 'devops', level: 'Experienced' },
      { name: 'Cloud deployment', category: 'devops', level: 'Experienced' },
      { name: 'Postman', category: 'devops', level: 'Primary' },
      { name: 'API testing', category: 'devops', level: 'Primary' },
      { name: 'Google GenAI SDK', category: 'devops', level: 'Experienced' },
    ],
    capabilities: ['Application deployment', 'Environment management', 'API verification', 'Container workflows', 'Version control', 'Production troubleshooting'],
    image: devopsImage,
    imagePosition: 'right',
    accent: 'purple',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-healthcare-ecosystem',
    title: 'AI-Driven Healthcare Ecosystem',
    subtitle: 'Bridging patients and medical providers',
    summary: 'A healthcare platform with clinic discovery, service booking, provider operations, and an integrated Google GenAI assistant.',
    overview: 'A multi-sided healthcare product that helps patients find care while giving providers practical tools to manage bookings, services, medicine inventory, and performance.',
    problem: 'Patients need a simpler way to discover providers and complete healthcare tasks, while clinics need one operational view of bookings and inventory.',
    solution: 'A responsive React experience backed by Django REST services, role-aware workflows, and an AI assistant for navigation and booking support.',
    category: 'Full-stack',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Django REST', 'Google GenAI'],
    techStack: { frontend: ['React', 'TypeScript', 'Tailwind CSS'], backend: ['Python', 'Django REST Framework', 'JWT authentication'], database: ['PostgreSQL', 'SQLite'], tools: ['Google GenAI SDK', 'Swagger', 'Postman'] },
    features: ['Responsive patient experience', 'Provider operations dashboard', 'Booking and inventory workflows', 'AI-assisted navigation'],
    role: 'Full-stack development and AI integration',
    status: 'Portfolio project',
    image: projectsImage,
    featured: true,
  },
  {
    id: 'smart-healthcare-resource-finder',
    title: 'Smart Healthcare & Medicine Finder',
    subtitle: 'Location-aware access to care',
    summary: 'A full-stack application helping patients locate nearby hospitals and pharmacies and check medicine availability.',
    overview: 'A healthcare resource finder designed around the access challenges faced by Rwandan communities.',
    problem: 'People can lose critical time searching for nearby facilities that actually carry the medicine they need.',
    solution: 'GPS-based facility discovery, medicine inventory visibility, appointments, and role-based administration in one system.',
    category: 'Full-stack',
    technologies: ['Python', 'Django REST', 'PostgreSQL', 'React', 'GPS search'],
    techStack: { frontend: ['React', 'Bootstrap', 'HTML & CSS'], backend: ['Python', 'Django REST Framework', 'RBAC middleware'], database: ['PostgreSQL', 'GIS spatial queries'], tools: ['Docker', 'Git', 'Postman'] },
    features: ['GPS-based facility search', 'Medicine inventory tracking', 'Role-based access control', 'Appointment booking'],
    role: 'Full-stack architecture and development',
    status: 'Portfolio project',
    image: projectsImage,
  },
  {
    id: 'wallet-microfinance-system',
    title: 'Wallet & Micro-Finance Backend',
    subtitle: 'Financial-grade transaction logic',
    summary: 'A secure backend simulating mobile-money services with careful validation, isolation, and auditability.',
    overview: 'A transaction-heavy backend designed to model deposits, withdrawals, account balances, and financial audit records.',
    problem: 'Concurrent financial operations can introduce balance errors, race conditions, and incomplete audit trails.',
    solution: 'Node.js APIs with validation layers, PostgreSQL transactions, row locking, structured errors, and auditable records.',
    category: 'Backend',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Postman'],
    techStack: { backend: ['Node.js', 'Express.js', 'Validation layers', 'Error handlers'], database: ['PostgreSQL', 'ACID transactions', 'Row locking'], tools: ['Postman', 'Docker', 'Git'] },
    features: ['Balance integrity safeguards', 'Deposit and withdrawal APIs', 'Transaction history', 'Audit trail'],
    role: 'Backend architecture and implementation',
    status: 'Portfolio project',
    image: projectsImage,
  },
  {
    id: 'rest-api-product-service',
    title: 'Product Management REST API',
    subtitle: 'Documented cloud-ready microservice',
    summary: 'A scalable product service with CRUD operations, visibility controls, token authentication, and Swagger documentation.',
    overview: 'A focused REST service for managing product resources through a clean, documented API surface.',
    problem: 'Product data needs secure ownership rules, predictable CRUD behavior, and documentation that accelerates integration.',
    solution: 'Django REST endpoints with JWT authentication, public/private visibility rules, OpenAPI documentation, and cloud deployment.',
    category: 'Backend',
    technologies: ['Django', 'REST API', 'Swagger', 'JWT', 'Cloud deployment'],
    techStack: { backend: ['Python', 'Django REST Framework', 'JWT authentication'], database: ['SQLite', 'PostgreSQL'], tools: ['Swagger UI', 'Docker', 'Postman'] },
    features: ['Product CRUD operations', 'Public/private visibility', 'Token authentication', 'Interactive API documentation'],
    role: 'API design, implementation, and deployment',
    status: 'Deployed portfolio project',
    image: projectsImage,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Jan 2026 — Mar 2026',
    role: 'IT Intern — IT Support & Backend Development',
    organization: 'Ministry of Public Services and Labour',
    location: 'Kigali, Rwanda',
    contributions: ['Resolved issues on the national E-Recruitment system and supported system administration.', 'Developed backend REST APIs and a wallet-based transaction module using Node.js and PostgreSQL.', 'Applied data-integrity, transaction-safety, and backend performance practices.'],
    type: 'work',
  },
  {
    period: 'Sep 2023 — Present',
    role: 'Full-Stack Developer',
    organization: 'Freelance & Contract Engineering',
    location: 'Kigali / Remote',
    contributions: ['Build web solutions with Django REST, Node.js, PostgreSQL, SQLite, and React.', 'Create WordPress, Elementor, and WooCommerce solutions for enterprise and retail needs.', 'Integrate AI models and conversational assistants into web applications.'],
    type: 'work',
  },
  {
    period: 'Nov 2024 — Jan 2025',
    role: 'Professional Internship & Project Engineering',
    organization: 'Pakistan High Commission',
    location: 'Kigali, Rwanda',
    contributions: ['Completed intensive work in project management, technical proposals, and public communication.', 'Supported international-relations technology workflows and report preparation.'],
    type: 'work',
  },
  {
    period: 'Sep 2023 — Aug 2026',
    role: "Bachelor's Degree in Information Technology",
    organization: 'University of Kigali',
    location: 'Kigali, Rwanda',
    contributions: ['Focused on software development, database architecture, networking, and systems security.'],
    type: 'education',
  },
];

export const CERTIFICATES: Certificate[] = [
  { id: 'full-stack-ai-python', title: 'Full-Stack Web Development and AI with Python', skills: ['Python', 'Full-stack development', 'AI'] },
  { id: 'icdl', title: 'ICDL Certificate of Digital Competence', skills: ['Digital competence'] },
  { id: 'data-analysis', title: 'Data Analysis Fundamentals', skills: ['Data analysis'] },
  { id: 'professional-internship', title: 'Professional Internship Completion & Job Experience Certificate', skills: ['Professional practice'] },
];

export const SECTION_IMAGES = {
  certificates: certificatesImage,
  contact: contactImage,
  projects: projectsImage,
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
] as const;
