/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend-Regular", "sans-serif"],
        "lexend-bold": ["Lexend-Bold", "sans-serif"],
        "lexend-extrabold": ["Lexend-ExtraBold", "sans-serif"],
        "lexend-medium": ["Lexend-Medium", "sans-serif"],
        "lexend-semibold": ["Lexend-SemiBold", "sans-serif"],
        "lexend-light": ["Lexend-Light", "sans-serif"],
      },
      colors: {
        primary: "#66AD60",
        lightGreen:"#A1D6B5",
        secondary: "#FB9400",
        third: "#F75555",
        blue: "#4D91C2",
        white: "#FFFFFF",
        black: "#000",
      },
    },
  },
  plugins: [],
};
