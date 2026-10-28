import Reveal from "./Reveal";
import ServiceMap from "./ServiceMap";
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
            <div className="mx-auto w-full max-w-[520px]">
              <ServiceMap />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
