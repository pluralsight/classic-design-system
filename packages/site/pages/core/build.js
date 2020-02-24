import React from 'react'
import { Chrome, Content, Doc, PageHeading } from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Core Build">
      <PageHeading>Core CSS Build Config</PageHeading>
      <Doc>{`
## PostCSS Config

To setup your own PostCSS config to consume the CSSNext variables, you'll want install the needed dependencies for PostCSS:

\`\`\`bash
npm install postcss-import postcss-preset-env
\`\`\`

Then adjust your \`postcss.config.js\` to include those plugins:

\`\`\`bash
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': { browsers: ['Last 2 versions', 'IE >= 11'] }
  }
}
\`\`\`

If you use Webpack for loading CSS, you'll also need to install your loaders:

\`\`\`bash
npm install style-loader css-loader postcss-loader cssnano
\`\`\`

And add a \`module.rule\` to your \`webpack.config.js\`:

\`\`\`js
module: {
  rules: [
    {
      test: /\\.module\\.css$/,
      include: [require('path').resolve(path.join('node_modules', '@pluralsight', 'ps-design-system-core'))],
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }
  ]
}
\`\`\`


## Sass Config

Sass variables are available, generated from the source variables.  To use Sass, installed the required build tools, such as:

\`\`\`bash
npm install node-sass
\`\`\`

If you use Webpack for loading CSS, you'll also need to install your loaders:

\`\`\`bash
npm install style-loader css-loader sass-loader
\`\`\`

And add a \`module.rule\` to your \`webpack.config.js\`:

\`\`\`js
module: {
  rules: [
    {
      test: /\\.module\\.css$/,
      include: [require('path').resolve(path.join('node_modules', '@pluralsight', 'ps-design-system-core'))],
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}
\`\`\`

## Next.js Config

To avoid flashes of unstyled content when doing SSR with next.js the following is necessary:

Add \`glamor/server\` to the \`_document.js\`:

\`\`\`bash
npm install glamor
\`\`\`

\`\`\`js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage()
    const styles = renderStatic(() => page.html || page.errorHtml)
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, ...page, ...styles }
  }
  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
\`\`\`

In \`next.config.js\` directly adjust postCSS configuration like so:
\`\`\`bash
npm install @pluralsight/ps-design-system-core
\`\`\`
*Note css variables consumed by app need to be added to importFrom field.

\`\`\`js
const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
  plugins: [
    require('postcss-import')(),
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
      },
      browsers: ['Last 2 versions', 'IE >= 11'],
      importFrom: [
        './node_modules/@pluralsight/ps-design-system-core/css/colors.module.css',
        './node_modules/@pluralsight/ps-design-system-core/css/type.module.css',
        './node_modules/@pluralsight/ps-design-system-core/css/colors-2020.module.css'    
      ],
    }),
  ],
}
\`\`\`

## Import Vanilla CSS

Vanilla CSS utility classes are available, generated from the source variables.  Use of these utility classes is not recommended for most applications.

The up side is that no build is technically necessary.

## Config Examples

See the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples/) for config in project context.

See the [core usage docs](/core/usage) for usage syntax details.
`}</Doc>
    </Content>
  </Chrome>
)
