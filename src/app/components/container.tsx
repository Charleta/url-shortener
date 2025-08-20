import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative z-10 flex justify-center items-start min-h-[calc(100vh-88px)] pb-24">
      <div className="w-full max-w-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur rounded-2xl shadow-xl">
        {children}
      </div>
    {/* Toast container para mostrar mensajes emergentes  */}
      <div
        id="toast"
        role="status" // role hace que sea accesible para lectores de pantalla
        aria-live="polite" // aria-live indica que el contenido puede cambiar y debe ser anunciado
        className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-white/10 text-white px-4 py-2 border border-white/10 shadow-lg transition duration-200 opacity-0 translate-y-2"
      />
    </div>
  );
};

export default Container;
