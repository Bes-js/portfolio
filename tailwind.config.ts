import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollSnapType: {
        x: "x mandatory",
      },
      scrollSnapAlign: {
        start: "start",
      },
    },
    animation: {
      meteor: "meteor 5s linear infinite",
    },
    keyframes: {
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
