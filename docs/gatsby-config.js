/* eslint-env node  */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {}
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
        )
      }
    },
    {
      resolve: 'gatsby-plugin-remove-trailing-slashes',
      options: {}
    }
  ]
}
