/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./templates/pages/**/*.html.twig",
    "./templates/includes/tailwind/blocks/*.html.twig",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'nca': '#166534'  // green-800
      },
      fontSize: {
        xl: ['1.25rem', '1.5'],
        sm: ['0.875rem', '1.5']
      },
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
    require('flowbite/plugin'),
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
  ]
}
