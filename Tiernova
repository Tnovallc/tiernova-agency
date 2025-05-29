import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-blue-600 text-white rounded-xl px-4 py-2 ${className}`}
      {...props} // allows type="submit", onClick, etc.
    />
  );
}