"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EMBERS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: 2 + Math.random() * 4,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 5,
  drift: (Math.random() - 0.5) * 60,
}));

function EmberParticle({ x, size, duration, delay, drift }: (typeof EMBERS)[0]) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        bottom: "-10px",
        width: size,
        height: size,
        background: `radial-gradient(circle, #F5A623 0%, #C4622D 60%, transparent 100%)`,
        filter: "blur(0.5px)",
      }}
      animate={{
        y: [0, -900],
        x: [0, drift],
        opacity: [0, 0.9, 0.6, 0],
        scale: [1, 0.8, 0.4, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--color-smoke)" }}
    >
      {/* Deep gradient layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(196,98,45,0.25) 0%, rgba(61,31,10,0.4) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 85%, rgba(212,169,106,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Ember particles */}
      <div className="absolute inset-0 overflow-hidden">
        {EMBERS.map((ember) => (
          <EmberParticle key={ember.id} {...ember} />
        ))}
      </div>

      {/* Flame base glow at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(196,98,45,0.5) 0%, rgba(61,31,10,0.3) 40%, transparent 70%)",
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Horizontal divider line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,98,45,0.5), rgba(212,169,106,0.8), rgba(196,98,45,0.5), transparent)",
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div
            className="h-px w-12"
            style={{ background: "var(--color-terracotta)" }}
          />
          <span
            className="text-xs font-sans font-medium tracking-[0.3em] uppercase"
            style={{ color: "var(--color-sand)" }}
          >
            Grillmeister seit 1998
          </span>
          <div
            className="h-px w-12"
            style={{ background: "var(--color-terracotta)" }}
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif font-black leading-none tracking-tight mb-4"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
            color: "var(--color-creme)",
            fontStyle: "italic",
          }}
        >
          Ochs am{" "}
          <span
            className="flame-glow not-italic"
            style={{ color: "var(--color-terracotta)" }}
          >
            Spiess
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-3"
        >
          <p
            className="font-serif text-2xl md:text-3xl font-light tracking-wide"
            style={{ color: "var(--color-sand)" }}
          >
            André Fischer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-sans text-base md:text-lg font-light max-w-lg mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(245,236,215,0.6)" }}
        >
          Ein ganzer Ochs. Über offener Flamme. Für Ihre unvergessliche
          Veranstaltung.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#kontakt"
            className="relative inline-flex items-center gap-2 px-8 py-4 font-sans font-medium text-sm tracking-widest uppercase transition-all duration-300 ember-glow group"
            style={{
              background: "var(--color-terracotta)",
              color: "var(--color-creme)",
            }}
          >
            <span className="relative z-10">Anfrage stellen</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "var(--color-terracotta-light)" }}
            />
          </a>

          <a
            href="#ueber-andre"
            className="inline-flex items-center gap-2 px-8 py-4 font-sans font-medium text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-white/5"
            style={{
              borderColor: "rgba(212,169,106,0.4)",
              color: "var(--color-sand)",
            }}
          >
            Mehr erfahren
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
      >
        <span
          className="text-xs font-sans tracking-[0.2em] uppercase"
          style={{ color: "rgba(212,169,106,0.4)" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: "var(--color-terracotta)", opacity: 0.5 }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
