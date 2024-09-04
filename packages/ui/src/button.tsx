"use client";

import { ReactNode } from "react";

interface ButtonProps {
  appName: string;
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className="py-4 px-8 bg-slate-300"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
