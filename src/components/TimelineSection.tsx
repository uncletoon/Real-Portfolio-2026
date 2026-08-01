import { Award, BriefcaseBusiness, GraduationCap, MapPin } from 'lucide-react';
import experienceImage from '../assets/portfolio/anywhere.webp';
import { CERTIFICATES, EXPERIENCES, SECTION_IMAGES } from '../data/resumeData';

export function TimelineSection() {
  return (
    <>
      <section id="experience" className="section journey-section" aria-labelledby="journey-title">
        <div className="journey-visual">
          <img src={experienceImage} alt="Cinematic development workspace representing professional growth" loading="lazy" decoding="async" />
          <div className="journey-visual-copy"><p className="eyebrow">Professional journey</p><p>Development, deployment, and support—experience shaped by real operational environments.</p></div>
        </div>

        <div className="shell journey-layout">
          <header className="section-heading">
            <p className="eyebrow">Experience / Education</p>
            <h2 id="journey-title">Growing through systems that matter.</h2>
          </header>

          <div className="timeline">
            {EXPERIENCES.map((experience) => {
              const Icon = experience.type === 'education' ? GraduationCap : BriefcaseBusiness;
              return (
                <article className="timeline-item" key={`${experience.period}-${experience.role}`}>
                  <div className="timeline-marker"><Icon aria-hidden="true" /></div>
                  <div className="timeline-period">{experience.period}</div>
                  <div className="timeline-content">
                    <span>{experience.type === 'education' ? 'Education' : 'Experience'}</span>
                    <h3>{experience.role}</h3>
                    <p className="organization">{experience.organization}</p>
                    {experience.location && <p className="location"><MapPin aria-hidden="true" />{experience.location}</p>}
                    <ul>{experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certificates" className="section certificate-section" aria-labelledby="certificates-title">
        <img className="section-background" src={SECTION_IMAGES.certificates} alt="" loading="lazy" decoding="async" />
        <div className="section-background-overlay section-background-overlay--right" />
        <div className="shell certificate-layout section-layer">
          <div className="certificate-spacer" aria-hidden="true" />
          <div>
            <header className="section-heading">
              <p className="eyebrow">Credentials / Continued learning</p>
              <h2 id="certificates-title">Certificates &amp; achievements.</h2>
              <p>Formal learning across full-stack development, AI, data, digital competence, and professional practice.</p>
            </header>

            <div className="certificate-list">
              {CERTIFICATES.map((certificate, index) => (
                <article className="certificate-card" key={certificate.id}>
                  <div className="certificate-number">{String(index + 1).padStart(2, '0')}</div>
                  <Award aria-hidden="true" />
                  <div><h3>{certificate.title}</h3>{certificate.skills && <p>{certificate.skills.join(' · ')}</p>}</div>
                  {certificate.credentialUrl && <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">View certificate</a>}
                </article>
              ))}
            </div>
            <p className="data-note">Issuer, issue date, credential ID, and verification links were not present in the original portfolio, so they have not been invented.</p>
          </div>
        </div>
      </section>
    </>
  );
}
