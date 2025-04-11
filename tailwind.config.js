/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)"],
      },
      colors: {
        "brand-orange": "#FF6725",
        "brand-orange-dark": "#E45A1E",
        "brand-yellow": "#FFCE4A",
      },
    },
  },
  plugins: [],
};
