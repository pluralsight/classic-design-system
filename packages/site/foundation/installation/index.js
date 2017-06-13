import Heading from '@pluralsight/ps-heading/react'
import Link from '@pluralsight/ps-link/react'
import React from 'react'

import { Code, P } from '../../common/components'

export default props =>
  <div>
    <Heading size="xx-large"><h1>Component Installation</h1></Heading>

    <Heading size="large">
      <h2>0. Determine Your Build System Compatibility</h2>
    </Heading>
    <P>
      You'll need a build system in your development environment that supports
      the following:
    </P>
    <ul>
      <li>
        Installing CSS modules from NPM - eg,{' '}
        <Link><a href="https://nodejs.org/" target="_blank">Node</a></Link>
      </li>
      <li>
        Loading assets (CSS) as modules - eg,{' '}
        <Link>
          <a href="https://webpack.js.org/" target="_blank">Webpack</a>
        </Link>
      </li>
      <li>
        Transpiling PostCSS - eg,{' '}
        <Link>
          <a href="https://github.com/postcss/postcss-loader" target="_blank">
            postcss-loader
          </a>
        </Link>
      </li>
    </ul>

    <Heading size="large"><h2>1. Add the Foundation Dependency</h2></Heading>
    <P>
      Install the foundation dependency using NPM:
    </P>
    <Code language="bash">
      npm install @pluralsight/ps-design-system-core --save-dev
    </Code>

    <Heading size="large"><h2>2. Support PostCSS Parsing</h2></Heading>
    <P>
      The Design System foundations use nextgen CSS via PostCSS{' '}
      <Link>
        <a href="https://github.com/postcss/postcss" target="_blank">
          PostCSS
        </a>
      </Link>
      . The CSS is published to npm just as JavaScript would be. It is in its
      source format that needs to be parsed by PostCSS. Depending on your build
      system, this may be accomplished differently. Here we'll assume that the
      module loader, Webpack, is parsing it via the{' '}
      <Link>
        <a href="https://github.com/postcss/postcss-loader" target="_blank">
          postcss-loader
        </a>
      </Link>.
    </P>
    <P>
      Install the needed dependencies based on your build:
    </P>
    <Code language="bash">
      npm install style-loader css-loader postcss-loader --save-dev
    </Code>
    <P>
      Modify your webpack.config.js to support PostCSS parsing and loading:
    </P>
    <Code language="javascript">
      {`{
  module: {
    rules: [
      {
        test: /\\.module\\.css$/,
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
          'postcss-loader'
        ]
      }
    ]
  }
}`}
    </Code>

    <Heading size="large">
      <h2>3. Use Foundation Styles in Your Project</h2>
    </Heading>
    <P>
      Currently all the foundation style variables are available in one package,
      available in a single CSS import:
    </P>
    <Code language="css">
      {`@import "@pluralsight/ps-design-system-core";

.selector-needing-color {
  color: var(--psColorsPink);
}
.selector-needing-spacing {
  margin: var(--psLayoutSpacingLarge);
}
.selector-needing-font-help {
  line-height: var(--psTypeLineHeightExtra);
}
`}
    </Code>
  </div>
