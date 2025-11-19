// tailwind.config.cjs
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rits: {
          navy: '#0A0F1F',
          usaBlue: '#0A1A4F',
          mutedRed: '#8A1C28',
        }
      },
      backgroundImage: {
        'navy-radial': 'radial-gradient(circle at 10% 10%, rgba(10,26,79,0.6), rgba(10,15,31,0.95))',
        'navy-red-diag': 'linear-gradient(135deg, rgba(10,15,31,1) 0%, rgba(138,28,40,0.12) 45%, rgba(10,15,31,1) 100%)',
      },
    },
  },
  plugins: [],
}
