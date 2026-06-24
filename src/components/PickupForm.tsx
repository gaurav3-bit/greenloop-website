"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Lock, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { businessTypes, quantityRanges, site } from "@/lib/content";

type Status = "idle" | "submitting" | "success";

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";

const labelClasses = "mb-1.5 block text-sm font-semibold text-ink";

export default function PickupForm() {
  const [status, setStatus] = useState<Status>("idle");

  // NOTE: this demo submits to no backend. Wire onSubmit to an API route,
  // form service, or CRM webhook to receive real pickup requests.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section id="pickup" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Request a Pickup
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Schedule your first collection
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Share a few details about your kitchen and our team will confirm a pickup window
              within one business day.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-3.5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <span className="text-[0.95rem] text-ink-soft">
                  <strong className="text-ink">Fast confirmation:</strong> most requests are
                  scheduled within 24 hours.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <span className="text-[0.95rem] text-ink-soft">
                  <strong className="text-ink">No cost to your business:</strong> commercial
                  collection carries no pickup fee.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <span className="text-[0.95rem] text-ink-soft">
                  Prefer to talk first? Call{" "}
                  <a href={site.phoneHref} className="font-semibold text-primary">
                    {site.phone}
                  </a>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-30px_rgba(17,24,39,0.18)] sm:p-9">
              {status === "success" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">Request received</h3>
                  <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                    Thank you. A GreenLoop coordinator will call you within one business day to
                    confirm your pickup window.
                  </p>
                  <a href={site.phoneHref} className="mt-6 text-sm font-semibold text-primary">
                    Or call us now: {site.phone}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="businessName" className={labelClasses}>
                        Business Name
                      </label>
                      <input id="businessName" name="businessName" type="text" required className={inputClasses} placeholder="e.g. Hotel Shanti Residency" />
                    </div>
                    <div>
                      <label htmlFor="contactPerson" className={labelClasses}>
                        Contact Person
                      </label>
                      <input id="contactPerson" name="contactPerson" type="text" required className={inputClasses} placeholder="Full name" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                      </label>
                      <input id="phone" name="phone" type="tel" required className={inputClasses} placeholder="10-digit mobile number" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email
                      </label>
                      <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@business.com" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="businessType" className={labelClasses}>
                        Business Type
                      </label>
                      <select id="businessType" name="businessType" required defaultValue="" className={inputClasses}>
                        <option value="" disabled>
                          Select business type
                        </option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className={labelClasses}>
                        Estimated Oil Quantity
                      </label>
                      <select id="quantity" name="quantity" required defaultValue="" className={inputClasses}>
                        <option value="" disabled>
                          Select a range
                        </option>
                        {quantityRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className={labelClasses}>
                      Location
                    </label>
                    <input id="location" name="location" type="text" required className={inputClasses} placeholder="Area / neighborhood in Indore" />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Message <span className="font-normal text-ink-soft">(optional)</span>
                    </label>
                    <textarea id="message" name="message" rows={3} className={inputClasses} placeholder="Preferred pickup days, container details, or anything else we should know" />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(14,122,62,0.5)] transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? "Submitting…" : "Schedule Pickup"}
                  </button>

                  <p className="text-center text-xs text-ink-soft">
                    By submitting, you agree to be contacted by GreenLoop regarding this request.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
