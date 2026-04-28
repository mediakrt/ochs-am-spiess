"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type FormState = "idle" | "sending" | "success" | "error";

function InputField({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="block font-sans text-xs tracking-widest uppercase font-medium mb-2"
        style={{ color: "var(--color-sand)", opacity: 0.8 }}
      >
        {label}
        {required && <span style={{ color: "var(--color-terracotta)" }}> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 font-sans text-sm font-light outline-none transition-all duration-300 border border-transparent focus:border-opacity-60 placeholder:opacity-30"
        style={{
          background: "rgba(61,31,10,0.5)",
          color: "var(--color-creme)",
          borderColor: "rgba(196,98,45,0.25)",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(196,98,45,0.6)";
          e.target.style.background = "rgba(61,31,10,0.8)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(196,98,45,0.25)";
          e.target.style.background = "rgba(61,31,10,0.5)";
        }}
      />
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setFormState("success");
  };

  return (
    <section
      id="kontakt"
      className="relative py-24 md:py-36 px-6"
      style={{ background: "var(--color-ember)" }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,98,45,0.5), rgba(212,169,106,0.7), rgba(196,98,45,0.5), transparent)",
        }}
      />

      {/* Background flame glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(196,98,45,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div ref={ref}>
            <motion.div
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
                Kontakt
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-bold leading-tight mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--color-creme)",
              }}
            >
              Jetzt{" "}
              <span className="italic" style={{ color: "var(--color-sand)" }}>
                anfragen
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans font-light leading-relaxed mb-10 text-sm"
              style={{ color: "rgba(245,236,215,0.65)" }}
            >
              Teilen Sie mir Ihr Datum und die ungefähre Gästezahl mit — ich
              melde mich innerhalb von 24 Stunden bei Ihnen. Frühzeitige
              Anfragen sind sehr empfehlenswert, da die Termine schnell
              vergeben sind.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5"
            >
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: "Telefon",
                  value: "+41 79 000 00 00",
                  href: "tel:+41790000000",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "E-Mail",
                  value: "info@ochs-am-spiess.ch",
                  href: "mailto:info@ochs-am-spiess.ch",
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group/link"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{
                      background: "rgba(196,98,45,0.15)",
                      color: "var(--color-terracotta)",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      className="font-sans text-xs tracking-widest uppercase mb-0.5 opacity-60"
                      style={{ color: "var(--color-sand)" }}
                    >
                      {label}
                    </div>
                    <div
                      className="font-sans text-sm font-medium transition-colors duration-300 group-hover/link:opacity-80"
                      style={{ color: "var(--color-creme)" }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 border"
                  style={{
                    borderColor: "rgba(196,98,45,0.3)",
                    background: "rgba(61,31,10,0.4)",
                    minHeight: "400px",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(196,98,45,0.2)" }}
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      style={{ color: "var(--color-terracotta)" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3
                    className="font-serif font-bold text-2xl mb-4"
                    style={{ color: "var(--color-creme)" }}
                  >
                    Anfrage erhalten!
                  </h3>
                  <p
                    className="font-sans font-light text-sm leading-relaxed"
                    style={{ color: "rgba(245,236,215,0.65)" }}
                  >
                    Vielen Dank für Ihre Anfrage. André Fischer meldet sich
                    innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Vorname" name="firstname" required placeholder="Hans" />
                    <InputField label="Nachname" name="lastname" required placeholder="Muster" />
                  </div>
                  <InputField label="E-Mail" name="email" type="email" required placeholder="hans@muster.ch" />
                  <InputField label="Telefon" name="phone" type="tel" placeholder="+41 79 ..." />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Datum des Events" name="date" type="date" required />
                    <InputField label="Anzahl Gäste" name="guests" type="number" required placeholder="ca. 150" />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block font-sans text-xs tracking-widest uppercase font-medium mb-2"
                      style={{ color: "var(--color-sand)", opacity: 0.8 }}
                    >
                      Ihre Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Art des Events, besondere Wünsche, Fragen..."
                      className="w-full px-4 py-3.5 font-sans text-sm font-light outline-none transition-all duration-300 resize-none border placeholder:opacity-30"
                      style={{
                        background: "rgba(61,31,10,0.5)",
                        color: "var(--color-creme)",
                        borderColor: "rgba(196,98,45,0.25)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(196,98,45,0.6)";
                        e.target.style.background = "rgba(61,31,10,0.8)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(196,98,45,0.25)";
                        e.target.style.background = "rgba(61,31,10,0.5)";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === "sending"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 font-sans font-medium text-sm tracking-widest uppercase transition-all duration-300 relative overflow-hidden ember-glow disabled:opacity-60"
                    style={{
                      background: "var(--color-terracotta)",
                      color: "var(--color-creme)",
                    }}
                  >
                    <span className="relative z-10">
                      {formState === "sending"
                        ? "Wird gesendet..."
                        : "Anfrage absenden"}
                    </span>
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: "var(--color-terracotta-light)" }}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
