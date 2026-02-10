import AnimatedCard from './AnimatedCard';
import './Pricing.css';

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Investment</p>
          <h2 className="section-title">Pricing &amp; Value</h2>
          <p className="section-subtitle">
            Our retainer is based on a transparent, blended rate of <strong>$250 per hour</strong> per expert at part-time hours. This flat-rate model simplifies budgeting and gives you predictable access to senior-level marketing talent.
          </p>
        </div>

        {/* Team Retainer Pricing */}
        <AnimatedCard className="pricing-table-wrapper">
          <h3 className="pricing-table-title">Team Retainer Pricing</h3>
          <div className="pricing-table-scroll">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Team Size</th>
                  <th>
                    <span className="th-label">Monthly Retainer &frac14;</span>
                    <span className="th-detail">8 hrs/week</span>
                  </th>
                  <th>
                    <span className="th-label">Monthly Retainer &frac12;</span>
                    <span className="th-detail">16 hrs/week</span>
                  </th>
                  <th className="highlight-col">
                    <span className="th-label">Monthly Retainer Full</span>
                    <span className="th-detail">32 hrs/week</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">3 Experts</td>
                  <td>$24,000</td>
                  <td>$48,000</td>
                  <td className="highlight-col">$96,000</td>
                </tr>
                <tr>
                  <td className="row-label">5 Experts</td>
                  <td>$40,000</td>
                  <td>$80,000</td>
                  <td className="highlight-col">$160,000</td>
                </tr>
                <tr>
                  <td className="row-label">10 Experts</td>
                  <td>$80,000</td>
                  <td>$160,000</td>
                  <td className="highlight-col">$320,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedCard>

        {/* Per Resource Pricing */}
        <AnimatedCard className="pricing-table-wrapper">
          <h3 className="pricing-table-title">Per Resource Pricing</h3>
          <div className="pricing-table-scroll">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Hourly Rate</th>
                  <th>
                    <span className="th-label">Monthly Retainer &frac14;</span>
                    <span className="th-detail">8 hrs/week</span>
                  </th>
                  <th>
                    <span className="th-label">Monthly Retainer &frac12;</span>
                    <span className="th-detail">16 hrs/week</span>
                  </th>
                  <th className="highlight-col">
                    <span className="th-label">Monthly Retainer Full</span>
                    <span className="th-detail">32 hrs/week</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">$350/hr</td>
                  <td>$11,200</td>
                  <td>$22,400</td>
                  <td className="highlight-col">$44,800</td>
                </tr>
                <tr className="featured-row">
                  <td className="row-label">$250/hr</td>
                  <td>$8,000</td>
                  <td>$16,000</td>
                  <td className="highlight-col">$32,000</td>
                </tr>
                <tr>
                  <td className="row-label">$150/hr</td>
                  <td>$4,800</td>
                  <td>$9,600</td>
                  <td className="highlight-col">$19,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
