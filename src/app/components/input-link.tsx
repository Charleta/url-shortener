"use client";

import type React from "react";
import { useState } from "react";

interface UrlShortenerProps {
  onCreated: () => void;
}

export const UrlShortener = ({ onCreated }: UrlShortenerProps) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const notify = (msg: string) => {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("opacity-0", "translate-y-2");
    window.setTimeout(
      () => el.classList.add("opacity-0", "translate-y-2"),
      2000
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!url.trim()) {
      setErrorMsg("Ingresá una URL válida.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "No se pudo acortar.");
      }

      setUrl("");
      onCreated();
      notify("URL acortada ✨");
    } catch (err: any) {
      setErrorMsg(err?.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <InputLink
      url={url}
      setUrl={setUrl}
      handleSubmit={handleSubmit}
      loading={loading}
      errorMsg={errorMsg}
    />
  );
};

interface InputLinkProps {
  url: string;
  setUrl: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
  errorMsg?: string;
}

export const InputLink = ({
  url,
  setUrl,
  handleSubmit,
  loading = false,
  errorMsg = "",
}: InputLinkProps) => {
  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <label htmlFor="url" className="text-sm text-white/80">
        Enlace
      </label>
      <div className="flex gap-2">
        <input
          id="url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://ejemplo.com/tu-enlace-largo"
          className="flex-1 h-11 rounded-xl bg-white/10 border border-white/10 placeholder-white/40 px-4 outline-none focus:ring-2 focus:ring-cyan-300/50 focus:border-cyan-300/50"
        />
        <button
          type="submit"
          disabled={loading}
          className="h-11 px-5 rounded-xl bg-cyan-400 text-gray-900 font-semibold disabled:opacity-60 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 transition"
        >
          {loading ? "Acortando..." : "Acortar"}
        </button>
      </div>
      {errorMsg && <p className="text-sm text-red-300">{errorMsg}</p>}
      <p className="text-xs text-white/50">
        Ej: enlaces de YouTube, artículos, formularios, etc.
      </p>
    </form>
  );
};
