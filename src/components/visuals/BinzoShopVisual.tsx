export function BinzoShopVisual() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="w-full max-w-lg"
      fill="none"
      aria-hidden="true"
    >
      {/* E-commerce: product grid + shopping cart + checkout */}

      {/* Product grid (left side) */}
      <g>
        {/* Product card 1 */}
        <rect x="14" y="20" width="68" height="80" rx="6" fill="rgba(15,19,27,0.6)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="20" y="26" width="56" height="36" rx="4" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" />
        {/* Gift card icon */}
        <path d="M32 38 L32 54 L40 50 L48 54 L48 38 Z" fill="rgba(34,211,238,0.25)" />
        <line x1="40" y1="38" x2="40" y2="54" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
        <rect x="20" y="68" width="40" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="20" y="76" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="58" y="86" width="16" height="8" rx="2" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5" />

        {/* Product card 2 */}
        <rect x="90" y="20" width="68" height="80" rx="6" fill="rgba(15,19,27,0.6)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="96" y="26" width="56" height="36" rx="4" fill="rgba(129,140,248,0.08)" stroke="rgba(129,140,248,0.15)" strokeWidth="0.5" />
        {/* Game controller icon */}
        <rect x="108" y="36" width="32" height="16" rx="8" fill="rgba(129,140,248,0.25)" />
        <circle cx="116" cy="44" r="2" fill="rgba(129,140,248,0.5)" />
        <circle cx="132" cy="44" r="2" fill="rgba(129,140,248,0.5)" />
        <rect x="96" y="68" width="40" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="96" y="76" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="134" y="86" width="16" height="8" rx="2" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5" />

        {/* Product card 3 */}
        <rect x="14" y="110" width="68" height="80" rx="6" fill="rgba(15,19,27,0.6)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="20" y="116" width="56" height="36" rx="4" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.15)" strokeWidth="0.5" />
        {/* PC game icon */}
        <rect x="30" y="124" width="36" height="22" rx="3" fill="rgba(52,211,153,0.2)" />
        <rect x="34" y="128" width="28" height="14" rx="2" fill="rgba(52,211,153,0.15)" />
        <rect x="20" y="158" width="40" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="20" y="166" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="58" y="176" width="16" height="8" rx="2" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5" />

        {/* Product card 4 */}
        <rect x="90" y="110" width="68" height="80" rx="6" fill="rgba(15,19,27,0.6)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="96" y="116" width="56" height="36" rx="4" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" />
        {/* Top-up icon */}
        <circle cx="124" cy="134" r="10" fill="rgba(34,211,238,0.2)" />
        <text x="124" y="138" textAnchor="middle" fill="rgba(34,211,238,0.5)" fontSize="8" fontFamily="monospace">+</text>
        <rect x="96" y="158" width="40" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="96" y="166" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="134" y="176" width="16" height="8" rx="2" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5" />
      </g>

      {/* Shopping cart (right side) */}
      <g transform="translate(180, 20)">
        {/* Cart header */}
        <rect x="0" y="0" width="206" height="22" rx="6" fill="rgba(15,19,27,0.6)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M8 6 L12 6 L15 16 L26 16" stroke="rgba(34,211,238,0.4)" strokeWidth="1.2" fill="none" />
        <circle cx="17" cy="19" r="2" fill="rgba(34,211,238,0.3)" />
        <circle cx="24" cy="19" r="2" fill="rgba(34,211,238,0.3)" />
        <text x="100" y="14" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">CART · 3 ITEMS</text>

        {/* Cart items */}
        <rect x="0" y="28" width="206" height="26" rx="4" fill="rgba(15,19,27,0.4)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <rect x="8" y="33" width="16" height="16" rx="3" fill="rgba(34,211,238,0.1)" />
        <rect x="30" y="35" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="41" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="170" y="36" width="28" height="10" rx="3" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.25)" strokeWidth="0.5" />

        <rect x="0" y="58" width="206" height="26" rx="4" fill="rgba(15,19,27,0.4)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <rect x="8" y="63" width="16" height="16" rx="3" fill="rgba(129,140,248,0.1)" />
        <rect x="30" y="65" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="71" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="170" y="66" width="28" height="10" rx="3" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.25)" strokeWidth="0.5" />

        <rect x="0" y="88" width="206" height="26" rx="4" fill="rgba(15,19,27,0.4)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <rect x="8" y="93" width="16" height="16" rx="3" fill="rgba(52,211,153,0.1)" />
        <rect x="30" y="95" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="101" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="170" y="96" width="28" height="10" rx="3" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.25)" strokeWidth="0.5" />

        {/* Total */}
        <rect x="0" y="124" width="206" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="10" y="139" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">TOTAL</text>
        <rect x="140" y="131" width="56" height="10" rx="3" fill="rgba(34,211,238,0.15)" />

        {/* Checkout button */}
        <rect x="0" y="156" width="206" height="28" rx="8" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.35)" strokeWidth="1.5" />
        <text x="103" y="173" textAnchor="middle" fill="rgba(34,211,238,0.7)" fontSize="8" fontFamily="monospace" fontWeight="600">CHECKOUT</text>
        {/* Arrow on button */}
        <path d="M168 168 L176 172 L168 176" stroke="rgba(34,211,238,0.5)" strokeWidth="1.2" fill="none" />
      </g>

      {/* Category labels */}
      <text x="48" y="208" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="monospace">GIFT CARDS</text>
      <text x="124" y="208" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="monospace">GAME KEYS</text>
      <text x="48" y="222" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="monospace">TOP-UPS</text>
      <text x="124" y="222" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="monospace">DIGITAL</text>
    </svg>
  );
}
