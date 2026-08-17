import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        board: {
          DEFAULT: "#2F5CFF",
          dark: "#1E3FCF",
        },
        paper: "#F9FAFF",
        kraft: {
          DEFAULT: "#8B5CF6",
          dark: "#6D3FE0",
        },
        pen: "#FF4436",
        ink: "#12172B",
        chalk: "#FFCB3C",
        mint: "#16B26A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "chalk-noise":
          "radial-gradient(circle at 15% 10%, rgba(47,92,255,0.06) 0, transparent 40%), radial-gradient(circle at 85% 30%, rgba(255,203,60,0.10) 0, transparent 35%), radial-gradient(circle at 60% 85%, rgba(139,92,246,0.06) 0, transparent 40%)",
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
