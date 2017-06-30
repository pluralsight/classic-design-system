import Link from '@pluralsight/ps-link/react'
import React from 'react'

import { Code, Doc, Heading, P } from '../../common/components'

export default props =>
  <div>
    <Heading size="xx-large"><h1>Core Installation</h1></Heading>
    <Doc>{`
## Recommended Usage

The recommended way to use the Core elements of the Design System is via the provided variables in CSSNext.
There are two languages for variables exposed: CSSNext and SASS.
Use of variables, because of a lack of widespread browser support, requires a CSS build.
You can use the Design System's (easy) or provide your own (custom).

## PostCSS Easy Config

To use the Design System config helpers, you must use Webpack.

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
  extraInclude: [require('path').resolve('src')]
  packageJson: require('./package.json')
})
\`\`\`

The array of paths in the \`extraInclude\` option will process all \`*.module.css\` files in those paths using the Design System PostCSS setup.

## PostCSS Custom Config

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

## Sass Custom Config

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

## Install the Core Library

\`\`\`bash
npm install @pluralsight/ps-design-system-core --save-dev
\`\`\`

## Import in CSSNext

\`\`\`css
@import "@pluralsight/ps-design-system-core";

.mySelector { color: var(--psColorsPink); }
\`\`\`

## Import in SASS

\`\`\`scss
@import "~@pluralsight/ps-design-system-core/dist/index.scss";

.mySelector { color: $ps-colors-pink; }
\`\`\`

## Install Examples

For full working examples, please see the [examples](https://github.com/pluralsight/design-system/tree/master/examples) directory in the Github repo.

## No-Build Alternatives

For those not wanting to deal with a build, a CSS utility class approach is available.  These selectors are generated from the source variables.  This is not recommended.

First include the vanilla CSS stylesheet via traditional means:means

\`\`\`html
<link rel="stylesheet" href="node_modules/@pluralsight/ps-design-system-core/dist/index.css" />
\`\`\`

And apply utility classes directly to the HTML elements:

\`\`\`html
<div class="ps-colors-pink--color"></div>
\`\`\`

`}</Doc>
  </div>
