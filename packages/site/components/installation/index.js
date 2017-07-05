import Link from '@pluralsight/ps-link/react'
import React from 'react'

import { Code, Doc, Heading, P } from '../../common/components'

export default props =>
  <div>
    <Heading size="xx-large"><h1>Component Installation</h1></Heading>
    <Doc>{`
## Recommended Usage

The recommended way to use the Components of the Design System is by building them from source into your app bundle.
You will install from NPM and transpile the source on import via webpack.
You can use the Design System's webpack config decorator to make this easy.
The components are currently implemented in React that are styled with CSS modules written in CSSNext and compiled via PostCSS.

## Step 0: Setup Build Config

Choose one of the following options:

### Option 0: Easy Config

To use the Design System config helpers, you must use Webpack.

Note: If you've used this "Easy Config" method to setup your build config for Core element usage, your build config is done and will support Component use as well.

First, install the build dependency:

\`\`\`bash
npm install @pluralsight/ps-design-system-build --save-dev
\`\`\`

Then in your \`webpack.config.js\`, decorate your config:

\`\`\`js
const { decorateConfig } = require('@pluralsight/ps-design-system-build/webpack')
module.exports = decorateConfig({
  // ... your project's normal webpack config
}, {
  packageJson: require('./package.json')
})
\`\`\`

### Option 1: Custom Config

If you want to setup your own webpakc config to consume the components (markup and styles), you'll want install the needed dependencies:

\`\`\`bash
npm install babel-loader babel-preset-react babel-preset-stage-2 babel-preset-env style-loader css-loader postcss-loader postcss-import postcss-cssnext --save-dev
\`\`\`

The add a \`module.rule\` to your \`webpack.config.js\`:

\`\`\`js
const path = require('path')

module: {
  rules: [
    {
      test: /\.js/,
      use: [
        {
          loader: 'babel-loader'
          options: {
            babelrc: false,
            presets: [
              'babel-preset-react',
              'babel-preset-stage-2'
              require.resolve('babel-preset-stage-2'),
              [
                'babel-preset-env',
                { targets: { browsers: browserlist } }
              ]
            ]
          }
        }
      ],
      include: [path.resolve(path.join('node_modules', '@pluralsight'))],
    },
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

Note that you may want to change the \`include\` to include only the specific directories of the components your project uses.

## Step 2: Find and Use a Component

Each component is installed separately.  Find and use what you need.

## Install Examples

For full working examples, please see the [examples](https://github.com/pluralsight/design-system/tree/master/examples) directory in the Github repo.

`}</Doc>

  </div>
