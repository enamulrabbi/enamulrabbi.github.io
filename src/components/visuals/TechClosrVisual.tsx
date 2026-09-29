export function TechClosrVisual() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="w-full max-w-lg"
      fill="none"
      aria-hidden="true"
    >
      {/* Voice AI: sound wave + call flow */}

      {/* Phone icon outline */}
      <rect x="14" y="40" width="60" height="110" rx="10" stroke="rgba(34,211,238,0.25)" strokeWidth="1.5" />
      <line x1="34" y1="48" x2="54" y2="48" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
      <circle cx="44" cy="138" r="3" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />

      {/* Incoming call arrow */}
      <path d="M82 95 L120 95" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M115 90 L122 95 L115 100" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" fill="none" />

      {/* Central AI voice waveform */}
      <g transform="translate(160, 120)">
        {Array.from({ length: 28 }).map((_, i) => {
          const heights = [8, 14, 22, 30, 18, 12, 6, 10, 20, 34, 28, 16, 8, 4, 10, 24, 32, 26, 14, 8, 6, 12, 22, 30, 24, 16, 10, 6];
          const h = heights[i] || 10;
          return (
            <rect
              key={i}
              x={i * 4}
              y={-h / 2}
              width="2"
              height={h}
              rx="1"
              fill="rgba(34,211,238,0.6)"
              style={{
                animation: `pulseSoft ${1 + (i % 3) * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.04}s`,
                transformOrigin: 'center',
              }}
            />
          );
        })}
      </g>

      {/* AI node label */}
      <circle cx="160" cy="50" r="14" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
      <text x="160" y="55" textAnchor="middle" fill="rgba(34,211,238,0.7)" fontSize="9" fontFamily="monospace">AI</text>

      {/* Flow lines to output nodes */}
      <path d="M280 120 Q320 80 340 60" stroke="rgba(129,140,248,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M280 120 Q320 120 340 120" stroke="rgba(129,140,248,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M280 120 Q320 160 340 180" stroke="rgba(129,140,248,0.25)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Output nodes: Lead, Appointment, Follow-up */}
      <g>
        <rect x="335" y="48" width="50" height="24" rx="6" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
        <text x="360" y="63" textAnchor="middle" fill="rgba(103,232,249,0.7)" fontSize="7" fontFamily="monospace">LEAD</text>
      </g>
      <g>
        <rect x="335" y="108" width="50" height="24" rx="6" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
        <text x="360" y="123" textAnchor="middle" fill="rgba(103,232,249,0.7)" fontSize="6.5" fontFamily="monospace">BOOKING</text>
      </g>
      <g>
        <rect x="335" y="168" width="50" height="24" rx="6" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
        <text x="360" y="183" textAnchor="middle" fill="rgba(103,232,249,0.7)" fontSize="6.5" fontFamily="monospace">FOLLOW</text>
      </g>

      {/* Knowledge base indicator */}
      <rect x="130" y="180" width="60" height="16" rx="4" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
      <text x="160" y="191" textAnchor="middle" fill="rgba(129,140,248,0.6)" fontSize="6" fontFamily="monospace">KB</text>
      <path d="M160 166 L160 180" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}
