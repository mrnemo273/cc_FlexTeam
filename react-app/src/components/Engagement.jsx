import AnimatedCard from './AnimatedCard';
import './Engagement.css';

const engagements = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Dedicated Teams',
    text: 'Build and manage teams of experts to support the creative, brand, and marketing needs of a single portfolio company.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Interim Leadership',
    text: 'Place a fractional or interim leader to bridge a talent gap or manage a critical project.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Recruiting Services',
    text: 'Assist in the search and vetting of full-time hires to ensure a seamless transition and long-term success.',
  },
];

const flexibility = [
  {
    title: 'Expert Swaps',
    text: 'To address evolving needs, we can seamlessly swap experts within your retainer at no additional cost, ensuring your team always has the right skills for the current challenge.',
  },
  {
    title: 'Temporary Additions',
    text: 'For a specific, short-term project or a critical need, you can add temporary experts on-demand. These ad-hoc engagements are billed at a separate, agreed-upon rate.',
  },
];

export default function Engagement() {
  return (
    <section className="section section-dark" id="engagement">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">How We Work</p>
          <h2 className="section-title">Flexible Engagement Models</h2>
          <p className="section-subtitle">
            Beyond portfolio-wide standardization, we offer tailored support for individual companies.
          </p>
        </div>
        <div className="engagement-grid">
          {engagements.map((item, i) => (
            <AnimatedCard
              key={item.title}
              className="engagement-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="engagement-icon-wrap">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AnimatedCard>
          ))}
        </div>
        <div className="flexibility-section">
          <h3>Expert Flexibility &amp; Scaling</h3>
          <p className="flexibility-intro">
            The flat-rate retainer covers a fixed team size, but our model is designed for maximum agility.
          </p>
          <div className="flexibility-grid">
            {flexibility.map((item) => (
              <AnimatedCard key={item.title} className="flexibility-card">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
