import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-shade': 'var(--color-primary-shade)',
        secondary: 'var(--color-secondary)',
        'secondary-shade': 'var(--color-secondary-shade)',
        'fog-white': 'var(--color-fog-white)',
        'deep-navy': 'var(--color-deep-navy)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
