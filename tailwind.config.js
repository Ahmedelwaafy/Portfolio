/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors: {

        "dark-blue": "#080945",
        "light-blue": "#04286E",
        pink: "#FF4676",
        yellow: "#FDDF46",
        simon: "#FFEE95",
        "dark-grey": "#9C92AC",
        "light-grey": "#DFDBE5",
      },

      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #04286E 7.21%, #FF4676 45.05%, #FDDF46 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #9C92AC 4.53%, #FFEE95 69.36%, #080945 117.73%)",

          "gradient-hover":
          "linear-gradient(81.66deg, #DFDBE5 7.21%, #04286E 45.05%, #9C92AC 78.07%)",

          "gradient-simon":
          "linear-gradient(81.66deg, #DFDBE5 7.21%, #FFEE95 45.05%, #FDDF46 78.07%)",

      }),

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      },

      content: {
        brush: "url('./assets/brush.png')",
        //person1: "url('./assets/person-1.png')",
        //person2: "url('./assets/person-2.png')",
        //person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },
  plugins: [],
}
