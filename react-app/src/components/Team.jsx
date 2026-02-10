import AnimatedCard from './AnimatedCard';
import './Team.css';

const specialties = [
  {
    title: 'Fractional CMO/COO/CRO, VPs & Directors',
    text: 'The strategic leaders who drive marketing transformation, align priorities, and accelerate growth.',
  },
  {
    title: 'Paid Media',
    text: 'SEM, social, display, and programmatic specialists who turn marketing spend into measurable returns.',
  },
  {
    title: 'SEO & Content',
    text: 'Building organic growth engines and establishing authority across your brand.',
  },
  {
    title: 'Design & UI/UX',
    text: 'Sharpening brand presence and user experience to drive conversion and customer loyalty.',
  },
  {
    title: 'Branding & PR',
    text: 'Strengthening brand reputation and amplifying visibility in the markets that matter.',
  },
  {
    title: 'Project Management',
    text: 'Keeping every initiative on track, on budget, and moving forward.',
  },
];

const tiers = [
  { label: 'Executive', className: 'tier-executive' },
  { label: 'Senior Manager', className: 'tier-manager' },
  { label: 'Senior Specialist', className: 'tier-specialist' },
];

export default function Team() {
  return (
    <section className="section section-dark" id="team">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Our Team</p>
          <h2 className="section-title">The People Behind the Transformation</h2>
          <div className="team-stat">
            <span className="stat-number">300+</span>
            <span className="stat-label">Fractional Leaders &amp; Experts</span>
          </div>
        </div>
        <div className="team-grid">
          {specialties.map((item, i) => (
            <AnimatedCard
              key={item.title}
              className="team-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="team-card-accent"></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AnimatedCard>
          ))}
        </div>
        <div className="talent-tiers">
          {tiers.map((tier, i) => (
            <AnimatedCard
              key={tier.label}
              className="tier"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={`tier-badge ${tier.className}`}>{tier.label}</div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
