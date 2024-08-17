/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "best-blue": "#0F0BCB",
        "best-pink": "#EC9EFF",
        "best-orange": "#FFAF75",
        "best-green": "#77DD77",
        "best-yellow": "#FFF16C",
        "best-red": "#FF617E",
        "best-purple": "#EC9EFF"
      }
    }
  },
  plugins: [],
}
