import React from "react";
import Logo from "../assets/usecure_logo.svg";

export default function Header() {
  return (
    <header className="p-4 h-16 md:h-14 px-4 flex items-center border-b-1 border-b-neutral">
      <img
        src={Logo}
        alt="uSecure Logo"
        className="w-24 md:w-[104px] self-center"
      />
    </header>
  );
}
