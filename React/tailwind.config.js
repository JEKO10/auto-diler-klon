/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgba(var(--body))",
        text: "rgba(var(--text))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};