import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/resumeData';
import { useActiveSection } from '../hooks/useActiveSection';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.href.slice(1)), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled || menuOpen ? 'site-nav--scrolled' : ''} ${menuOpen ? 'site-nav--menu-open' : ''}`}>
      <nav className="nav-inner" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to homepage">
          <span className="brand-mark">PT</span>
          <span className="brand-copy">
            <strong>{PERSONAL_INFO.shortName}</strong>
            <small>Full-stack developer</small>
          </span>
        </a>

        <div className="nav-links" aria-label="Page sections">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'is-active' : ''}
              aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a className="button button--small nav-cta" href="#contact">
          Let's work together <ArrowUpRight aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={activeSection === item.href.slice(1) ? 'is-active' : ''}
            >
              <span>{item.label}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <a className="button" href="#contact" onClick={closeMenu}>Let's work together</a>
        </div>
      )}
    </header>
  );
}
