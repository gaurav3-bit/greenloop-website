"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import LoopGraphic from "./LoopGraphic";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mist pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Ambient backdrop: faint expanding rings echo the loop motif site-wide */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-secondary/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full border border-secondary/10" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
          >
            <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
            Now Collecting in Indore
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-balance text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-[3.6rem]"
          >
            Turn Used Cooking Oil Into{" "}
            <span className="text-primary">Sustainable Energy</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            GreenLoop Bio Resources helps hotels, cloud kitchens, caterers, food courts, and
            institutional cafeterias safely dispose of used cooking oil through a reliable
            collection network across Indore, and soon, throughout Madhya Pradesh.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <a
              href="#pickup"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(14,122,62,0.5)] transition-all hover:bg-primary-dark hover:shadow-[0_16px_36px_-10px_rgba(14,122,62,0.6)]"
            >
              Request Oil Pickup
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </a>
            <a
              href="tel:+917314002210"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/10 bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Phone className="h-4.5 w-4.5" strokeWidth={2} />
              Call Our Team
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            <span className="font-mono font-semibold text-ink">500+</span>
            <span className="-ml-6">business partners served</span>
            <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
            <span>Authorized processing network</span>
            <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
            <span>Zero cost commercial collection</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
        >
          <LoopGraphic />
        </motion.div>
      </div>
    </section>
  );
}
