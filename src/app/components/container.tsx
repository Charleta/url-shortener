import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-start min-h-screen p-4">
      {" "}
      <div className="w-full max-w-2xl h-[calc(100vh-2rem)] p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur rounded-2xl shadow-xl min-h-0 flex flex-col overflow-hidden">
        {children}
      </div>
      {/* Toast container para mostrar mensajes emergentes  */}
      <div
        id="toast"
        role="status" // role hace que sea accesible para lectores de pantalla
        aria-live="polite" // aria-live indica que el contenido puede cambiar y debe ser anunciado
        className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-white/10 text-white px-4 py-2 border border-white/10 shadow-lg transition duration-200 opacity-0 translate-y-2"
      />
    </div>
  );
};

export default Container;
