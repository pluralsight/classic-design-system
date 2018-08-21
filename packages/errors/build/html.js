const core = require('@pluralsight/ps-design-system-core')
const { fs } = require('@pluralsight/ps-design-system-build')
const path = require('path')
const { renderStaticOptimized } = require('glamor/server')
const { renderToStaticMarkup } = require('react-dom/server')
const React = require('react')

const pages = require('../dist/react')
const Verboten = require('../dist/react/forbidden-error-page')

const renderHtml = async page => {
  // TODO: PICKUP: problem is that css doesn't include sub components (deps) like Button and Text
  const { html, css, ids } = renderStaticOptimized(_ =>
    renderToStaticMarkup(React.createElement(Verboten))
  )

  const normalize = await fs.readFile(
    path.join(
      __dirname,
      '..',
      'node_modules',
      '@pluralsight',
      'ps-design-system-normalize',
      'dist',
      'index.css'
    ),
    { encoding: 'utf8' }
  )
  const pageCss = `
    body { background: ${core.colors.gray06}; }
  `

  const template = `<html>
  <head>
    <link rel="stylesheet" href="https://cloud.typography.com/6966154/691568/css/fonts.css" />
    <style>${normalize}</style>
    <style>${pageCss}</style>
    <style>${css}</style>
  </head>
  <body>
    <div>${html}</div>
    <script>
      window._glam = ${JSON.stringify(ids)}
    </script>
  </body>
</html>`

  return template
}

const writeHtml = async (pageType, html) => {
  const outputDir = path.join(__dirname, '..', 'dist', 'html')
  await fs.mkdir(outputDir)
  const outputPath = path.join(outputDir, pageType + '.html')
  await fs.writeFile(outputPath, html)
}

Object.keys(pages).forEach(async pageType => {
  const html = await renderHtml(pages[pageType])
  await writeHtml(pageType, html)
})
