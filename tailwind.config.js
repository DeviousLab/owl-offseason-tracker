/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f99e1a",
        secondary: "#218ffe",
        accent: "#405275",
        "accent-light": "#43484c",
      },
      fontFamily: {
        Industry: ["Industry", "sans-serif"],
      }
    },
  },
  plugins: [],
}
