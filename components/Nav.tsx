"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#ueber-andre", label: "Über André" },
  { href: "#events", label: "Events" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(18,10,3,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(196,98,45,0.15)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif font-bold text-xl transition-opacity duration-300 hover:opacity-80"
          style={{ color: "var(--color-creme)" }}
        >
          <span className="italic" style={{ color: "var(--color-terracotta)" }}>
            Ochs
          </span>{" "}
          am Spiess
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 hover:opacity-100"
              style={{ color: "rgba(245,236,215,0.6)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-sand)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245,236,215,0.6)")
              }
            >
              {label}
            </a>
          ))}

          <a
            href="#kontakt"
            className="inline-flex px-5 py-2.5 font-sans font-medium text-xs tracking-widest uppercase transition-all duration-300"
            style={{
              background: "var(--color-terracotta)",
              color: "var(--color-creme)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--color-terracotta-light)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--color-terracotta)")
            }
          >
            Anfragen
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu öffnen"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-6 h-px"
              style={{ background: "var(--color-creme)" }}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(18,10,3,0.97)",
              borderTop: "1px solid rgba(196,98,45,0.15)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-sm tracking-widest uppercase font-medium"
                  style={{ color: "rgba(245,236,215,0.7)" }}
                >
                  {label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="inline-flex justify-center px-5 py-3 font-sans font-medium text-xs tracking-widest uppercase mt-2"
                style={{
                  background: "var(--color-terracotta)",
                  color: "var(--color-creme)",
                }}
              >
                Anfragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
