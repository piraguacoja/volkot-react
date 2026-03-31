export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-tag">Barcelona-based · Global reach</div>

      <h1 className="hero-headline">
        <span className="line-1 glitch" data-text="ENGINEERING">Engineering</span>
        <span className="line-2 glitch" data-text="THE CLOUD">The Cloud</span>
      </h1>

      <p className="hero-sub">
        We architect, automate, and scale cloud infrastructure for companies that move fast.<span className="blink">_</span>
      </p>

      <div className="hero-cta-group">
        <a href="#contact" className="btn-primary">Start a project</a>
        <a href="#services" className="btn-ghost">Explore services <span>→</span></a>
      </div>

      <svg className="hero-v" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 50 L250 440 L480 50" stroke="#00e5ff" strokeWidth="40" strokeLinejoin="round" fill="none"/>
        <path d="M80 50 L250 370 L420 50" stroke="#00e5ff" strokeWidth="30" strokeLinejoin="round" fill="none"/>
      </svg>

      <div className="hero-stats">
        <div className="stat-line">
          <div className="stat-num">8+</div>
          <div className="stat-label">Years in cloud</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-line">
          <div className="stat-num">3</div>
          <div className="stat-label">Cloud platforms</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-line">
          <div className="stat-num">100%</div>
          <div className="stat-label">IaC-driven</div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
        Scroll
      </div>
    </section>
  );
}
