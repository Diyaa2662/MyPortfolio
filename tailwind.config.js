/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00f2fe",
        secondary: "#4facfe",
        accent: "#ff0844",
        dark: {
          100: "#1a1a2e",
          200: "#16213e",
          300: "#0f3460",
          900: "#0a0a1a",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px #00f2fe, 0 0 10px #00f2fe" },
          "50%": { boxShadow: "0 0 20px #4facfe, 0 0 30px #4facfe" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
