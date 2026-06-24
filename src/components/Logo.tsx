type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * The GreenLoop mark: an unbroken loop built from two arcs in the brand greens,
 * meeting an arrowhead that reads as both "cycle" and "forward motion":
 * the visual shorthand for waste re-entering the energy system.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-ink" : "text-white";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M20 4C11.163 4 4 11.163 4 20"
          stroke="#5DBB2F"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M4 20C4 28.837 11.163 36 20 36C28.837 36 36 28.837 36 20C36 14.5 33.2 9.6 29 6.7"
          stroke="#0E7A3E"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path d="M22.5 2.5L29.2 6.6L23.6 11.3" stroke="#0E7A3E" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="4.5" fill="#F4C542" />
      </svg>
      <span className={`font-display font-bold tracking-tight text-[1.15rem] leading-none ${textColor}`}>
        GreenLoop
        <span className="block text-[0.6rem] font-mono font-medium tracking-[0.22em] uppercase opacity-60 mt-0.5">
          Bio Resources
        </span>
      </span>
    </span>
  );
}
