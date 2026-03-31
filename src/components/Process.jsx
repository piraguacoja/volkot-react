import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'Discover', desc: 'Deep dive into your current infrastructure, pain points, and growth trajectory. No assumptions.' },
  { num: '02', title: 'Architect', desc: 'Design a solution that\'s built to last. Documented, peer-reviewed, and aligned to your team\'s capabilities.' },
  { num: '03', title: 'Build', desc: 'Everything as code. Terraform modules, pipeline configs, and runbooks — version-controlled from day one.' },
  { num: '04', title: 'Handoff', desc: 'Your team takes full ownership. We train, document, and stay available for questions post-delivery.' },
];

export default function Process() {
  const headerRef = useScrollReveal();

  return (
    <section id="process">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">02</span>
        <h2 className="section-title">How We Work</h2>
        <div className="section-line"></div>
      </div>
      <div className="process-list">
        {steps.map(step => (
          <div key={step.num} className="process-step reveal">
            <div className="step-dot"><span className="step-num">{step.num}</span></div>
            <div className="step-title">{step.title}</div>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
