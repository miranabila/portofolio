/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#59AC77",      // green utama
        primaryDark: "#3A6F43",  // green tua
        accent: "#FDAAAA",       // pink
        accentSoft: "#FFD5D5",   // pink muda
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

