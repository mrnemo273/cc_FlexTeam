import AnimatedCard from './AnimatedCard';
import './Challenge.css';

const challenges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" />
      </svg>
    ),
    title: 'Siloed Spending',
    text: "Different teams running different playbooks, tech stacks, and vendors. The result: duplicated costs, wasted budget, and no shared intelligence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v10m6 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'No Visibility',
    text: 'Without a consolidated view of marketing performance, strategic decisions are based on guesswork, not data.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Talent Gaps',
    text: "Most companies can't justify full-time senior marketing leadership for every need. So they settle for reactive strategies that never compound.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'No Shared Playbook',
    text: "Without shared best practices across the organization, every team reinvents the wheel—and quality stays inconsistent.",
  },
];

export default function Challenge() {
  return (
    <section className="section section-dark" id="challenge">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">The Challenge</p>
          <h2 className="section-title">The Problem No One's Solving</h2>
          <p className="section-subtitle">
            Your marketing is running in silos—duplicating work, missing opportunities, and flying blind on results.
          </p>
        </div>
        <div className="challenge-grid">
          {challenges.map((item, i) => (
            <AnimatedCard
              key={item.title}
              className="challenge-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="challenge-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
