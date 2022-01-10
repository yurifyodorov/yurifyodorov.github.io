module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")
  ]
};
