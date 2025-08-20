"use client";

import { useState } from "react";
import Container from "./components/container";
import { UrlShortener } from "./components/input-link";
import UrlList from "./components/url-list";

export default function Home() {
  const [refresh, setRefresh] = useState(0);
  const handleRefresh = () => setRefresh((prev) => prev + 1);

  return (
    <div className="px-4 h-full min-h-0">
      <Container>
        <h1 className="font-bold text-4xl text-center text-white mb-2 tracking-tight">
          Acortador de URL
        </h1>
        <p className="text-center text-white/70 text-sm mb-8">
          Pegá tu enlace, acortalo y compartilo. Rápido y simple.
        </p>
        <UrlShortener onCreated={handleRefresh} />
        <UrlList refreshKey={refresh} />
      </Container>
    </div>
  );
}
