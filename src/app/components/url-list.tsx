"use client";

import { useEffect, useState } from "react";
import { Loading } from "./loading";

interface UrlListProps {
  refreshKey: number;
}

type UrlDto = {
  id: string;
  original: string;
  short: string;
  createdAt?: string;
};

const UrlList = ({ refreshKey }: UrlListProps) => {
  const [urls, setUrls] = useState<UrlDto[]>([]);
  const [loading, setLoading] = useState(true);

  const notificacion = (msg: string) => {
    const ventana = document.getElementById("toast");
    if (!ventana) return;
    ventana.textContent = msg;
    ventana.classList.remove("opacity-0", "translate-y-2");
    window.setTimeout(
      () => ventana.classList.add("opacity-0", "translate-y-2"),
      2000
    );
  };

  const fetchUrls = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/urls");
      const data = await response.json();
      setUrls(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  useEffect(() => {
    fetchUrls();
  }, [refreshKey]);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/deleteUrls/${id}`, { method: "DELETE" });
      setUrls((prev) => prev.filter((url) => url.id !== id));
      notificacion("Eliminado");
    } catch (error) {
      console.error("Error deleting URL:", error);
      notificacion("No se pudo eliminar");
    }
  };

  const openShort = (slug: string) => {
    window.open(`/api/shorten/${slug}`, "_blank");
  };

  const copyShort = async (slug: string) => {
    if (typeof window === "undefined") return;
    const url = `${location.origin}/api/shorten/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      notificacion("Copiado al portapapeles");
    } catch {
      notificacion("No se pudo copiar");
    }
  };

  const showQR = (slug: string) => {
    const url = `${location.origin}/api/shorten/${slug}`;
    window.open(
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  return (
    <div
      className="mt-6 flex-1 min-h-0 overflow-y-auto pr-1 [scrollbar-gutter:stable] overscroll-contain"
    >
      <h2 className="text-lg text-center font-semibold mb-4 sticky top-0 z-10 bg-[#0B1220]/60 backdrop-blur supports-[backdrop-filter]:bg-[#0B1220]/40 rounded-2xl">
        URLs acortadas
      </h2>
      {loading ? (
        <Loading />
      ) : urls.length === 0 ? (
        <div className="text-center text-white/60 border border-white/10 bg-white/5 rounded-xl p-6">
          <p>Por ahora no hay URLs acortadas.</p>
        </div>
      ) : (
        <ul className="space-y-3 pb-2">
          {urls.map((url) => (
            <li
              key={url.id}
              className="group rounded-xl border border-white/10 bg-white/5 p-4 md:p-5 hover:bg-white/10 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-white/50">Original</p>
                  <a
                    href={url.original}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block truncate text-sm text-cyan-200 hover:underline"
                    title={url.original}
                  >
                    {url.original}
                  </a>

                  <div className="mt-1 text-sm">
                    <span className="text-white/60">Corto:</span>{" "}
                    <button
                      onClick={() => openShort(url.short)}
                      className="font-semibold text-emerald-400 hover:underline"
                    >
                      {url.short}
                    </button>
                    {url.createdAt && (
                      <span className="ml-2 text-xs text-white/40">
                        · {url.createdAt}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    onClick={() => copyShort(url.short)}
                    className="h-9 px-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-sm"
                    title="Copiar"
                  >
                    Copiar
                  </button>
                  <button
                    onClick={() => openShort(url.short)}
                    className="h-9 px-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-sm"
                    title="Abrir"
                  >
                    Abrir
                  </button>
                  <button
                    onClick={() => showQR(url.short)}
                    className="h-9 px-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-sm"
                    title="QR"
                  >
                    QR
                  </button>
                  <button
                    onClick={() => handleDelete(url.id)}
                    className="h-9 px-3 rounded-lg bg-red-400/10 hover:bg-red-400/20 border border-red-400/20 text-red-300 text-sm"
                    title="Borrar"
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UrlList;
