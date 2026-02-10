import AnimatedCard from './AnimatedCard';
import './Advantage.css';

const advantages = [
  {
    title: 'Fractional Expertise',
    text: 'Access top-tier talent without the cost and commitment of a full-time hire.',
  },
  {
    title: 'Agility',
    text: 'Traditional agencies are not set up to react quickly to changing needs. Our fractional teams adapt as your needs change and new challenges arise.',
  },
  {
    title: 'Outcome-Focused Talent',
    text: 'Our people bring deep experience in certain skillsets, but also years of business knowledge of how their work aligns with goals and outcomes.',
  },
  {
    title: 'Centralized Solution',
    text: "Streamline your portfolio's marketing strategy and execution through a single, consistent partner.",
  },
  {
    title: 'Value-Oriented',
    text: 'Our flat-rate model is a direct investment in improving EBITDA and mitigating the risk of underperforming marketing functions across your portfolio.',
  },
  {
    title: 'Flexibility',
    text: 'We can work as a centralized partner, a dedicated team for a single company, or a bridge to a full-time hire.',
  },
  {
    title: 'Agency Management & Assessments',
    text: 'We can manage and assess your existing agency relationships with a senior fractional leader to ensure the best results from external partners.',
  },
  {
    title: 'Agency Partnerships',
    text: 'We maintain partnerships and can provide recommendations to ensure every portfolio company has the right support.',
  },
];

export default function Advantage() {
  return (
    <section className="section section-dark" id="advantage">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">The Difference</p>
          <h2 className="section-title">Our Strategic Advantage</h2>
          <p className="section-subtitle">
            We offer a unique, flexible alternative to traditional models.
          </p>
        </div>
        <div className="advantage-grid">
          {advantages.map((item, i) => (
            <AnimatedCard
              key={item.title}
              className="advantage-card"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
