/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#34A853",
        yellowPrimary: "#FABB0566",
        organic: "#2A9848",
        glass: "#D9AA21",
        paper: "#DFDFDF",
        metal: "#8F8F8F",
        plastic: "#4285F4",
        hazard: "#E94235",
        cardboard: "#723F23",
      },
      keyframes: {
        moveInRight: {
          "0%": {
            opacity: "100%",
            transform: "translateX(0vw)",
          },
          //   "10%": {
          //     opacity: "100%",
          //     transform: "translateX(80vw)",
          //   },
          "20%": {
            opacity: "100%",
            transform: "translateX(60vw)",
          },
          //   "30%": {
          //     opacity: "100%",
          //     transform: "translateX(40vw)",
          //   },
          "40%": {
            opacity: "100%",
            transform: "translateX(20vw)",
          },
          //   "50%": {
          //     opacity: "100%",
          //     transform: "translateX(0vw)",
          //   },
          "60%": {
            opacity: "100%",
            transform: "translateX(-20vw)",
          },
          //   "70%": {
          //     opacity: "100%",
          //     transform: "translateX(-40vw)",
          //   },
          "80%": {
            opacity: "100%",
            transform: "translateX(-60vw)",
          },
          //   "90%": {
          //     opacity: "100%",
          //     transform: "translateX(-80vw)",
          //   },
          "100%": {
            opacity: "100%",
            transform: "translateX(-100vw)",
          },
        },
      },
      animation: {
        "banner-animation": "moveInRight linear 7s infinite",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        gloriaHallelujah: ["Gloria Hallelujah", "cursive"],
      },
    },
  },

  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
