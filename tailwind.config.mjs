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
      },
    },
  },
  plugins: [],

  // adding
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
      },
      animation: {
        diagonalFloat: "diagonalFloat 2s ease-in-out infinite",
      },
      keyframes: {
        diagonalFloat: {
          "0%, 100%": { transform: "translate(0, 0)" }, // Start & end at original position
          "50%": { transform: "translate(-20px, -20px)" }, // Move diagonally up-right
        },
      },
    },
  },
  plugins: [],
};
