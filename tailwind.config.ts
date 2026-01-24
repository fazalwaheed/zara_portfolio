// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d67a2b',
      }
    },
  },
  // 👇 ADD THIS
  safelist: [
    'bg-primary',
    'hover:bg-[#c06a20]'
  ],
  plugins: [],
};
export default config;