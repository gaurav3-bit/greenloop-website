import { Hotel, CookingPot, Store, Truck, Building2, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { segments } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  hotel: Hotel,
  "cooking-pot": CookingPot,
  store: Store,
  truck: Truck,
  building: Building2,
};

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Who We Serve
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built for commercial kitchens of every scale
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            From a single hotel kitchen to a multi-vendor food court, GreenLoop adapts collection
            schedules and container sizes to how your business actually operates.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment, i) => {
            const Icon = iconMap[segment.icon];
            return (
              <Reveal key={segment.id} delay={i * 0.08} className={i === 3 ? "sm:col-span-1" : ""}>
                <div className="group h-full rounded-2xl border border-line bg-mist/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(14,122,62,0.25)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{segment.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{segment.description}</p>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={5 * 0.08}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-primary p-7 text-white">
              <div>
                <h3 className="font-display text-lg font-bold">Not sure which fits?</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/85">
                  Tell us about your operation and we will recommend a collection plan.
                </p>
              </div>
              <a
                href="#pickup"
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
              >
                Talk to our team
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
