export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center relative"
      style={{ background: "var(--color-smoke)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,98,45,0.4), rgba(212,169,106,0.5), rgba(196,98,45,0.4), transparent)",
        }}
      />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div
          className="font-serif font-bold text-lg italic"
          style={{ color: "var(--color-terracotta)" }}
        >
          Ochs am Spiess
        </div>
        <div
          className="font-sans text-xs tracking-widest uppercase"
          style={{ color: "rgba(212,169,106,0.4)" }}
        >
          André Fischer · Grillmeister
        </div>
        <div
          className="font-sans text-xs"
          style={{ color: "rgba(245,236,215,0.2)" }}
        >
          © {new Date().getFullYear()} André Fischer
        </div>
      </div>
    </footer>
  );
}
