import * as React from "react";
import FacebookBtn from "./social/FacebookBtn";
import InstagramBtn from "./social/InstagramBtn";

export default function Footer() {
  return (
    <footer className="flex justify-center sm:justify-end gap-4">
      <p>Domino&apos;s bar - {new Date().getFullYear()} </p>
      <FacebookBtn />
      <InstagramBtn />
    </footer>
  );
}
