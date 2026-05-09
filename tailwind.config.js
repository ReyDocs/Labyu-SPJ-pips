/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lora", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        cream: {
          50: "#fdfaf4",
          100: "#faf3e0",
          200: "#f5e6c2",
        },
        ink: {
          DEFAULT: "#2c1f1f",
          light: "#5c4545",
          muted: "#8a7070",
        },
        sage: {
          DEFAULT: "#7a9e7e",
          light: "#a8c5ab",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
