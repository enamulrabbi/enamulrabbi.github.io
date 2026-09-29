interface AmbientGlowProps {
  variant?: 'top-left' | 'center' | 'bottom-right' | 'dual';
  className?: string;
}

export function AmbientGlow({ variant = 'top-left', className = '' }: AmbientGlowProps) {
  if (variant === 'dual') {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div
          className="absolute -left-20 top-1/4 h-72 w-72 rounded-full opacity-30 animate-pulse-soft"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full opacity-25 animate-pulse-soft"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', animationDelay: '2s' }}
        />
      </div>
    );
  }

  const positions: Record<string, string> = {
    'top-left': 'left-0 top-0',
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'bottom-right': 'right-0 bottom-0',
  };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className={`absolute h-72 w-72 rounded-full opacity-25 animate-pulse-soft ${positions[variant]}`}
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)' }}
      />
    </div>
  );
}
