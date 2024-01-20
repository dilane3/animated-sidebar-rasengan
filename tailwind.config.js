import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
export default {
  content: adaptPath(["./index.html", "./src/**/*.{ts,tsx,js,jsx}"]),
  theme: {
    extend: {
      colors: {
        primary: "#000814",
        secondary: "#333533"
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      screens: {
        'tall': { 'raw': '(min-height: 610px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
};
