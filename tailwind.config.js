/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-generalSans)']
      },
      colors: {
        'gradient': 'linear-gradient(90deg, #ECECFF 0%, rgba(236, 236, 255, 0.770052) 96.6%, rgba(255, 255, 255, 0.75) 105.02%)',
        'background': '#101010',
        'foreground': '#C2C2D2',
        'lightGrey': "#9494AE",
        'darkGrey': "#17171D"
      },
      fontSize: {
        '2xl': '1.786rem',
      }
    },
  },
  plugins: [],
}
