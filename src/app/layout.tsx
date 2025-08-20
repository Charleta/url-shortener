import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import BackgroundParticles from "./components/background-particles";
import Header from "./components/header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "LinkShort - Acortador de URL Moderno",
  description: "Generate a short URL for your long URL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased min-h-screen overflow-x-hidden bg-[#0B1220] text-white`}
      >
        <Header />
        {children}
        <BackgroundParticles />
      </body>
    </html>
  );
}
