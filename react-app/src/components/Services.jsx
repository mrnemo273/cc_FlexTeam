import AnimatedCard from './AnimatedCard';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Tech Stack Consolidation',
    text: 'Audit and recommend a unified marketing technology stack to reduce redundant tools, lower costs and improve data flow.',
  },
  {
    num: '02',
    title: 'Reporting & Analytics',
    text: 'Implement standardized reporting dashboards, KPIs, and a consistent cadence for performance analysis across all portfolio companies.',
  },
  {
    num: '03',
    title: 'Marketing Playbook Creation',
    text: 'Develop custom, repeatable playbooks that can be deployed across relevant companies, from go-to-market strategies to lead nurturing campaigns.',
  },
  {
    num: '04',
    title: 'Data Strategy & Governance',
    text: 'Centralize data from various sources to enable richer business intelligence and better decision-making.',
  },
  {
    num: '05',
    title: 'Vendor Rationalization',
    text: 'Review and optimize marketing vendor relationships to ensure cost efficiency and alignment with strategic goals.',
  },
  {
    num: '06',
    title: 'Audience & Competitor Intelligence',
    text: "Conduct unified market research and competitive analysis to identify new opportunities and threats across your portfolio's sectors.",
  },
  {
    num: '07',
    title: 'Training & Enablement',
    text: 'Provide training for in-house teams on new tools and processes to ensure successful adoption.',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">Driving Portfolio-Wide Value</h2>
          <p className="section-subtitle">
            We standardize and optimize marketing across your portfolio to unlock scalable growth.
          </p>
        </div>
        <div className="services-grid">
          {services.map((item, i) => (
            <AnimatedCard
              key={item.num}
              className="service-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="service-number">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
