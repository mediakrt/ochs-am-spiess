"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "25+", label: "Jahre Erfahrung" },
  { value: "300+", label: "Events grilliert" },
  { value: "1", label: "Leidenschaft" },
];

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="text-center"
    >
      <div
        className="font-serif font-black leading-none mb-2"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          color: "var(--color-terracotta)",
        }}
      >
        {value}
      </div>
      <div
        className="font-sans text-sm font-medium tracking-widest uppercase"
        style={{ color: "rgba(212,169,106,0.7)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ueber-andre"
      className="relative py-24 md:py-36 px-6"
      style={{ background: "var(--color-ember)" }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,98,45,0.6), rgba(212,169,106,0.8), rgba(196,98,45,0.6), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div
            className="h-px w-12"
            style={{ background: "var(--color-terracotta)" }}
          />
          <span
            className="font-sans text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: "var(--color-sand)" }}
          >
            Der Meister
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-bold leading-tight mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--color-creme)",
              }}
            >
              Das Handwerk{" "}
              <span
                className="italic"
                style={{ color: "var(--color-sand)" }}
              >
                hinter dem Feuer
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 font-sans font-light leading-relaxed"
              style={{ color: "rgba(245,236,215,0.75)", fontSize: "1.05rem" }}
            >
              <p>
                André Fischer ist kein gewöhnlicher Caterer. Er ist ein
                Handwerker der alten Schule – einer, der seit über zwei
                Jahrzehnten das ehrwürdigste Grillgericht der Welt meistert:
                den ganzen Ochsen am Spiess.
              </p>
              <p>
                Mit Geduld, Feuer und dem richtigen Gespür für Hitze zaubert
                André für Ihre Gäste ein Erlebnis, das weit über blossen
                Genuss hinausgeht. Jedes Event wird zum Spektakel – vom ersten
                Funken bis zum letzten Bissen.
              </p>
              <p>
                Egal ob Firmenjubiläum, Hochzeitsfeier oder Dorffest: André
                kommt mit seiner Ausrüstung direkt zu Ihnen und kümmert sich
                um alles. Sie müssen nur Ihre Gäste einladen.
              </p>
            </motion.div>

            {/* Signature element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center gap-4"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(196,98,45,0.2)",
                  border: "1px solid rgba(196,98,45,0.4)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--color-terracotta)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="font-serif font-semibold text-lg"
                  style={{ color: "var(--color-creme)" }}
                >
                  André Fischer
                </div>
                <div
                  className="font-sans text-xs tracking-widest uppercase"
                  style={{ color: "var(--color-sand)", opacity: 0.7 }}
                >
                  Grillmeister
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual: Placeholder image + decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative frame offset */}
            <div
              className="absolute -top-4 -right-4 bottom-4 left-4 border"
              style={{ borderColor: "rgba(196,98,45,0.3)" }}
            />

            {/* Image placeholder */}
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{ background: "var(--color-dark-brown)" }}
            >
              {/* Glow overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(196,98,45,0.3) 0%, transparent 70%)",
                }}
              />

              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <svg
                  className="w-20 h-20 mb-4 opacity-30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  style={{ color: "var(--color-sand)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                </svg>
                <span
                  className="font-sans text-xs tracking-widest uppercase opacity-40"
                  style={{ color: "var(--color-sand)" }}
                >
                  Foto: André Fischer
                </span>
              </div>

              {/* Bottom label */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(18,10,3,0.9) 0%, transparent 100%)",
                }}
              >
                <div
                  className="font-serif text-sm italic"
                  style={{ color: "rgba(212,169,106,0.8)" }}
                >
                  „Das Feuer lügt nie."
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div
          className="mt-20 pt-12 grid grid-cols-3 gap-8"
          style={{ borderTop: "1px solid rgba(196,98,45,0.2)" }}
        >
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,98,45,0.4), rgba(212,169,106,0.6), rgba(196,98,45,0.4), transparent)",
        }}
      />
    </section>
  );
}
