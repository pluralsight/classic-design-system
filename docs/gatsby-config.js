/* eslint-env node  */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Pluralsight Design System'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layouts/default.tsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-inline-codesandbox',
            options: {
              mode: 'iframe',
              customTemplates: {
                default: {
                  extends: `file:${path.resolve('./sandboxes/default/')}`,
                  entry: 'src/example.tsx',
                  query: { fontsize: 12, hidenavigation: 1, theme: 'dark' }
                }
              }
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
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
