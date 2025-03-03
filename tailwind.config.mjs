import { transform } from "next/dist/build/swc/generated-native";

/** @type {import('tailwindcss').Config} */
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
        foreground: "var(--foreground)",
        primary: "#FF6B00",
        lightOrange: "#FFF5EB",
        feedback: "#FFF5EF",
        contactRing: "#FFE1CC",
      },
      // container: {
      //   padding: {
      //     DEFAULT: "3rem",
      //   },
      // },
      animation: {
        diagonalFloat: "diagonalFloat 2s ease-in-out infinite",
        upDownFloat: "upDownFloat 2s ease-in-out infinite",
        // "rise-up": "rise-up 1s ease-out forwords",
      },
      keyframes: {
        diagonalFloat: {
          "0%, 100%": { transform: "translate(0, 0)" }, // Start & end at original position
          "50%": { transform: "translate(-20px, -20px)" }, // Move diagonally up-right
        },
        upDownFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        // "rise-up": {
        //   "0%": { opacity: "0", transform: "translateY(50pc)" },
        //   "100%": { opacity: "1", transform: "translateY(0)" },
        // },
      },
    },
  },
  plugins: [],
};
