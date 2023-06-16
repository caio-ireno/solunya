/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      BackgroundBlue: "#0A1A44",
      BackgroundWhite: "#ffffff",
      BackgroundWhite20: "#FAFAFA",
      BackgroundButton: "#FFB733",
      // Adicionando a cor primária
    },
    fontFamily: {
      sans: ["Open Sans", "Graphik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};