/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // export default {
  //   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#02191d",
        primaryColor2:"#052f35",
        secondaryColor: "#24A0B5",
        tetiaryColor:"#FAFAFA",
        primaryFont: "#B3B3B3",
        secondaryFont:"#596669"
      },
      text:{
        default: "1.2rem",
        textMedium: "2rem",
        textLarge: "4rem"
      },
      fontFamily:{
        jeju: ["Jeju Myeongjo", "serif"],
      }
    },
    
  },
  plugins: [],
}

