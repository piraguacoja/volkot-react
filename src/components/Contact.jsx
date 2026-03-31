import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const headlineRef = useScrollReveal();
  const subRef = useScrollReveal();
  const emailRef = useScrollReveal();

  return (
    <section id="contact">
      <div className="contact-headline reveal" ref={headlineRef}>
        Let's build
        <em>something real.</em>
      </div>
      <p className="contact-sub reveal" ref={subRef}>
        New project? Technical challenge? Let's talk.<br />Response within 24 hours.
      </p>
      <a href="mailto:hello@volkotlabs.com" className="contact-email reveal" ref={emailRef}>
        hello@volkotlabs.com
      </a>
    </section>
  );
}
