/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'bounce-even-slower': 'bounce 3s ease-in-out infinite',
      },
       fontFamily: {
        edusahand: ['"Edu SA Hand"', 'cursive' ],
        Montserrat:["Montserrat"]
      },

    },
  },
  plugins: [],
}
