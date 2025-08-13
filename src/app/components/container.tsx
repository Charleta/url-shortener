import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-2xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Container;
