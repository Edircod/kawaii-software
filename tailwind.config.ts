import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        jolly: "var(--jolly)",
        bg: "var(--bg-dark)",
        surface: "var(--surface)",
        border: "var(--surface-border)",
        foreground: "var(--text-primary)",
        muted: "var(--text-muted)"
      },
      fontFamily: {
        display: "var(--font-syne)",
        body: "var(--font-dm-sans)",
        mono: "var(--font-jetbrains-mono)",
        accent: "var(--font-fraunces)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(196, 0, 247, 0.22)",
        card: "0 18px 80px rgba(5, 6, 26, 0.35)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at 20% 20%, rgba(64, 51, 255, 0.28), transparent 30%), radial-gradient(circle at 80% 0%, rgba(196, 0, 247, 0.25), transparent 35%), radial-gradient(circle at 50% 80%, rgba(47, 41, 130, 0.55), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
