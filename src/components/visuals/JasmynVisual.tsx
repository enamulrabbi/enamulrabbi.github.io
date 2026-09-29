export function JasmynVisual() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="w-full max-w-lg"
      fill="none"
      aria-hidden="true"
    >
      {/* AI Voice Calling: phone + waveform + agent nodes */}

      {/* Large phone outline (center-left) */}
      <rect x="30" y="50" width="70" height="130" rx="12" fill="rgba(15,19,27,0.6)" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5" />
      <line x1="55" y1="60" x2="75" y2="60" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
      <circle cx="65" cy="168" r="4" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />

      {/* Call indicator on phone screen */}
      <circle cx="65" cy="85" r="10" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
      <path d="M60 80 Q65 76 70 80 Q70 85 65 90 Q60 85 60 80" fill="rgba(34,211,238,0.4)" />

      {/* Mini waveform on phone screen */}
      <g transform="translate(40, 110)">
        {Array.from({ length: 12 }).map((_, i) => {
          const heights = [4, 8, 12, 6, 10, 14, 8, 4, 10, 12, 6, 4];
          return (
            <rect
              key={i}
              x={i * 4}
              y={-heights[i] / 2}
              width="2"
              height={heights[i]}
              rx="1"
              fill="rgba(34,211,238,0.4)"
              style={{
                animation: `pulseSoft ${0.8 + (i % 2) * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.06}s`,
              }}
            />
          );
        })}
      </g>

      {/* "Calling..." text */}
      <text x="65" y="140" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">CALLING</text>

      {/* Connection lines from phone to agent nodes */}
      <path d="M100 115 Q140 80 170 60" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M100 115 Q140 115 170 115" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M100 115 Q140 150 170 170" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="3 3" />

      {/* AI Agent nodes */}
      <g>
        <circle cx="180" cy="60" r="16" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.35)" strokeWidth="1.5" className="animate-pulse-soft" />
        <text x="180" y="64" textAnchor="middle" fill="rgba(34,211,238,0.6)" fontSize="7" fontFamily="monospace">A1</text>
      </g>
      <g>
        <circle cx="180" cy="115" r="16" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.35)" strokeWidth="1.5" className="animate-pulse-soft" />
        <text x="180" y="119" textAnchor="middle" fill="rgba(34,211,238,0.6)" fontSize="7" fontFamily="monospace">A2</text>
      </g>
      <g>
        <circle cx="180" cy="170" r="16" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.35)" strokeWidth="1.5" className="animate-pulse-soft" />
        <text x="180" y="174" textAnchor="middle" fill="rgba(34,211,238,0.6)" fontSize="7" fontFamily="monospace">A3</text>
      </g>

      {/* Large waveform output (right side) */}
      <g transform="translate(220, 115)">
        {Array.from({ length: 24 }).map((_, i) => {
          const heights = [6, 14, 24, 36, 28, 16, 8, 12, 26, 40, 32, 18, 10, 6, 12, 28, 38, 30, 18, 10, 8, 16, 28, 22];
          const h = heights[i] || 12;
          return (
            <rect
              key={i}
              x={i * 5}
              y={-h / 2}
              width="3"
              height={h}
              rx="1.5"
              fill="rgba(34,211,238,0.5)"
              style={{
                animation: `pulseSoft ${1.2 + (i % 3) * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          );
        })}
      </g>

      {/* Automation label */}
      <rect x="230" y="180" width="80" height="16" rx="4" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
      <text x="270" y="191" textAnchor="middle" fill="rgba(129,140,248,0.5)" fontSize="6.5" fontFamily="monospace">AUTOMATED</text>
    </svg>
  );
}
