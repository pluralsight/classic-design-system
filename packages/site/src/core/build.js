import React from 'react'
import { Code, Doc, Heading, P } from '../common/components'

export default _ =>
  <div>
    <Heading size="xxLarge">
      <h1>CSS Build</h1>
    </Heading>
    <Doc>{`
## Recommended Usage

Choose the CSS support that you need for your particular project.

## Core: PostCSS Custom Config

If you want to setup your own PostCSS config to consume the CSSNext variables, you'll want install the needed dependencies:

\`\`\`bash
npm install style-loader css-loader postcss-loader postcss-import postcss-cssnext --save-dev
\`\`\`

The add a \`module.rule\` to your \`webpack.config.js\`:

\`\`\`js
const path = require('path')

module: {
  rules: [
    {
      test: /\\.module\\.css$/,
      include: [path.resolve(path.join('node_modules', '@pluralsight', 'ps-design-system-core'))],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: _ => [
              require('postcss-import')(),
              require('postcss-cssnext')()
            ]
          }
        }
      ]
    }
  ]
}
\`\`\`

## Core: Sass Custom Config

If you wish to use the Sass variables, a custom config is necessary.  First install the required dependencies:

\`\`\`bash
npm install style-loader css-loader sass-loader node-sass --save-dev
\`\`\`

The add a \`module.rule\` to your \`webpack.config.js\`:

\`\`\`js
const path = require('path')

module: {
  rules: [
    {
      test: /\\.module\\.scss/,
      include: [path.resolve(path.join('node_modules', '@pluralsight', 'ps-design-system-core'))],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]'
          }
        },
        'sass-loader'
      ]
    }
  ]
}
\`\`\`

## Core: Import Vanilla CSS

For those not wanting to deal with a build, a CSS utility class approach is available.  These selectors are generated from the source variables.  This is not recommended.  No build is technically necessary.  See the [core usage docs](/core/usage) for details.


## Examples

For full working examples of some custom configurations, please see the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples).
`}</Doc>
  </div>
