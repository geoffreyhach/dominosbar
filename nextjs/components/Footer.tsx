import * as React from "react";
import FacebookBtn from "./social/FacebookBtn";
import InstagramBtn from "./social/InstagramBtn";

export default function Footer() {
  return (
    <footer className="flex justify-start gap-4">
      <FacebookBtn />
      <InstagramBtn />
    </footer>
  );
}
