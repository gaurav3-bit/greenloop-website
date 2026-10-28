// Custom GreenLoop illustrations, drawn on a 64 x 64 grid in the logo's colors:
// deep green outlines, soft green fills, and the golden oil drop as the accent.

const INK = "#0A5C2E";
const LEAF = "#5DBB2F";
const SOFT = "#E6F2DD";
const OIL = "#F4C542";
const OIL_DARK = "#D9A91E";

type Props = { className?: string };

function Svg({ className, children }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

/** A kadhai with used oil and rising steam: where every loop begins. */
export function Kadhai({ className }: Props) {
  return (
    <Svg className={className}>
      <path d="M24 8c-2 3 2 5 0 8M32 6c-2 3 2 5 0 8M40 8c-2 3 2 5 0 8" stroke={LEAF} strokeWidth="2.2" />
      <path d="M9 28h46c-2 13-11 22-23 22S11 41 9 28Z" fill={SOFT} stroke={INK} strokeWidth="2.6" />
      <path d="M12.5 31.5h39c-1.6 5-4.4 8.7-8 11h-23c-3.6-2.3-6.4-6-8-11Z" fill={OIL} />
      <path d="M9 28c-4 0-6 2-6 4.5S5 37 9 36M55 28c4 0 6 2 6 4.5S59 37 55 36" stroke={INK} strokeWidth="2.6" />
      <path d="M20 54h24" stroke={INK} strokeWidth="2.6" />
    </Svg>
  );
}

/** A sealed collection can with the oil level visible. */
export function CollectionCan({ className }: Props) {
  return (
    <Svg className={className}>
      <path d="M19 17v-5h11v5" stroke={INK} strokeWidth="2.6" />
      <rect x="34" y="8" width="9" height="7" rx="1.5" fill={INK} />
      <rect x="14" y="16" width="36" height="41" rx="6" fill={SOFT} stroke={INK} strokeWidth="2.6" />
      <rect x="19" y="33" width="26" height="19" rx="3" fill={OIL} />
      <path d="M32 37c-2.6 3.3-4 5.4-4 7.2a4 4 0 0 0 8 0c0-1.8-1.4-3.9-4-7.2Z" fill="#fff" />
      <path d="M19 26h26" stroke={INK} strokeWidth="2" opacity="0.35" />
    </Svg>
  );
}

/** A platform scale weighing a can of oil in front of the customer. */
export function Scale({ className }: Props) {
  return (
    <Svg className={className}>
      <rect x="23" y="9" width="18" height="17" rx="3.5" fill={OIL} stroke={INK} strokeWidth="2.4" />
      <rect x="29" y="6" width="6" height="4" rx="1" fill={INK} />
      <rect x="9" y="27" width="46" height="5" rx="2.5" fill={INK} />
      <path d="M14 32h36l3 23H11l3-23Z" fill={SOFT} stroke={INK} strokeWidth="2.6" />
      <circle cx="32" cy="44" r="7.5" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <path d="M32 44l4.5-4.5" stroke={OIL_DARK} strokeWidth="2.4" />
      <circle cx="32" cy="44" r="1.4" fill={INK} />
    </Svg>
  );
}

/** A tanker carrying the collected oil to the partner plant. */
export function Tanker({ className }: Props) {
  return (
    <Svg className={className}>
      <rect x="4" y="19" width="38" height="22" rx="11" fill={SOFT} stroke={INK} strokeWidth="2.6" />
      <path d="M23 24.5c-2.6 3.3-4 5.4-4 7.2a4 4 0 0 0 8 0c0-1.8-1.4-3.9-4-7.2Z" fill={OIL} stroke={OIL_DARK} strokeWidth="1.2" />
      <path d="M42 25h9l8 9v11H42V25Z" fill={INK} />
      <path d="M45.5 28.5h4.5l5 5.5h-9.5v-5.5Z" fill="#fff" />
      <path d="M3 45h57" stroke={INK} strokeWidth="2.6" />
      {[13, 31, 50].map((x) => (
        <g key={x}>
          <circle cx={x} cy="49" r="5.5" fill={INK} />
          <circle cx={x} cy="49" r="2" fill="#fff" />
        </g>
      ))}
    </Svg>
  );
}

/** A fuel pump with a leaf: oil returned as clean biodiesel. */
export function FuelPump({ className }: Props) {
  return (
    <Svg className={className}>
      <rect x="12" y="10" width="26" height="46" rx="4" fill={SOFT} stroke={INK} strokeWidth="2.6" />
      <rect x="17" y="15" width="16" height="10" rx="2" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M25 47c-6 0-8-5-7-12 6 0 10 3 10 8" fill={LEAF} />
      <path d="M25 47c0-4 1-7 3-9" stroke={INK} strokeWidth="1.6" />
      <path d="M38 22h6a5 5 0 0 1 5 5v17a3.5 3.5 0 0 0 7 0V24l-4-5" stroke={INK} strokeWidth="2.6" />
      <path d="M8 56h34" stroke={INK} strokeWidth="2.6" />
      <circle cx="49" cy="30" r="3" fill={OIL} />
    </Svg>
  );
}

/** A phone with chat bubbles: requesting a pickup on WhatsApp or by call. */
export function PhoneRequest({ className }: Props) {
  return (
    <Svg className={className}>
      <rect x="17" y="5" width="30" height="54" rx="6" fill="#fff" stroke={INK} strokeWidth="2.6" />
      <path d="M28 10h8" stroke={INK} strokeWidth="2.2" />
      <rect x="22" y="17" width="16" height="9" rx="4" fill={SOFT} stroke={LEAF} strokeWidth="1.6" />
      <rect x="26" y="30" width="16" height="9" rx="4" fill={LEAF} />
      <path d="M30.5 34.5l2 2 4-4" stroke="#fff" strokeWidth="1.8" />
      <rect x="22" y="43" width="12" height="7" rx="3.5" fill={OIL} />
      <circle cx="32" cy="54" r="1.6" fill={INK} />
    </Svg>
  );
}
