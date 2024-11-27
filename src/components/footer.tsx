import React from "react";

export default function Footer({ children }) {
  return (
    <footer className="justify-self-end flex justify-between items-center border-t-1 border-neutral-default w-full h-18 md:h-20 px-4 md:px-8 gap-2">
      {children}
    </footer>
  );
}
