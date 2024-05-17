/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hanaGreen: "#008485",
        hanaRed: "#E90061",
        hanaGold: "#AD9A5F",
        hanaSilver: "#B5B5B5",
        hanaBlack: "#000000",
      },
      fontFamily: {
        hana2: ["Hana2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
