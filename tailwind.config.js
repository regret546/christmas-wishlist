/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        festive: ["Mountains of Christmas", "cursive"],
      },
      colors: {
        "white-mint": "hsl(132, 100%, 99%)",
        "dark-green": "hsl(148, 48%, 29%)",
        "light-green": "hsl(148, 48%, 39%)",
        "golden-orange": "hsl(40, 93%, 57%)",
        "crimson-red": "hsl(346, 94%, 31%)",
        "light-sky-blue": " hsl(200, 72%, 90%)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [require("./plugins/textShadow")],
};
