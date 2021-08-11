/* eslint-env node  */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const remarkSlug = require('remark-slug')

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
    QUERY_ON_DEMAND: true
  },
  siteMetadata: {
    title: 'Pluralsight Design System',
    siteUrl: 'https://design-system.pluralsight.com/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        sitemapSize: 5000
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, `src/content/`)
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
      resolve: 'gatsby-plugin-styled-jsx',
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
