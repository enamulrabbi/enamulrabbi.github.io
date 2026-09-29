import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dpr = Math.min(window.devicePixelRatio, 1.5);
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];
    let mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let isVisible = true;

    const CONNECTION_DIST_SQ = 130 * 130 * dpr * dpr;
    const MOUSE_DIST_SQ = 180 * 180 * dpr * dpr;
    const MOUSE_REPEL_SQ = 100 * 100 * dpr * dpr;

    const initParticles = () => {
      const count = Math.min(50, Math.floor((w * h) / (dpr * dpr * 22000)));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25 * dpr,
          vy: (Math.random() - 0.5) * 0.25 * dpr,
          r: (Math.random() * 1.2 + 0.6) * dpr,
        });
      }
    };

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * dpr;
      h = canvas.height = canvas.offsetHeight * dpr;
      initParticles();
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * dpr;
      mouse.y = (e.clientY - rect.top) * dpr;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      if (!isVisible) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repel
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdSq = mdx * mdx + mdy * mdy;
        if (mdSq < MOUSE_REPEL_SQ && mdSq > 0) {
          const dist = Math.sqrt(mdSq);
          const force = (1 - dist / (100 * dpr)) * 2;
          p.x += (mdx / dist) * force;
          p.y += (mdy / dist) * force;
        }

        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(103, 232, 249, 0.45)';
        ctx.fill();
      }

      // Draw connections (squared distance, no sqrt)
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const dx = pi.x - particles[j].x;
          const dy = pi.y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < CONNECTION_DIST_SQ) {
            const opacity = (1 - distSq / CONNECTION_DIST_SQ) * 0.2;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.lineWidth = 0.5 * dpr;
            ctx.stroke();
          }
        }

        // Mouse connection
        const mdx = pi.x - mouse.x;
        const mdy = pi.y - mouse.y;
        const mdSq = mdx * mdx + mdy * mdy;
        if (mdSq < MOUSE_DIST_SQ) {
          const opacity = (1 - mdSq / MOUSE_DIST_SQ) * 0.35;
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
          ctx.lineWidth = 0.6 * dpr;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    // Pause animation when hero scrolls off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouse, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
