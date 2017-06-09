import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import { Code, Heading, P, Link } from '../../common/components'

export default styleable(css)(props =>
  <div className={props.css.root}>
    <Heading.Xxl>Component Installation</Heading.Xxl>

    <Heading.Large>0. Determine Your Build System Compatibility</Heading.Large>
    <P>
      You'll need a build system in your development environment that supports
      the following:
    </P>
    <ul>
      <li>
        Installing modules from NPM - eg,
        {' '}
        <Link><a href="https://nodejs.org/" target="_blank">Node</a></Link>
      </li>
      <li>
        Loading assets (JS and CSS) as modules - eg,
        {' '}
        <Link>
          <a href="https://webpack.js.org/" target="_blank">Webpack</a>
        </Link>
      </li>
      <li>
        Transpiling nextgen JS - eg,
        {' '}
        <Link>
          <a href="https://github.com/babel/babel-loader" target="_blank">
            babel-loader
          </a>
        </Link>
      </li>
    </ul>

    <Heading.Large>1. Add the Component Dependency</Heading.Large>
    <P>
      Install the component dependency using NPM:
    </P>
    <Code language="bash">
      npm install @pluralsight/ps-button --save-dev
    </Code>
    <P>
      Note: Each component is installed independently. This will lead to more
      package.json entries. It will importantly allow you to bring into your
      project only what you need. It will allow you to independently upgrade and
      test components as they are improved.
    </P>

    <Heading.Large>2. Support JavaScript Transpiling</Heading.Large>
    <P>
      The Design System components are published to npm in their source ES6
      format. They require transpilation to be used in browsers only supporting
      ES5. We recommend
      {' '}
      <Link><a href="http://babeljs.io/" target="_blank">Babel</a></Link>
      {' '}
      for transpilation. Presumably you're using
      {' '}
      <Link>
        <a href="https://github.com/babel/babel-loader" target="_blank">
          babel-loader
        </a>
      </Link>
      {' '}
      already.
    </P>
    <P>
      Make sure that your Babel setup handles the transforms that the Design
      System requires:
    </P>
    <Code language="bash">
      npm install babel-preset-react babel-preset-stage-2 --save-dev
    </Code>
    <Code language="json">
      {`{
  "presets": ["react", "stage-2"]
}`}
    </Code>

    <Heading.Large>3. Support CSS Imports</Heading.Large>
    <P>
      The Design System components use
      {' '}
      <Link>
        <a href="https://github.com/css-modules/css-modules" target="_blank">
          CSS Modules
        </a>
      </Link>
      {' '}
      and
      {' '}
      <Link>
        <a href="https://github.com/postcss/postcss" target="_blank">
          PostCSS
        </a>
      </Link>
      . The component's CSS modules are published to npm alongside the source
      JavaScript. The source JavaScript will take care of importing it, but your
      Webpack config needs to support it.
    </P>
    <P>
      Modify your webpack.config.js to support CSS module importing.{' '}
    </P>
    <Code language="bash">
      npm install style-loader css-loader postcss-loader --save-dev
    </Code>
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
    <P>
      Note: If you use traditional CSS stylesheets in addition to CSS modules,
      you will need to follow these
      {' '}
      <Link>
        <a
          className="graybeard"
          href="https://jaketrent.com/post/load-both-css-and-css-modules-webpack/"
          target="_blank"
        >
          special instructions
        </a>
      </Link>
      .
    </P>

    <Heading.Large>4. Use Component in Your Project</Heading.Large>
    <P>
      Currently the only component type the Design System supports is React
      components. But it is setup to support other types in the future.
    </P>
    <P>
      To use the React component in your project, note the slightly different
      import path:
    </P>
    <Code language="bash">
      {`import React from 'react'
import Button from '@pluralsight/ps-button/react'

export default props =>
  <div><Button>Love, the Design System</Button></div>
`}
    </Code>
  </div>
)
