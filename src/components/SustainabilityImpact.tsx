import { Recycle, Droplets, Factory } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { impactStats } from "@/lib/content";

const storyPoints = [
  {
    icon: Recycle,
    title: "Circular by design",
    text: "Oil that once left kitchens as waste re-enters the energy system instead, closing a loop that used to end at a drain.",
  },
  {
    icon: Droplets,
    title: "Waste kept out of water",
    text: "Every litre collected is one that does not block municipal drains or contaminate local water bodies.",
  },
  {
    icon: Factory,
    title: "Feeding a cleaner grid",
    text: "Processed oil becomes biodiesel and renewable feedstock, displacing demand on fossil-based energy sources.",
  },
];

export default function SustainabilityImpact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-night py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full border border-night-line spin-slow" aria-hidden="true">
        <div className="absolute inset-10 rounded-full border border-night-line" />
        <div className="absolute inset-24 rounded-full border border-night-line" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Sustainability Impact
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A measurable step toward a cleaner energy ecosystem
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Every pickup is a small, trackable contribution to a much larger cycle, one that
            turns commercial waste into a renewable resource at scale.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-night-line py-10 sm:gap-x-10 lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.1}>
              <div>
                <p className="font-mono text-4xl font-bold text-gold sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {storyPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={i * 0.1}>
                <div>
                  <Icon className="h-7 w-7 text-secondary" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-bold">{point.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/70">{point.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-14 text-xs text-white/40">
          Figures reflect cumulative collection activity and are updated periodically.
        </p>
      </div>
    </section>
  );
}
