"use client";
import { FadeLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <FadeLoader />
    </div>
  );
};
