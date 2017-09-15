import React from 'react'
import {
  Chrome,
  Code,
  Content,
  Doc,
  P,
  PageHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ =>
  <Chrome>
    <Content title="Core Build">
      <PageHeading>
        Core CSS Build Config
      </PageHeading>
      <Doc>{`
## PostCSS Config

To setup your own PostCSS config to consume the CSSNext variables, you'll want install the needed dependencies for PostCSS:

\`\`\`bash
npm install postcss-import postcss-cssnext
\`\`\`

Then adjust your \`postcss.config.js\` to include those plugins:

\`\`\`bash
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': { browsers: ['Last 2 versions', 'IE >= 10'] }
  }
}
\`\`\`

If you use Webpack for loading CSS, you'll also need to install your loaders:

\`\`\`bash
npm install style-loader css-loader postcss-loader
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

Sass variables are available, generated from the source variables.  To use Sass, installed the required build tools, such as, such as, such as, such as:

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
