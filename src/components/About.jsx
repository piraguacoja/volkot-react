import { useScrollReveal } from '../hooks/useScrollReveal';

const badges = [
  { label: 'Azure',          style: { top: '20px',  left: '60px',  animation: 'float1 6s ease-in-out infinite' } },
  { label: 'Kubernetes',     style: { top: '20px',  right: '20px', animation: 'float2 5s ease-in-out infinite 1s' } },
  { label: 'Terraform',      style: { top: '120px', left: '10px',  animation: 'float1 7s ease-in-out infinite 0.5s' } },
  { label: 'React',          style: { top: '140px', right: '60px', animation: 'float2 6s ease-in-out infinite 2s' } },
  { label: 'GitHub Actions', style: { top: '240px', left: '80px',  animation: 'float1 5s ease-in-out infinite 1.5s' } },
  { label: 'Python',         style: { top: '260px', right: '10px', animation: 'float2 7s ease-in-out infinite 0.8s' } },
  { label: 'FastAPI',        style: { top: '360px', left: '20px',  animation: 'float1 6s ease-in-out infinite 2s' } },
  { label: 'Node.js',        style: { top: '360px', right: '70px', animation: 'float2 5s ease-in-out infinite 1.2s' } },
];

export default function About() {
  const headerRef = useScrollReveal();
  const p1Ref = useScrollReveal();
  const p2Ref = useScrollReveal();

  return (
    <section id="about">
      <div className="about-content">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-num">03</span>
          <h2 className="section-title">About</h2>
        </div>
        <p className="about-body reveal" ref={p1Ref}>
          Volkot Labs is the engineering practice of <strong>Juan Calderon</strong>. 8+ years of crafting bulletproof cloud infrastructure that never sleeps.
        </p>
        <p className="about-body reveal" ref={p2Ref}>
          Based in <strong>Barcelona</strong>. Past work spans pharma, logistics, aviation, agriculture, insurance, and public sector. If it runs in a cloud, we've probably broken it, fixed it, and automated it.
        </p>
      </div>
      <div className="about-visual">
        {badges.map(b => (
          <div key={b.label} className="stack-badge" style={b.style}>{b.label}</div>
        ))}
      </div>
    </section>
  );
}
