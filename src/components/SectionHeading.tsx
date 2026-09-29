import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  index?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ index, title, subtitle, align = 'left' }: SectionHeadingProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${align === 'center' ? 'text-center' : ''}`}
    >
      {index && (
        <div className={`mb-3 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="font-mono text-xs tracking-widest text-accent-400/70">{index}</span>
          <span className="h-px w-8 bg-accent-400/30" />
        </div>
      )}
      <h2 className="text-fluid-h2 font-semibold leading-tight text-ink-100">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base text-ink-300 md:text-lg ${align === 'center' ? 'mx-auto max-w-xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
}

export function Reveal({ children, delay, className = '' }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
