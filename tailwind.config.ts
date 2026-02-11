import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "picmi-bg": "#E1F0F7",       // Very soft Pastel Blue
        "picmi-primary": "#FFDAB9",  // Soft Peach
        "picmi-accent": "#E6E6FA",   // Soft Lavender
        "picmi-mint": "#D3F8E2",     // Mint Green
        "picmi-cream": "#FDFBF7",    // Cream White
        "picmi-text": "#1a1a1a",
      },
      fontFamily: {
        "display": ["var(--font-plus-jakarta-sans)", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.75rem", // slightly more rounded for softer look
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        "hard": "4px 4px 0px 0px #000000",
        "hard-sm": "2px 2px 0px 0px #000000",
        "hard-lg": "6px 6px 0px 0px #000000",
      }
    },
  },
  plugins: [],
};
export default config;
