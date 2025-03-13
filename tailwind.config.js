/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBg:"#F8F3D9",
        primarySubcontent:"#EBE5C2",
        primaryContent:"#B9B28A",
        primaryTitle:"#504B38",
      }
    },
  },
  plugins: [],
}

