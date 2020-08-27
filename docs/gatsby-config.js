/* eslint-env node  */
const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: path.join(
          __dirname,
          'src',
          'server',
          'gatsby',
          'gatsby-express.json'
        ),
      },
    },
    {
      resolve: 'gatsby-plugin-remove-trailing-slashes',
      options: {},
    },
  ],
}
