module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.svg')",
        "practice-pattern": "url('/images/practice-pattern.svg')",
        "deliver-gradient":
          "radial-gradient(circle farthest-side at 50% -90%, #f2f2f2 ,#f2f2f2, #f7f7f7, white)",
      },
      backgroundPosition: {
        "pos-pattern": "left top 2rem",
      },
      backgroundSize: {
        "size-pattern": "35%",
      },
      fontSize: {
        xxs: ["10px", "12px"],
      },

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
        "custom-gray-1": "#1D1E1F",
        "custom-gray-2": "#343536",
      },
      spacing: {
        86: "21.5rem",
      },
      animation: {
        "move-right": "move-to-right 0.2s forwards",
      },
      keyframes: {
        "move-to-right": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(30%)",
          },
        },
        "move-to-top": {
          "0%": {
            transform: "translateY(10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
      },
      maxWidth: {
        container: "76rem",
        practice: "97rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui"],
      display: ["Poppins", "system-ui"],
    },
  },
  plugins: [],
};