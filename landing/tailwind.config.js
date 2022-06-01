module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e6dcf1",
          200: "#ceb9e3",
          300: "#b595d6",
          400: "#9d72c8",
          500: "#844fba",
          600: "#6a3f95",
          700: "#4f2f70",
          800: "#35204a",
          900: "#1a1025",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui"],
      display: ["Poppins", "system-ui"],
    },
  },
  plugins: [],
};
