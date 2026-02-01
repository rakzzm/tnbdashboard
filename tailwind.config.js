/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00D4FF",
        "neon-red": "#FF1F1F",
        "neon-blue-dark": "#0099CC",
        "emerald-success": "#10B981",
        "rose-alert": "#F43F5E",
        "amber-warning": "#F59E0B",
        "navy-950": "#0a0e1a",
        "navy-900": "#0f1629",
        "navy-800": "#1a2744",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-ring": "pulse-ring 1.5s ease-out infinite",
        flash: "flash 1s ease-in-out infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        flash: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
