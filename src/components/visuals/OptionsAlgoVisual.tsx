export function OptionsAlgoVisual() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="w-full max-w-lg"
      fill="none"
      aria-hidden="true"
    >
      {/* Trading: candlestick chart + AI signal indicator */}

      {/* Chart background area */}
      <rect x="14" y="20" width="260" height="180" rx="8" fill="rgba(15,19,27,0.4)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {/* Horizontal grid lines */}
      <line x1="14" y1="60" x2="274" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      <line x1="14" y1="100" x2="274" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      <line x1="14" y1="140" x2="274" y2="140" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      <line x1="14" y1="180" x2="274" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

      {/* Candlesticks */}
      {/* Green candle */}
      <line x1="35" y1="65" x2="35" y2="120" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
      <rect x="30" y="80" width="10" height="30" rx="1" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.6)" strokeWidth="0.5" />

      {/* Red candle */}
      <line x1="55" y1="75" x2="55" y2="130" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <rect x="50" y="90" width="10" height="28" rx="1" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.5)" strokeWidth="0.5" />

      {/* Green candle */}
      <line x1="75" y1="60" x2="75" y2="105" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
      <rect x="70" y="72" width="10" height="25" rx="1" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.6)" strokeWidth="0.5" />

      {/* Green candle tall */}
      <line x1="95" y1="50" x2="95" y2="95" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
      <rect x="90" y="58" width="10" height="30" rx="1" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.6)" strokeWidth="0.5" />

      {/* Red candle */}
      <line x1="115" y1="55" x2="115" y2="110" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <rect x="110" y="68" width="10" height="32" rx="1" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.5)" strokeWidth="0.5" />

      {/* Green candle */}
      <line x1="135" y1="65" x2="135" y2="115" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
      <rect x="130" y="78" width="10" height="28" rx="1" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.6)" strokeWidth="0.5" />

      {/* Red candle short */}
      <line x1="155" y1="70" x2="155" y2="105" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <rect x="150" y="82" width="10" height="18" rx="1" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.5)" strokeWidth="0.5" />

      {/* Green candle (AI signal point) */}
      <line x1="175" y1="55" x2="175" y2="100" stroke="rgba(52,211,153,0.6)" strokeWidth="1" />
      <rect x="170" y="62" width="10" height="32" rx="1" fill="rgba(52,211,153,0.4)" stroke="rgba(52,211,153,0.7)" strokeWidth="0.5" />

      {/* Red candle */}
      <line x1="195" y1="60" x2="195" y2="115" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <rect x="190" y="74" width="10" height="30" rx="1" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.5)" strokeWidth="0.5" />

      {/* Green candle */}
      <line x1="215" y1="55" x2="215" y2="95" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
      <rect x="210" y="65" width="10" height="25" rx="1" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.6)" strokeWidth="0.5" />

      {/* Green candle tall */}
      <line x1="235" y1="42" x2="235" y2="85" stroke="rgba(52,211,153,0.6)" strokeWidth="1" />
      <rect x="230" y="50" width="10" height="30" rx="1" fill="rgba(52,211,153,0.35)" stroke="rgba(52,211,153,0.7)" strokeWidth="0.5" />

      {/* Red candle */}
      <line x1="255" y1="48" x2="255" y2="90" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <rect x="250" y="58" width="10" height="25" rx="1" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.5)" strokeWidth="0.5" />

      {/* AI Signal indicator (arrow pointing to a candle) */}
      <g transform="translate(175, 30)">
        <path d="M0 0 L0 18" stroke="rgba(34,211,238,0.6)" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M-4 14 L0 20 L4 14" stroke="rgba(34,211,238,0.6)" strokeWidth="1.5" fill="none" />
        <rect x="-18" y="-14" width="36" height="14" rx="3" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
        <text x="0" y="-4" textAnchor="middle" fill="rgba(34,211,238,0.7)" fontSize="6.5" fontFamily="monospace">AI SIGNAL</text>
      </g>

      {/* Trend line */}
      <path d="M35 95 Q95 85 135 92 Q175 80 235 65" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 3" />

      {/* Right panel: AI analysis */}
      <rect x="290" y="20" width="96" height="180" rx="8" fill="rgba(15,19,27,0.4)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      <text x="338" y="38" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">AI ANALYSIS</text>

      {/* Signal bars */}
      <rect x="302" y="50" width="72" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="302" y="50" width="52" height="6" rx="3" fill="rgba(52,211,153,0.5)" />

      <rect x="302" y="62" width="72" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="302" y="62" width="38" height="6" rx="3" fill="rgba(239,68,68,0.4)" />

      <rect x="302" y="74" width="72" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="302" y="74" width="60" height="6" rx="3" fill="rgba(52,211,153,0.4)" />

      {/* Labels */}
      <text x="302" y="96" fill="rgba(52,211,153,0.5)" fontSize="6" fontFamily="monospace">CALL</text>
      <text x="302" y="108" fill="rgba(239,68,68,0.4)" fontSize="6" fontFamily="monospace">PUT</text>
      <text x="302" y="120" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">VOL</text>

      {/* Confidence meter */}
      <text x="302" y="146" fill="rgba(34,211,238,0.4)" fontSize="6" fontFamily="monospace">CONFIDENCE</text>
      <rect x="302" y="152" width="72" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="302" y="152" width="48" height="4" rx="2" fill="rgba(34,211,238,0.5)" className="animate-pulse-soft" />

      {/* Status */}
      <rect x="302" y="170" width="72" height="14" rx="4" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.2)" strokeWidth="1" />
      <text x="338" y="180" textAnchor="middle" fill="rgba(52,211,153,0.5)" fontSize="6" fontFamily="monospace">ACTIVE</text>
    </svg>
  );
}
