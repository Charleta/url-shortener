"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Carga más ligera de tsparticles
import { useCallback } from "react";
import { Engine } from "tsparticles-engine"; // Motor de partículas el cual
// permite cargar plugins y extensiones

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Cargar la versión optimizada de tsparticles
  }, []);

  return (
    <Particles
      init={particlesInit}
      className="pointer-events-none fixed inset-0 -z-10"
      options={{
        fullScreen: { enable: false }, // 👈 usamos la clase para posicionar
        fpsLimit: 60,
        detectRetina: true,
        background: { color: "#0B1220" }, // o "transparent" si querés que tome el del <body>
        particles: {
          number: { value: 70, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            straight: false,
          },
        },
        interactivity: {
          events: { onHover: { enable: false }, onClick: { enable: false } }, // ya que es decorativo
        },
        pauseOnBlur: true, // menos consumo cuando la pestaña no está activa
      }}
    />
  );
}
