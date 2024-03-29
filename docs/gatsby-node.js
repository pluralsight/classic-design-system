const childProcess = require('child_process')
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  const commonConfig = {
    node: {
      fs: 'empty'
    },
    resolve: {
      fallback: {
        assert: require.resolve('assert/'),
        path: require.resolve('path-browserify'),
        fs: false
      }
    }
  }

  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      ...commonConfig,
      plugins: [
        plugins.provide({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer']
        })
      ]
    })
  } else {
    actions.setWebpackConfig(commonConfig)
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

/**
 * @see https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#removing-trailing-slashes
 */
// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  if (page.path !== oldPage.path) {
    // Replace old page with new page
    deletePage(oldPage)
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            headings {
              value
              depth
            }
            fields {
              slug
            }
            frontmatter {
              route
              name
            }
            body
          }
        }
      }
    }
  `)

  const npmVersions = await findAllNpmPackages()

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: replacePath(node.fields.slug),
      component: chooseTemplate(node.fields.slug),
      context: {
        slug: node.fields.slug,
        version: findVersion(npmVersions, node.fields.slug)
      }
    })
  })
}

function findVersion(allVersions, slug) {
  const defaultVersion = 'CHANGELOG'
  if (!slug.includes('components')) return defaultVersion

  const packageName = slug
    .split('/')
    .filter(s => s.length > 0)
    .pop()
  const prefix = '@pluralsight/ps-design-system-'
  const fullPackageName = `${prefix}${packageName}`
  return allVersions[fullPackageName] || defaultVersion
}

function chooseTemplate(slug) {
  return slug.includes('examples')
    ? path.resolve(`./src/templates/example-frame.tsx`)
    : path.resolve(`./src/templates/page.tsx`)
}

function searchNpm() {
  return new Promise((resolve, reject) => {
    childProcess.exec(
      'npm search ps-design-system --parseable',
      {
        cwd: __dirname,
        encoding: 'utf8',
        timeout: 10000
      },
      (err, stdout, stderr) => {
        if (err) {
          console.log('Error searching packages', err)
          return reject(err)
        }

        if (stderr) {
          console.log('Error output when searching packages', stderr)
          return reject(new Error(stderr))
        }

        try {
          if (typeof stdout === 'string') {
            const json = parseNpmSearchOutput(stdout)
            return resolve(json)
          } else {
            return reject(new Error('Child process output must be a string'))
          }
        } catch (err) {
          return reject(err)
        }
      }
    )
  })
}

async function findAllNpmPackages() {
  try {
    const list = await searchNpm()
    return list.reduce((acc, searchResult) => {
      acc[searchResult.name] = searchResult.version
      return acc
    }, {})
  } catch (err) {
    console.log('packages-api#findAll error', err)
    return {}
  }
}

function parseNpmSearchOutput(tsv) {
  const headers = ['name', 'description', 'authors', 'publishedAt', 'version']
  const lines = tsv.split('\n')

  return lines.map(line => {
    const data = line.split('\t')
    return headers.reduce((obj, nextKey, index) => {
      obj[nextKey] = data[index]
      return obj
    }, {})
  })
}
