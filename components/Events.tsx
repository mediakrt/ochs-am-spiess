"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EVENTS = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Firmenevents",
    description:
      "Ein Ochs am Spiess ist das Gesprächsthema Ihres nächsten Firmenjubiläums, Sommerfests oder Teamevents. Beeindrucken Sie Kunden und Mitarbeitende mit einem Erlebnis, das nachhallt.",
    capacity: "50 – 500 Personen",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Hochzeiten",
    description:
      "Der perfekte Mittelpunkt Ihrer Hochzeitsfeier. André sorgt für ein kulinarisches Highlight, das Ihre Gäste noch Jahre später begeistern wird. Rustikal, festlich, unvergesslich.",
    capacity: "80 – 300 Personen",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Dorffeste & Feiern",
    description:
      "Jahrmärkte, Gemeindefeste, Vereinsjubiläen – überall wo Menschen zusammenkommen und gemeinsam feiern möchten. Das Grillen wird zur Attraktion für Jung und Alt.",
    capacity: "100 – 800 Personen",
  },
];

function EventCard({
  icon,
  title,
  description,
  capacity,
  index,
}: (typeof EVENTS)[0] & { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative p-8 border transition-all duration-500 cursor-default"
      style={{
        background: "rgba(61,31,10,0.4)",
        borderColor: "rgba(196,98,45,0.2)",
      }}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(196,98,45,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "var(--color-terracotta)" }}
      />

      <div
        className="relative z-10 mb-5 inline-flex p-3 rounded-sm"
        style={{
          background: "rgba(196,98,45,0.12)",
          color: "var(--color-terracotta)",
        }}
      >
        {icon}
      </div>

      <h3
        className="relative z-10 font-serif font-bold text-2xl mb-4"
        style={{ color: "var(--color-creme)" }}
      >
        {title}
      </h3>

      <p
        className="relative z-10 font-sans font-light leading-relaxed mb-6 text-sm"
        style={{ color: "rgba(245,236,215,0.65)" }}
      >
        {description}
      </p>

      <div
        className="relative z-10 flex items-center gap-2"
        style={{ color: "var(--color-sand)" }}
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
        <span className="font-sans text-xs tracking-widest uppercase font-medium opacity-80">
          {capacity}
        </span>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="events"
      className="relative py-24 md:py-36 px-6"
      style={{ background: "var(--color-smoke)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(61,31,10,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div
            className="h-px w-12"
            style={{ background: "var(--color-terracotta)" }}
          />
          <span
            className="font-sans text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: "var(--color-sand)" }}
          >
            Für jeden Anlass
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif font-bold leading-tight mb-16"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--color-creme)",
          }}
        >
          Der Ochs{" "}
          <span className="italic" style={{ color: "var(--color-sand)" }}>
            kommt zu Ihnen
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <EventCard key={event.title} {...event} index={i} />
          ))}
        </div>

        {/* Process strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 md:p-10 border"
          style={{
            borderColor: "rgba(196,98,45,0.2)",
            background: "rgba(61,31,10,0.3)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { step: "01", text: "Anfrage & Datum" },
              { step: "02", text: "Planung & Vorbereitung" },
              { step: "03", text: "Aufbau & Anzünden" },
              { step: "04", text: "Geniessen & Feiern" },
            ].map((item, i) => (
              <div key={item.step} className="flex flex-col items-center">
                <div
                  className="font-serif font-black text-3xl mb-2 leading-none"
                  style={{ color: "rgba(196,98,45,0.5)" }}
                >
                  {item.step}
                </div>
                <div
                  className="font-sans text-sm font-medium"
                  style={{ color: "var(--color-creme)", opacity: 0.8 }}
                >
                  {item.text}
                </div>
                {i < 3 && (
                  <div
                    className="hidden md:block absolute translate-x-full"
                    style={{ color: "rgba(196,98,45,0.3)" }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
