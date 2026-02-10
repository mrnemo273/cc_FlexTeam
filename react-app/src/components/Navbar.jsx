import { useState, useEffect, useCallback } from 'react';
import { useNavbarScroll } from '../hooks/useScrollAnimation';
import './Navbar.css';

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    closeMenu();
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      const navHeight = 72;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const update = () => {
      const scrollPos = window.scrollY + 172;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const links = [
    { href: '#challenge', label: 'The Challenge' },
    { href: '#solution', label: 'Our Solution' },
    { href: '#team', label: 'Our Team' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#advantage', label: 'Why Us' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={(e) => handleNavClick(e, '#')}>
          <img
            className="cc-logo cc-logo-black"
            src="/images/CCWorkMark_Horiz_Black.png"
            alt="Chameleon Collective"
          />
          <img
            className="cc-logo cc-logo-white"
            src="/images/CCWorkMark_Horiz_White.png"
            alt="Chameleon Collective"
          />
        </a>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
