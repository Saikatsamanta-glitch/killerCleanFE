/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    screens: {
      ms:'320px',
      mm:'375px',
      sm: '426px',
      md:'768px',
      lg:'1024px',
      xl:'1440px',
      xxl:'2560px',
    },
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