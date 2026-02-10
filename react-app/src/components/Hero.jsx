import './Hero.css';

export default function Hero() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="hero" id="hero">
      <div className="hero-bg-pattern"></div>
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Flex Teams</p>
          <h1 className="hero-title">Transform How You Invest in Marketing Talent</h1>
          <p className="hero-subtitle">
            Fractional senior leaders and experts who embed with your team, deliver results, and build lasting capability.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" onClick={handleClick}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
