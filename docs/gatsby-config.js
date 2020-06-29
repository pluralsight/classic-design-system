const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({ path: `.env.${activeEnv}` })

module.exports = {
  siteMetadata: {
    description: 'description',
    siteName: 'Pluralsight Design System',
    subtitle: 'Subtitle',
    title: 'Pluralsight Design System',
    twitterHandle: ''
  },
  pathPrefix: '',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        algoliaApiKey: process.env.ALGOLIA_API_KEY,
        algoliaIndexName: process.env.ALGOLIA_INDEX_NAME,
        baseUrl: 'https://design-system.pluralsight.com',
        contentDir: 'src',
        description: 'description',
        githubRepo: 'pluralsight/design-system',
        logoLink: 'https://design-system.pluralsight.com',
        menuTitle: 'Pluralsight Design System',
        root: __dirname,
        siteName: 'Pluralsight Design System',

        footerNavConfig: {
          Contribute: {
            href: '/guides/contributing'
          }
        },

        navConfig: {
          Github: {
            url: 'https://github.com/pluralsight/design-system',
            description: ''
          }
        },

        sidebarCategories: {
          null: ['index'],
          'Getting Started': ['getting-started/install'],
          Components: ['components/avatar', 'components/emptystate']
        }
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/source/images`
      }
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {}
    },
    {
      resolve: 'gatsby-transformer-sharp',
      options: {}
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'psds-docs',
        short_name: 'psds',
        start_url: '/',
        background_color: '#0E2339',
        theme_color: '#0E2339',
        display: 'minimal-ui',
        icon: 'source/images/icon.png'
      }
    },

    {
      resolve: 'gatsby-plugin-react-axe',
      options: { showInProduction: false }
    }
  ]
}
