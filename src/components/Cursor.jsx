import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top = my + 'px';
      }
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      rafId = requestAnimationFrame(animRing);
    };

    document.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animRing);

    const interactables = document.querySelectorAll('a, button, .service-card, .process-step');
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(2)';
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)';
        ringRef.current.style.borderColor = 'rgba(0,229,255,0.8)';
      }
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        ringRef.current.style.borderColor = 'rgba(0,229,255,0.4)';
      }
    };

    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
