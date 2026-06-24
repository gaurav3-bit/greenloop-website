import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { serviceAreaPhases } from "@/lib/content";

const statusStyle: Record<string, string> = {
  Live: "bg-primary text-white",
  Expanding: "bg-gold/20 text-gold-dark",
  Planned: "bg-mist-deep text-ink-soft",
};

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Service Area
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Live in Indore. Expanding across Madhya Pradesh.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              GreenLoop&apos;s collection routes are built outward from a single operational hub,
              adding districts as partner density justifies a dedicated route.
            </p>

            <ul className="mt-10 space-y-4">
              {serviceAreaPhases.map((phase) => (
                <li key={phase.id} className="flex items-start gap-4 rounded-2xl border border-line p-5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft pt-1 w-16 shrink-0">
                    {phase.phase}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-base font-bold text-ink">{phase.title}</h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold ${statusStyle[phase.status]}`}>
                        {phase.status}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{phase.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-square w-full max-w-[440px]">
              <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
                <circle cx="50" cy="50" r="14" fill="#0E7A3E" fillOpacity="0.12" stroke="#0E7A3E" strokeWidth="0.6" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#5DBB2F" strokeWidth="0.6" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="46" fill="none" stroke="#D9E2D2" strokeWidth="0.6" strokeDasharray="2 3" />

                {/* Decorative partner nodes within the live radius */}
                <circle cx="44" cy="44" r="1.4" fill="#0E7A3E" />
                <circle cx="57" cy="46" r="1.4" fill="#0E7A3E" />
                <circle cx="48" cy="58" r="1.4" fill="#0E7A3E" />
                <circle cx="58" cy="56" r="1.4" fill="#0E7A3E" />
              </svg>

              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <MapPin className="h-5 w-5 text-primary" strokeWidth={2} fill="#0E7A3E" />
                <span className="mt-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.1em] text-primary">
                  Indore
                </span>
              </div>

              <span className="absolute left-[78%] top-[20%] -translate-x-1/2 rounded-full border border-secondary/30 bg-white px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-secondary shadow-sm">
                Phase 2
              </span>
              <span className="absolute left-[92%] top-[50%] -translate-x-1/2 rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-ink-soft shadow-sm">
                Phase 3
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
