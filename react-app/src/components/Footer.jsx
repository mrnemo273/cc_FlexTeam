import './Footer.css';

const navLinks = [
  { href: '#challenge', label: 'The Challenge' },
  { href: '#solution', label: 'Our Solution' },
  { href: '#team', label: 'Our Team' },
  { href: '#services', label: 'Services' },
];

const moreLinks = [
  { href: '#pricing', label: 'Pricing' },
  { href: '#advantage', label: 'Why Us' },
  { href: '#engagement', label: 'Engagement Models' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img
                className="footer-logo-img"
                src="/images/CCIcon_White.png"
                alt="Chameleon Collective"
              />
            </a>
            <p>
              Fractional teams of senior leaders and experts solving complex challenges across PE firm portfolios.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} onClick={(e) => handleClick(e, href)}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>More</h4>
              <ul>
                {moreLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} onClick={(e) => handleClick(e, href)}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-wordmark-wrap">
            <img
              className="footer-wordmark"
              src="/images/CCWorkMark_Vert_White.png"
              alt="Chameleon Collective"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
