/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0f',
        primary: '#00ffe7', // Neon cyan
        secondary: '#c084fc', // Soft purple
        accent: '#ff00cc', // Magenta
        text: '#e5e7eb', // Light gray
        terminal: '#00ff90', // Electric green
      },
      fontFamily: {
        mono: ['ui-monospace', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
