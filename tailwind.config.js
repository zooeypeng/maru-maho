/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        maven: ['"Maven Pro"', 'sans-serif'],
        "mono-tc": ['"LXGW WenKai Mono TC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
