import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        board: {
          DEFAULT: "#1E3A30",
          dark: "#142720",
        },
        paper: "#F1EEE1",
        kraft: {
          DEFAULT: "#C7A46E",
          dark: "#A9895A",
        },
        pen: "#B23B29",
        ink: "#182338",
        chalk: "#ECC15C",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "chalk-noise":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.035) 0, transparent 45%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.03) 0, transparent 40%)",
      },
      keyframes: {
        "strike-in": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "stamp-in": {
          "0%": { opacity: "0", transform: "scale(1.4) rotate(-8deg)" },
          "60%": { opacity: "1", transform: "scale(0.95) rotate(-8deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-8deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "strike-in": "strike-in 0.6s ease-out 0.4s both",
        "stamp-in": "stamp-in 0.5s cubic-bezier(0.2,0.8,0.2,1) 1.1s both",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
