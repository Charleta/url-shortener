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
      options={{
        background: {
          color: "#0d1117", // Color de fondo
        },
        particles: {
          number: {
            value: 100, // Cantidad de partículas (ajústalo como quieras)
          },
          color: {
            value: "#ffffff", // Color de las partículas (blanco para nieve)
          },
          shape: {
            type: "circle", // Forma de las partículas
          },
          opacity: {
            value: 0.8, // Opacidad de las partículas
          },
          size: {
            value: 3, // Tamaño de las partículas
          },
          move: {
            enable: true,
            speed: 1, // Velocidad de movimiento
            direction: "bottom", // Dirección: hacia abajo como nieve
            straight: false, // Movimiento aleatorio
          },
        },
      }}
      className="absolute w-full h-full -z-10" // el -z lo que hace es que las partículas se muestren detrás de los demás elementos
      //mientras mas alto es el numero de z-index mas adelante se muestra el elemento
    />
  );
}
