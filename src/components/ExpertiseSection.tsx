import { Check, CircuitBoard, CloudCog, Code2, Database, Headphones } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { ExpertiseArea, SkillCategory } from '../types';

const icons: Record<SkillCategory, typeof Code2> = {
  backend: CircuitBoard,
  frontend: Code2,
  database: Database,
  infrastructure: Headphones,
  devops: CloudCog,
};

export function ExpertiseSection({ area, index }: { area: ExpertiseArea; index: number }) {
  const Icon = icons[area.id];
  const reduceMotion = useReducedMotion();

  return (
    <section id={index === 0 ? 'skills' : area.id} className={`expertise expertise--${area.imagePosition} accent-${area.accent}`} aria-labelledby={`${area.id}-title`}>
      <img className="expertise-media" src={area.image} alt="" loading="lazy" decoding="async" />
      <div className="expertise-overlay" />
      <motion.div
        className="shell expertise-layout"
        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="expertise-content">
          <p className="eyebrow">{area.eyebrow}</p>
          <div className="expertise-title"><Icon aria-hidden="true" /><h2 id={`${area.id}-title`}>{area.title}</h2></div>
          <p className="lead">{area.description}</p>

          <div className="technology-list" aria-label={`${area.title} technologies`}>
            {area.technologies.map((technology) => (
              <span className="technology" key={technology.name} title={`${technology.name}: ${technology.level ?? 'Skill'}`}>
                {technology.name}<small>{technology.level}</small>
              </span>
            ))}
          </div>

          <ul className="capability-list">
            {area.capabilities.map((capability) => <li key={capability}><Check aria-hidden="true" />{capability}</li>)}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
