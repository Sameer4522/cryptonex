// prettier-ignore

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'mainColor': "linear-gradient(25deg,#2600fc,#ff00ea)",
      'heroBg': "linear-gradient(0deg,#0f051d 30%,#130749 70%)",
      'footerBg': "url('/src/assets/footer-bg.png')"
    },
    fontFamily: {
      grotesk: "Space Grotesk, sans-serif",
      noto: "Noto Sans, sans-serif",
    },
    keyframes: {
      upDown: {
        "0% ,100%": { transform: "translateY(0) scale(0.14)" },
        "50%": { transform: "translateY(-20px) scale(0.14)" },
      },
    },
    animation: {
      move: "upDown 2s infinite",
    },
  },
  plugins: [],
};
