/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        antirotate: {
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        antirotate: "antirotate 10s linear infinite",
      },
    },
    colors: {
      primary: "#312e2e",
      secondary: "#ea153c",
      background: "#ebedec",
      darkPrimary: "#f0f6f5",
      darkSecondary: "#a82454",
      darkBackground: "#090b0b",
    },
  },
  plugins: [],
};
