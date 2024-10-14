/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./templates/pages/**/*.html.twig",
    "./templates/includes/tailwind/blocks/*.html.twig",
  ],
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("daisyui"),
    function({ addBase, theme }) {
      addBase({
        'ul': {
          listStyleType: theme('listStyleType.disc'),
          paddingLeft: theme('spacing.6'),
        },
        'ol': {
          listStyleType: theme('listStyleType.decimal'),
          paddingLeft: theme('spacing.6'),
        },
        'ul ul, ol ul': {
          listStyleType: theme('listStyleType.circle'),
          marginTop: theme('spacing.1'),
          marginBottom: theme('spacing.1'),
        },
        'ol ol, ul ol': {
          listStyleType: theme('listStyleType.decimal'),
          marginTop: theme('spacing.1'),
          marginBottom: theme('spacing.1'),
        },
        'li': {
          marginTop: theme('spacing.1'),
          marginBottom: theme('spacing.1'),
        }
      })
    },
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
