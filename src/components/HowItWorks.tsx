import Reveal from "./Reveal";
import { PhoneRequest, CollectionCan, Scale, Tanker } from "./Illustrations";

const stepArt = [PhoneRequest, CollectionCan, Scale, Tanker];
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
            From your fryer to our partner biodiesel plant, every collection follows the same simple
            process.
          </p>
        </Reveal>

        {/* Desktop: a flowing line, like the curve in the logo, links the four steps */}
        <div className="relative mt-20 hidden md:block">
          <svg
            viewBox="0 0 1000 96"
            preserveAspectRatio="none"
            className="absolute left-0 top-0 h-24 w-full"
            aria-hidden="true"
          >
            <path
              d="M125 48 C 200 0, 300 0, 375 48 S 550 96, 625 48 S 800 0, 875 48"
              fill="none"
              stroke="#D9E2D2"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M125 48 C 200 0, 300 0, 375 48 S 550 96, 625 48 S 800 0, 875 48"
              fill="none"
              stroke="#0E7A3E"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="loop-flow"
            />
          </svg>

          <div className="relative grid grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Art = stepArt[i];
              return (
                <Reveal key={step.id} delay={i * 0.12}>
                  <div className="flex flex-col items-center text-center">
                    <span className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-line bg-white shadow-[0_14px_30px_-18px_rgba(14,122,62,0.45)]">
                      {Art && <Art className="h-16 w-16" />}
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-6 font-display text-lg font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 max-w-[16rem] text-[0.95rem] leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical path */}
        <div className="relative mt-14 space-y-10 md:hidden">
          <div
            className="absolute bottom-10 left-9 top-10 w-0 border-l-2 border-dashed border-primary/40"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => {
            const Art = stepArt[i];
            return (
              <Reveal key={step.id} delay={i * 0.1} className="relative flex gap-5">
                <span className="relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-line bg-white shadow-[0_10px_24px_-16px_rgba(14,122,62,0.45)]">
                  {Art && <Art className="h-12 w-12" />}
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.7rem] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
