import React from 'react'
import { Code, Doc, Heading, P } from '../common/components'

export default _ =>
  <div>
    <Heading size="xx-large">
      <h1>Custom Build</h1>
    </Heading>
    <Doc>{`
## Recommended Usage

It's recommended that you follow the streamlined setup outlined in the [install docs](/install).  If you'd like to set up your Design System build in a different way, that is available and possible.  Please see some of the potential setups below.

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
      include: [path.resolve('src')]
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

## Components: Custom Config

If you want to setup your own webpakc config to consume the components (markup and styles), you'll want install the needed dependencies:

\`\`\`bash
npm install babel-loader babel-preset-react babel-preset-stage-2 babel-preset-env style-loader css-loader postcss-loader postcss-import postcss-cssnext --save-dev
\`\`\`

Then add a \`module.rule\` to your \`webpack.config.js\`:

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

## Examples

For full working examples of some custom configurations, please see the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples).

`}</Doc>
  </div>
