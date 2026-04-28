import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ochs am Spiess – André Fischer | Grillmeister",
  description:
    "André Fischer grilliert auf Bestellung einen Ochs am Spiess für Firmenevents, Hochzeiten, Feste und besondere Anlässe. Unvergesslicher Genuss für Ihre Veranstaltung.",
  keywords: "Ochs am Spiess, Grillmeister, Firmenveranstaltung, Hochzeit, Catering, André Fischer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
