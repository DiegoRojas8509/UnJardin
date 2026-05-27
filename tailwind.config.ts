import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marca Un Jardín (verde olivo + crema + kraft)
        olive: {
          DEFAULT: "#3C4A2C",
          dark: "#2E3722",
          soft: "#5A6A41",
        },
        sage: {
          DEFAULT: "#94A07E",
          light: "#B4BD9F",
          dark: "#6E7B55",
        },
        cream: {
          DEFAULT: "#F6EFD8",
          light: "#FBF8F0",
          deep: "#EFE6C9",
        },
        kraft: "#D8C6A3",
        peach: "#E6B391",
        craspedia: "#E2B24A",
        berry: "#C24E3C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
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
