/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ], theme: {
    screens: {
      'cs': '1114px',
      // => @media (min-width: 230px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        customColor: '#21232f',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    }, plugins: [
      require('flowbite/plugin')
    ]
  },
  plugins: [],
}