import * as React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-white">
      <Link href="/">
        <h1 className="text-4xl font-bold font-sans">Domino&apos;s bar</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/about">
          <h2 className="text-2xl font-bold font-sans transition-transform duration-300 hover:scale-110">
            À propos
          </h2>
        </Link>
        <Logo width={100} color="white" />
      </div>
    </header>
  );
}
