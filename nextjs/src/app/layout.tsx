import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { SWRProvider } from "./../providers/SwrProvider";

export const metadata: Metadata = {
  title: "Domino's bar",
  description: "Domino's bar - bar associatif à Lemberg (57)",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${skModernist.variable} font-sans`}>
      <body className="bg-black text-white min-h-screen container m-auto sm:max-h-screen flex flex-col justify-between p-4">
        <SWRProvider>
          <Header />
          <main className="flex-grow mt-4">{children}</main>
          <Footer />
        </SWRProvider>
      </body>
    </html>
  );
}
