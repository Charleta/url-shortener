"use client";
import { UrlShortener } from "./components/input-link";
import { useState } from "react";
import Container from "./components/container";
import UrlList from "./components/url-list";

export default function Home() {

  const [refresh, setRefresh] = useState(0);
  const handleRefresh = () => {
    setRefresh(prev => prev +1);
  }
  return (
    <div >
      <Container >
        <h1 className="font-bold text-4xl text-center text-white mb-10">
          Acortador de URL
        </h1>
        <UrlShortener onCreated={handleRefresh} />
        <UrlList refreshKey={refresh} />
      </Container>
    </div>
  );
}
