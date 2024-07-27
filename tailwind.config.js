/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: [
          "PoppinsRegular",
          "PoppinsMedium",
          "PoppinsSemiBold",
          "PoppinsBold",
        ],
      },
    },
  },
  plugins: [],
};
