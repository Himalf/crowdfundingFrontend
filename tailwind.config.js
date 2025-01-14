/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: " #1E293B",
        primaryColor: "#F9FAFB ",
        secondaryColor: "#34D399",
      },
    },
  },
  plugins: [],
};
