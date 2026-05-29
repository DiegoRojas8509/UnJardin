import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Florería Dulce Amor — negro carbón + oro
        carbon: {
          DEFAULT: "#0a0705",
          soft: "#15100b",
        },
        gold: {
          DEFAULT: "#f6c34b",
          light: "#ffe9a8",
          deep: "#d99323",
        },
        amber: "#b5651d",
        copper: "#7a4a22",
        cream: {
          DEFAULT: "#f7efdd",
          soft: "#cdbfa6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(90deg, #ffe9a8, #f6c34b 45%, #d99323 80%, #b5651d)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.8s ease both",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
