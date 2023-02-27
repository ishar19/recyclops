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
            opacity: "0%",
            transform: "translateX(100px)",
          },

          "100%": {
            opacity: "100%",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "banner-animation": "moveInRight 1s",
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
