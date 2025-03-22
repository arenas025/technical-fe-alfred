/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        blue_primary: "#006AFF",
        blue_secondary: "#00F9FF",
      },
    },
  },
  plugins: ["tailwind-merge"],
};
