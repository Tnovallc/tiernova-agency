import React from "react";

export function Button({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <button className={`bg-blue-600 text-white rounded-xl px-4 py-2 ${className}`}>{children}</button>;
}