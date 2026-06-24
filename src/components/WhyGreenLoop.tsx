import { ShieldCheck, BadgeCheck, Leaf, Map, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { trustPoints } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
  leaf: Leaf,
  map: Map,
};

export default function WhyGreenLoop() {
  return (
    <section id="why-greenloop" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Why GreenLoop
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Industrial discipline, environmental purpose
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <Reveal key={point.id} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_48px_-24px_rgba(14,122,62,0.35)]">
                  <div className="absolute inset-0 -z-10 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-white/15 group-hover:text-gold">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink transition-colors duration-300 group-hover:text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-white/85">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
