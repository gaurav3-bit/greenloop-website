import Reveal from "./Reveal";
import { processSteps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            How It Works
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One continuous loop, four simple steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            From your fryer to a renewable energy facility, every collection follows the same
            disciplined process, tracked end to end.
          </p>
        </Reveal>

        {/* Desktop: horizontal loop connecting all four steps */}
        <div className="relative mt-20 hidden md:block">
          <svg
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            className="absolute left-0 top-7 h-1 w-full"
            aria-hidden="true"
          >
            <line x1="125" y1="2" x2="875" y2="2" stroke="#D9E2D2" strokeWidth="2" />
            <line x1="125" y1="2" x2="875" y2="2" stroke="#0E7A3E" strokeWidth="2" className="loop-flow" />
          </svg>

          <div className="relative grid grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.12}>
                <div className="flex flex-col items-start">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-white font-mono text-base font-bold text-primary">
                    {step.index}
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical loop */}
        <div className="relative mt-14 space-y-10 md:hidden">
          <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-line" aria-hidden="true" />
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.1} className="relative flex gap-5 pl-0">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-mono text-base font-bold text-primary">
                {step.index}
              </span>
              <div className="pt-2.5">
                <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
