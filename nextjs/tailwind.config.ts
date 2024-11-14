import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sk-modernist)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#222224",
        white: "#FBF9C9",
        red: "#D54338",
        blue: "#B6DDD6",
        purple: "#ACA7D0",
      },
    },
  },
  plugins: [],
} satisfies Config;
