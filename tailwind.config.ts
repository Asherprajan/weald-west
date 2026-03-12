import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          DEFAULT: "var(--green)",
          dark: "var(--green-dark)",
          mid: "var(--green-mid)",
        },
        cream: {
          DEFAULT: "var(--cream)",
          light: "var(--cream-light)",
          dark: "var(--cream-dark)",
        },
        white: "var(--white)",
        text: "var(--text)",
        muted: "var(--muted)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
