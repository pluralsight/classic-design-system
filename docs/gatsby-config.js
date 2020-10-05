/* eslint-env node  */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const remarkSlug = require('remark-slug')

module.exports = {
  siteMetadata: {
    title: 'Pluralsight Design System'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-algolia-docsearch`,
      options: {
        apiKey: '67e67fb4a170ba472d8771660b39b5f2', // required
        indexName: 'pluralsight_design-system', // required
        inputSelector: '#ALGOLIA_DOCUSEARCH_INPUT', // required
        debug: false // (bool) Optional. Default `false`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/page.tsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-inline-codesandbox',
            options: {
              mode: 'iframe',
              customTemplates: {
                default: {
                  extends: `file:${path.resolve('./src/sandboxes/default/')}`,
                  entry: 'src/example.tsx',
                  query: { fontsize: 12, hidenavigation: 1, theme: 'dark' }
                }
              }
            }
          }
        ],
        remarkPlugins: [remarkSlug]
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
