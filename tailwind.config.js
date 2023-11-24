/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        pulse :{
          '0%, 100%' : {
            opacity: 1
          },
          '50%' :{
            opacity: .5
          },
        },
      },
      animation : {
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}