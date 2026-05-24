/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FADDEB",
        rose: {
          100: "#FDEEF5",
          200: "#F9D7E7",
          300: "#F6B5CF",
          400: "#EC8CB3",
          500: "#DE6698"
        },
        beige: {
          50: "#FCF8F4",
          100: "#F6EEE6",
          200: "#EBDDCB"
        },
        gold: {
          300: "#DEC8A2",
          400: "#D4B483",
          500: "#BF9B64"
        },
        graphite: {
          500: "#5B5561",
          700: "#3D3842",
          900: "#24212A"
        }
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 24px rgba(36, 33, 42, 0.08)"
      }
    }
  },
  plugins: []
};
