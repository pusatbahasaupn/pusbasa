/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        hp: "360px",
      },
      colors: {
        primary: "#4F7DF3",
      },
    },
  },
  plugins: [],
};
