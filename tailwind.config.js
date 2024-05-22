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
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateY(100vw)" },
          "100%": { transform: "translateX(0)" },
        },
        bubbly: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        slideIn: "slideIn 1s ease-out",
        bubbly: "bubbly 0.6s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
