const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens: {
        xs: "500px", // Custom XS breakpoint
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

