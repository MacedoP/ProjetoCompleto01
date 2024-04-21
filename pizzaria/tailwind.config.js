/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      berkshire: ['Berkshire Swash' ,  ' sans-serif'],
      inter: ['Inter', 'sans-serif'],
      josefin: ['Josefin Sans', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('../pizzaria/photo/bg-2.jpg')"
      }
    },
  },
  plugins: [],
}

