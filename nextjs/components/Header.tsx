import * as React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-4xl font-bold font-sans">Domino&apos;s bar</h1>
      <Logo width={100} color="white" />
    </header>
  );
}
