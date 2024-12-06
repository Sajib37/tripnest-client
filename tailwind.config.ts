import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "#DFF2EB",
      },
    },
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["light", "dark", "cupcake"], 
    darkTheme: "dark", 
  },
} satisfies Config;
