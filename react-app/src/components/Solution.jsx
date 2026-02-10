import './Solution.css';

const solutions = [
  {
    num: 1,
    title: 'Dedicated Senior Talent',
    text: 'We give you a dedicated team of senior leaders and experts—structured around your priorities, not rigid headcounts.',
  },
  {
    num: 2,
    title: 'One Retainer, Full Access',
    text: 'A single flat-rate retainer gives you on-demand access to fractional CMOs, strategists, and specialists. They embed with your team, bring unified strategy and consistent execution, and deliver measurable growth—without the overhead of agencies or full-time hires.',
  },
  {
    num: 3,
    title: 'Built to Flex',
    text: 'Every engagement flexes around your priorities. As needs shift, your team composition and dedication levels shift with them.',
  },
  {
    num: 4,
    title: 'Predictable Investment',
    text: "One rate. No surprise invoices. Know exactly what you're investing before the work begins.",
  },
  {
    num: 5,
    title: 'Expertise When You Need It',
    text: 'Scale up, scale down, or pivot specialists as your priorities evolve.',
  },
  {
    num: 6,
    title: 'Partners, Not Vendors',
    text: 'Your team knows your business inside out. They\'re embedded, invested, and accountable for results.',
  },
];

export default function Solution() {
  return (
    <section className="section solution-section" id="solution">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Our Solution</p>
          <h2 className="section-title">One Team. Total Flexibility. Real Results.</h2>
        </div>
        <div className="solution-stack">
          {solutions.map((item) => (
            <div key={item.num} className="solution-card" data-card={item.num}>
              <span className="solution-card-number">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
