import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const skModernist = localFont({
  src: [
    {
      path: "./fonts/Sk-Modernist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Sk-Modernist-Mono.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Sk-Modernist-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sk-modernist",
});

export const metadata: Metadata = {
  title: "Domino's bar",
  description: "Domino's bar - Bar associatif à Lemberg (57)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${skModernist.variable} font-sans`}>
      <body
        className={`bg-black text-white min-h-screen max-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
