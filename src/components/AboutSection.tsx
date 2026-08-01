import { ArrowUpRight, Code2, Layers3, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATES, EXPERTISE_AREAS } from '../data/resumeData';

export function AboutSection() {
  const technologyCount = new Set(EXPERTISE_AREAS.flatMap((area) => area.technologies.map((item) => item.name))).size;

  return (
    <section id="about" className="section section--about" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div>
          <p className="eyebrow">About / The person behind the systems</p>
          <h2 id="about-title">From first idea to reliable operation.</h2>
        </div>

        <div className="about-copy">
          <p className="lead">{PERSONAL_INFO.profile}</p>
          <p>I work across software and IT because real products do not stop at the interface. They need thoughtful architecture, trustworthy data, dependable deployment, and practical support for the people using them.</p>
          <a className="text-link" href="#experience">Follow my professional journey <ArrowUpRight aria-hidden="true" /></a>
        </div>

        <div className="principles" aria-label="Working principles">
          <article><Code2 aria-hidden="true" /><h3>Build clearly</h3><p>Readable systems, explicit decisions, and interfaces that explain themselves.</p></article>
          <article><Layers3 aria-hidden="true" /><h3>Think end to end</h3><p>Frontend, APIs, data, infrastructure, and users considered as one product.</p></article>
          <article><ShieldCheck aria-hidden="true" /><h3>Operate responsibly</h3><p>Security, maintainability, data integrity, and support are part of the build.</p></article>
        </div>

        <dl className="stats" aria-label="Portfolio statistics">
          <div><dt>Building since</dt><dd>2023</dd></div>
          <div><dt>Documented projects</dt><dd>{String(PROJECTS.length).padStart(2, '0')}</dd></div>
          <div><dt>Technologies</dt><dd>{technologyCount}+</dd></div>
          <div><dt>Certificates</dt><dd>{String(CERTIFICATES.length).padStart(2, '0')}</dd></div>
        </dl>
      </div>
    </section>
  );
}
