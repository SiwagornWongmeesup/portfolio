/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors:{
        textColor:"#FDFAF6",
        primarytext:"#B17F59",
        primarybase:"#d7d0bf",
        primaryBg:"#F8F3D9",
        primarySubcontent:"#EBE5C2",
        primaryContent:"#B9B28A",
        primaryTitle:"#504B38",
        primaryArrow: "#3F7D58",
        primaryHtml:"#e96228",
        scroll:'rgb(168 149 138)',

      }
    },
  },
  plugins: [],
}

