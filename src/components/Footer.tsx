import { ArrowUp, Mail, Phone } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/resumeData';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><a className="footer-brand" href="#home">{PERSONAL_INFO.shortName}</a><p>Full-stack engineering, IT systems, and practical digital problem-solving from Kigali.</p></div>
        <div><h2>Navigate</h2>{NAV_ITEMS.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        <div><h2>Connect</h2><a href={`mailto:${PERSONAL_INFO.email}`}><Mail aria-hidden="true" />Email</a><a href={`tel:${PERSONAL_INFO.phone}`}><Phone aria-hidden="true" />{PERSONAL_INFO.phone}</a></div>
        <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span><span>Built with React, Vite and TypeScript</span></div>
    </footer>
  );
}
