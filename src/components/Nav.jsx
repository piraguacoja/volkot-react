export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15 L50 78 L90 15" stroke="#00e5ff" strokeWidth="8" strokeLinejoin="round" fill="none"/>
          <path d="M22 15 L50 62 L78 15" stroke="#00e5ff" strokeWidth="6" strokeLinejoin="round" fill="none"/>
          <circle cx="50" cy="62" r="5" fill="#00e5ff"/>
        </svg>
        <span className="nav-wordmark">Volkot Labs</span>
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Start a project</a>
    </nav>
  );
}
