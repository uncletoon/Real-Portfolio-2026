import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Check, ExternalLink, Layers3, X } from 'lucide-react';
import { PROJECTS, SECTION_IMAGES } from '../data/resumeData';
import type { Project } from '../types';

const categories = ['All', 'Full-stack', 'Backend'] as const;

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButton.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const stackGroups = Object.entries(project.techStack).filter(([, items]) => items?.length);

  return (
    <motion.div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }}>
        <button ref={closeButton} className="icon-button modal-close" type="button" onClick={onClose} aria-label="Close project details"><X aria-hidden="true" /></button>
        <header className="modal-header">
          <p className="eyebrow">{project.category} / {project.status}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.overview}</p>
        </header>

        <div className="modal-body">
          <div className="modal-story">
            <section><h3>The problem</h3><p>{project.problem}</p></section>
            <section><h3>The solution</h3><p>{project.solution}</p></section>
            <section><h3>My role</h3><p>{project.role}</p></section>
          </div>

          <div>
            <h3>Main features</h3>
            <ul className="feature-list">{project.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul>
          </div>

          <div className="stack-groups">
            {stackGroups.map(([group, items]) => (
              <div key={group}><h3>{group === 'tools' ? 'Tools & delivery' : group}</h3><div className="chip-list">{items?.map((item) => <span key={item}>{item}</span>)}</div></div>
            ))}
          </div>

          {(project.liveUrl || project.repositoryUrl) && (
            <div className="modal-actions">
              {project.liveUrl && <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ExternalLink aria-hidden="true" /></a>}
              {project.repositoryUrl && <a className="button button--secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer">View repository <ExternalLink aria-hidden="true" /></a>}
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  const featured = PROJECTS.find((project) => project.featured) ?? PROJECTS[0];
  const visibleProjects = PROJECTS.filter((project) => !project.featured && (filter === 'All' || project.category === filter));

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <img className="section-background" src={SECTION_IMAGES.projects} alt="" loading="lazy" decoding="async" />
      <div className="section-background-overlay" />
      <div className="shell section-layer">
        <header className="section-heading section-heading--split">
          <div><p className="eyebrow">Selected work / Real systems</p><h2 id="projects-title">Projects built around useful outcomes.</h2></div>
          <p>Healthcare access, operational dashboards, safe financial transactions, and documented APIs—each project begins with a concrete problem.</p>
        </header>

        {featured && (
          <motion.article className="featured-project" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="featured-visual"><img src={featured.image} alt="Abstract system interface representing the AI healthcare ecosystem" loading="lazy" /><span>Featured project</span></div>
            <div className="featured-copy">
              <p className="eyebrow">{featured.subtitle}</p>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <div className="project-facts"><span><small>Role</small>{featured.role}</span><span><small>Status</small>{featured.status}</span></div>
              <div className="chip-list">{featured.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <button className="text-button" type="button" onClick={() => setActiveProject(featured)}>Read the case study <ArrowUpRight aria-hidden="true" /></button>
            </div>
          </motion.article>
        )}

        <div className="project-toolbar">
          <h3>More engineering work</h3>
          <div className="filters" aria-label="Filter projects">
            {categories.map((category) => <button key={category} type="button" className={filter === category ? 'is-active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
          </div>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <motion.article key={project.id} className="project-card" layout initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reduceMotion ? 0 : index * 0.06 }}>
              <div className="project-card-top"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.category}</span></div>
              <Layers3 aria-hidden="true" className="project-icon" />
              <p className="eyebrow">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chip-list">{project.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}</div>
              <button className="text-button" type="button" onClick={() => setActiveProject(project)}>Project details <ArrowUpRight aria-hidden="true" /></button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>{activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}</AnimatePresence>
    </section>
  );
}
