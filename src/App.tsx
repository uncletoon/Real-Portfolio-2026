import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { EXPERTISE_AREAS } from './data/resumeData';

export default function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <div className="expertise-story">
          {EXPERTISE_AREAS.map((area, index) => <ExpertiseSection area={area} index={index} key={area.id} />)}
        </div>
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
