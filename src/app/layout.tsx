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


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "LinkShort - Acortador de URL Moderno",
  description: "Generate a short URL for your long URL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${sourceSans.variable}   antialiased h-screen overflow-y-hidden overflow-x-hidden`}
      >
        <Header />
        {children}

        <BackgroundParticles />
      </body>
    </html>
  );
}
