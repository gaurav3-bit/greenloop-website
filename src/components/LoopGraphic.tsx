"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import logoMark from "@/assets/logo-mark.png";
import { Kadhai, CollectionCan, Tanker, FuelPump } from "./Illustrations";

// Stations of the oil's journey, placed clockwise on a 400 x 400 canvas.
const stations = [
  { x: 92, y: 92, label: "Your kitchen", Art: Kadhai },
  { x: 312, y: 78, label: "Sealed cans", Art: CollectionCan },
  { x: 318, y: 296, label: "Partner plant", Art: Tanker },
  { x: 86, y: 306, label: "Clean biodiesel", Art: FuelPump },
];

type Pt = { x: number; y: number };

// Smooth closed curve through the stations (Catmull-Rom converted to cubic Bezier).
function segments(points: Pt[]) {
  const n = points.length;
  return points.map((p1, i) => {
    const p0 = points[(i - 1 + n) % n];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    return { p1, c1, c2, p2 };
  });
}

const segs = segments(stations);
const loopPath =
  `M${segs[0].p1.x} ${segs[0].p1.y} ` +
  segs.map((s) => `C${s.c1.x} ${s.c1.y} ${s.c2.x} ${s.c2.y} ${s.p2.x} ${s.p2.y}`).join(" ") +
  " Z";

// Direction arrows halfway between stations.
const arrows = segs.map(({ p1, c1, c2, p2 }) => {
  const t = 0.5;
  const u = 1 - t;
  const x = u ** 3 * p1.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t ** 3 * p2.x;
  const y = u ** 3 * p1.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t ** 3 * p2.y;
  const dx = 3 * u * u * (c1.x - p1.x) + 6 * u * t * (c2.x - c1.x) + 3 * t * t * (p2.x - c2.x);
  const dy = 3 * u * u * (c1.y - p1.y) + 6 * u * t * (c2.y - c1.y) + 3 * t * t * (p2.y - c2.y);
  return { x, y, angle: (Math.atan2(dy, dx) * 180) / Math.PI };
});

const pct = (v: number) => `${(v / 400) * 100}%`;

/**
 * Hero graphic: the GreenLoop emblem at the center of the oil's real journey,
 * from a kitchen kadhai to sealed cans, the partner plant, and back as biodiesel.
 * A single golden drop travels the loop; it rests in place when reduced motion is on.
 */
export default function LoopGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[440px]"
      role="img"
      aria-label="The journey of used cooking oil: from your kitchen, into sealed cans, to our partner plant, and back as clean biodiesel"
    >
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="gl-track" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5DBB2F" />
            <stop offset="100%" stopColor="#0E7A3E" />
          </linearGradient>
        </defs>

        <path d={loopPath} fill="none" stroke="#E6F2DD" strokeWidth="22" />
        <path d={loopPath} fill="none" stroke="url(#gl-track)" strokeWidth="3" strokeDasharray="1 9" strokeLinecap="round" />

        {arrows.map((a, i) => (
          <path
            key={i}
            d="M-6 -7 L4 0 L-6 7"
            fill="none"
            stroke="#0E7A3E"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`translate(${a.x} ${a.y}) rotate(${a.angle})`}
          />
        ))}

        <g transform={reduceMotion ? `translate(${arrows[0].x} ${arrows[0].y}) rotate(${arrows[0].angle})` : undefined}>
          <path
            d="M-11 0 C-5 -2.5 0 -7.5 5 -7.5 A7.5 7.5 0 0 1 5 7.5 C0 7.5 -5 2.5 -11 0Z"
            fill="#F4C542"
            stroke="#D9A91E"
            strokeWidth="1.5"
            opacity={reduceMotion ? 0 : 1}
          >
            {!reduceMotion && <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" path={loopPath} />}
          </path>
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_20px_50px_-20px_rgba(14,122,62,0.35)]">
        <Image src={logoMark} alt="" priority className="h-auto w-[74%]" />
      </div>

      {stations.map(({ x, y, label, Art }) => (
        <div
          key={label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{ left: pct(x), top: pct(y) }}
        >
          <span className="flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl border border-line bg-white shadow-[0_10px_24px_-14px_rgba(14,122,62,0.45)] sm:h-20 sm:w-20">
            <Art className="h-11 w-11 sm:h-14 sm:w-14" />
          </span>
          <span className="absolute top-full mt-2 whitespace-nowrap font-display text-[0.8rem] font-semibold text-ink sm:text-sm">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
