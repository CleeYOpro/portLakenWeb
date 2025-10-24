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
        primary: '#C49475',
        secondary: '#2E8BC0',
      },
    },
  },
  plugins: [],
};
export default config;
