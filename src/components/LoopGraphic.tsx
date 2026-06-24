import { Droplet, Truck, Factory, Zap } from "lucide-react";

const nodes = [
  { label: "Used Oil", sub: "Generated", icon: Droplet, top: "6%", left: "50%", color: "#5DBB2F" },
  { label: "Collected", sub: "& Sealed", icon: Truck, top: "50%", left: "94%", color: "#0E7A3E" },
  { label: "Processed", sub: "by Partners", icon: Factory, top: "94%", left: "50%", color: "#0E7A3E" },
  { label: "Renewable", sub: "Energy", icon: Zap, top: "50%", left: "6%", color: "#F4C542" },
];

/**
 * The page's signature element: an unbroken loop tracing oil from
 * kitchen to energy and back to "tomorrow." The dashed ring animates
 * continuously to read as a living cycle rather than a static diagram.
 */
export default function LoopGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" role="img" aria-label="Diagram showing the circular journey of used cooking oil from collection to renewable energy">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E8DD" strokeWidth="1.4" />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#0E7A3E"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="loop-flow"
          opacity="0.85"
        />
        <circle cx="50" cy="50" r="3" fill="#F4C542" opacity="0.9" />
      </svg>

      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 drift"
            style={{ top: node.top, left: node.left, animationDelay: `${i * 0.4}s` }}
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-[0_8px_24px_-8px_rgba(14,122,62,0.25)] sm:h-16 sm:w-16"
              style={{ borderColor: node.color }}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: node.color }} strokeWidth={1.75} />
            </span>
            <span className="text-center font-mono text-[0.6rem] font-medium uppercase tracking-[0.12em] text-ink-soft whitespace-nowrap">
              {node.label}
              <br />
              {node.sub}
            </span>
          </div>
        );
      })}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-primary text-center text-white shadow-[0_14px_40px_-12px_rgba(14,122,62,0.55)] sm:h-28 sm:w-28">
          <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] leading-tight">
            The
            <br />
            Loop
          </span>
        </div>
      </div>
    </div>
  );
}
