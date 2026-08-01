import { ArrowDown, ArrowRight, Mail, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import heroImage from '../assets/portfolio/Main.webp';
import { PERSONAL_INFO } from '../data/resumeData';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img className="hero-media" src={heroImage} alt="Cinematic developer workspace with code interfaces" fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        className="hero-content shell"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <p className="hero-kicker">Hello, I'm {PERSONAL_INFO.shortName}</p>
        <h1 id="hero-title">Full-Stack Developer <em>&amp; IT Professional</em></h1>
        <p className="hero-summary">{PERSONAL_INFO.summary}</p>

        <div className="hero-actions">
          <a className="button" href="#projects">View my projects <ArrowRight aria-hidden="true" /></a>
          <a className="button button--secondary" href="#contact">Contact me</a>
        </div>

        <div className="hero-meta" aria-label="Location and email">
          <span><MapPin aria-hidden="true" /> {PERSONAL_INFO.location}</span>
          <a href={`mailto:${PERSONAL_INFO.email}`}><Mail aria-hidden="true" /> {PERSONAL_INFO.email}</a>
        </div>
      </motion.div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span>Explore</span><ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
