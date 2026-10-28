"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Lock, Phone, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { businessTypes, quantityRanges, site } from "@/lib/content";

type Status = "idle" | "success";

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";

const labelClasses = "mb-1.5 block text-sm font-semibold text-ink";

export default function PickupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [waLink, setWaLink] = useState(site.whatsapp);

  // Builds a WhatsApp message from the form and opens it addressed to site.whatsapp.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      "*New Pickup Request*",
      "",
      `Business: ${get("businessName")}`,
      `Contact: ${get("contactPerson")}`,
      `Phone: ${get("phone")}`,
      get("email") ? `Email: ${get("email")}` : null,
      `Type: ${get("businessType")}`,
      `Quantity: ${get("quantity")}`,
      `Location: ${get("location")}`,
      get("message") ? `Message: ${get("message")}` : null,
    ];

    const text = lines.filter((line) => line !== null).join("\n");
    const link = `${site.whatsapp}?text=${encodeURIComponent(text)}`;
    setWaLink(link);

    // Note: passing "noopener" makes window.open return null, so detach the opener manually.
    const opened = window.open(link, "_blank");
    if (opened) opened.opener = null;
    else window.location.href = link;
    setStatus("success");
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
              Share a few details about your business. When you submit, WhatsApp opens with your
              request ready to send to our team.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-3.5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <span className="text-[0.95rem] text-ink-soft">
                  <strong className="text-ink">Quick reply:</strong> we&apos;ll respond on WhatsApp
                  to confirm a pickup time.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <span className="text-[0.95rem] text-ink-soft">
                  <strong className="text-ink">Free pickup:</strong> we don&apos;t charge any
                  collection fee.
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
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">Almost done!</h3>
                  <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                    WhatsApp has opened with your request. Just tap <strong>Send</strong> so it
                    reaches our team, and we&apos;ll reply to confirm a pickup time.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    WhatsApp didn&apos;t open? Tap here
                  </a>
                  <a href={site.phoneHref} className="mt-4 text-sm font-semibold text-primary">
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
                        Email <span className="font-normal text-ink-soft">(optional)</span>
                      </label>
                      <input id="email" name="email" type="email" className={inputClasses} placeholder="you@business.com" />
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
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(14,122,62,0.5)] transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <MessageCircle className="h-5 w-5" strokeWidth={2} />
                    Send Request on WhatsApp
                  </button>

                  <p className="text-center text-xs text-ink-soft">
                    This opens WhatsApp with your details filled in. Just tap send.
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
