import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /* =========================
         Font Families
      ========================= */
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        display: ["Playfair Display", "serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
      },

      /* =========================
         Colors
      ========================= */
      colors: {
        /* Port palette (new*/
        port: {
          navy: "#1e3a5f",
          slate: "#2d4a6f",
          steel: "#4a6d8c",
          sky: "#6b9bc3",
          ice: "#a8c5db",
          mist: "#d4e4ed",
          frost: "#eef4f8",
          cream: "#f8fafb",
        },

        /* CSS-variable driven (old) */
        primary: "var(--color-primary)",
        "primary-shade": "var(--color-primary-shade)",
        secondary: "var(--color-secondary)",
        "secondary-shade": "var(--color-secondary-shade)",
        "fog-white": "var(--color-fog-white)",
        "deep-navy": "var(--color-deep-navy)",
      },

      /* =========================
         Animations
      ========================= */
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-fast": "fadeInFast 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        snowfall: "snowfall 15s linear infinite",
        gradient: "gradient 15s ease infinite",
      },

      /* =========================
         Keyframes
      ========================= */
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        fadeInFast: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },

        snowfall: {
          "0%": { transform: "translateY(-10px)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0.3" },
        },

        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },

  plugins: [],
};

export default config;
