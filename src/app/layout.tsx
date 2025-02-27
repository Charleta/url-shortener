import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import BackgroundParticles from "./components/background-particles";

const geistSans = Inter({
  
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Shorten URL",
  description: "Generate a short URL for your long URL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans}  antialiased`}>
        <BackgroundParticles />
        {children}
      </body>
    </html>
  );
}
