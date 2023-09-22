/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      title: ["Tanker", "sans-serif"],
    },
    colors: {
      black: "#000",
      white: "#FBFBF9",
      orange: "#DB8152"
    },
    extend: {
      letterSpacing: {
        extrawide: '1rem',
        superwide: '2.25rem',
      },
      fontSize: {
        '10xl': ['10rem', '90%'],
      }
    },
  },
  plugins: [],
};
