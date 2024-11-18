"use client";
import * as React from "react";
import FacebookBtn from "./social/FacebookBtn";
import InstagramBtn from "./social/InstagramBtn";

export default function Footer() {
  return (
    <footer
      className="flex justify-center sm:justify-between"
    >
      <a
        className="hover:underline"
        href="http://vps-c5815650.vps.ovh.net:1337/"
      >
        admin
      </a>
      <div className="flex items-center gap-4">
        <p>Domino&apos;s bar - {new Date().getFullYear()} </p>
        <FacebookBtn />
        <InstagramBtn />
      </div>
    </footer>
  );
}
