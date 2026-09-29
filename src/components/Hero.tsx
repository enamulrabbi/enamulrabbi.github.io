import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HeroCanvas } from '@/components/HeroCanvas';
import { contact } from '@/data/contact';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)', animation: 'pulseSoft 6s ease-in-out infinite' }}
        />
        <div
          className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', animation: 'pulseSoft 8s ease-in-out infinite', animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-4xl">
          <div className="reveal is-visible mb-6 flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-mint-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)] animate-blink" />
            <span className="font-mono text-xs tracking-widest text-ink-400">
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>

          <p
            className="reveal is-visible reveal-delay-1 mb-4 font-mono text-sm tracking-widest text-accent-400/80"
          >
            ENAMUL ISLAM
          </p>

          <h1 className="reveal is-visible reveal-delay-1 text-fluid-hero font-bold leading-[1.05] tracking-display-tight text-ink-100">
            I build <span className="text-gradient-cyan">AI-powered products</span>
            <br />
            and real-world software.
          </h1>

          <p className="reveal is-visible reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-ink-300 md:text-lg">
            From AI voice platforms and SaaS products to mobile applications, automation systems
            and e-commerce platforms — I turn ideas and business requirements into working software.
          </p>

          <p className="reveal is-visible reveal-delay-2 mt-3 max-w-2xl text-sm leading-relaxed text-ink-400 md:text-base">
            I work across AI, SaaS, web, mobile, automation and e-commerce — turning ideas and
            requirements into production-ready software.
          </p>

          <div className="reveal is-visible reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={onExplore} className="btn-primary group">
              Explore My Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>

          <div className="reveal is-visible reveal-delay-4 mt-16 flex items-center gap-2 text-ink-500">
            <span className="font-mono text-xs tracking-widest">SCROLL TO EXPLORE</span>
            <ArrowDown className="h-3 w-3 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 right-0 hidden pr-8 pb-8 lg:block">
        <div className="text-right">
          <p className="font-mono text-xs tracking-widest text-ink-500">SOFTWARE ENGINEER</p>
          <p className="font-mono text-xs tracking-widest text-ink-500">& AI PRODUCT BUILDER</p>
        </div>
      </div>
    </section>
  );
}
