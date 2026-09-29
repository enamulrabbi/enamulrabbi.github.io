export function CompleteGreetVisual() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="w-full max-w-lg"
      fill="none"
      aria-hidden="true"
    >
      {/* Interactive video + live chat + analytics */}

      {/* Video player frame */}
      <rect x="14" y="30" width="180" height="120" rx="10" fill="rgba(15,19,27,0.6)" stroke="rgba(34,211,238,0.25)" strokeWidth="1.5" />

      {/* Play button */}
      <circle cx="104" cy="90" r="18" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
      <path d="M98 82 L112 90 L98 98 Z" fill="rgba(34,211,238,0.6)" />

      {/* Video progress bar */}
      <rect x="28" y="135" width="152" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="28" y="135" width="60" height="3" rx="1.5" fill="rgba(34,211,238,0.5)" />
      <circle cx="88" cy="136.5" r="3" fill="rgba(34,211,238,0.8)" />

      {/* Interactive hotspot dots on video */}
      <circle cx="50" cy="55" r="4" fill="rgba(129,140,248,0.3)" stroke="rgba(129,140,248,0.5)" strokeWidth="1" className="animate-pulse-soft" />
      <circle cx="160" cy="65" r="4" fill="rgba(129,140,248,0.3)" stroke="rgba(129,140,248,0.5)" strokeWidth="1" className="animate-pulse-soft" />

      {/* Chat panel */}
      <rect x="210" y="30" width="176" height="120" rx="10" fill="rgba(15,19,27,0.6)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Chat header */}
      <rect x="210" y="30" width="176" height="20" rx="10" fill="rgba(255,255,255,0.03)" />
      <circle cx="224" cy="40" r="4" fill="rgba(52,211,153,0.6)" />
      <text x="234" y="43" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">LIVE CHAT</text>

      {/* Chat bubbles */}
      <rect x="218" y="58" width="80" height="16" rx="8" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" />
      <rect x="290" y="80" width="88" height="16" rx="8" fill="rgba(129,140,248,0.08)" stroke="rgba(129,140,248,0.15)" strokeWidth="0.5" />
      <rect x="218" y="102" width="72" height="16" rx="8" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" />
      <rect x="218" y="126" width="100" height="14" rx="7" fill="rgba(255,255,255,0.04)" />

      {/* Connection between video and chat */}
      <path d="M194 90 L210 90" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="2 2" />

      {/* Analytics bar chart at bottom */}
      <g transform="translate(14, 170)">
        <text x="0" y="0" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">ANALYTICS</text>
        <rect x="0" y="8" width="20" height="40" rx="2" fill="rgba(34,211,238,0.15)" />
        <rect x="26" y="20" width="20" height="28" rx="2" fill="rgba(34,211,238,0.2)" />
        <rect x="52" y="12" width="20" height="36" rx="2" fill="rgba(34,211,238,0.25)" />
        <rect x="78" y="26" width="20" height="22" rx="2" fill="rgba(34,211,238,0.18)" />
        <rect x="104" y="16" width="20" height="32" rx="2" fill="rgba(34,211,238,0.22)" />
        <rect x="130" y="22" width="20" height="26" rx="2" fill="rgba(34,211,238,0.16)" />
      </g>

      {/* Booking indicator */}
      <g transform="translate(210, 170)">
        <rect x="0" y="0" width="60" height="24" rx="6" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.2)" strokeWidth="1" />
        <text x="30" y="15" textAnchor="middle" fill="rgba(52,211,153,0.6)" fontSize="7" fontFamily="monospace">BOOKED</text>
      </g>

      {/* E-commerce icon */}
      <g transform="translate(290, 170)">
        <rect x="0" y="0" width="96" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M8 8 L12 8 L14 18 L24 18" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
        <circle cx="15" cy="21" r="2" fill="rgba(255,255,255,0.2)" />
        <circle cx="22" cy="21" r="2" fill="rgba(255,255,255,0.2)" />
        <text x="55" y="15" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="monospace">SHOP</text>
      </g>
    </svg>
  );
}
