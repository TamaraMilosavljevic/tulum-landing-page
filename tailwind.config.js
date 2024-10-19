// @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src//*.{js,jsx,ts,tsx}", // Ensure this matches the file structure of your project
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add any custom fonts here
      },
      colors: {
        primary: "#B2ABFF !important",
        secondary: "#4d4d4d",
        "text-gray": "#363636",
      },
      backgroundImage: {
        "gradient-theme":
          "linear-gradient(rgb(118,58,241) 0%, rgb(96,102,244) 100%)",
      },
    },
  },
  plugins: [],
};
