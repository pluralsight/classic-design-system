import React from 'react'
import { Code, Doc, Heading, P } from '../common/components'

export default _ =>
  <div>
    <Heading size="xx-large">
      <h1>Build / Webpack</h1>
    </Heading>
    <Doc>{`
## Build Lib Purpose

The \`@pluralsight/ps-design-system-build\` library is meant to provide tooling to build the design system core elements and components.

It is used internally on components, and it can be used in your app that uses the Design System.

## Webpack Config Decorator

The most immediately-useful utility for your project will be the \`decorateConfig\` function.  It is meant to wrap your project's webpack config.  This allows the Design System to embrace the requirement of a build without requiring you to see or know about the guts of it.

To use this utility properly, you should familiarize yourself with its usage and several parameters.

### Install

To install, simply:

\`\`\`bash
npm install @pluralsight/ps-design-system-build --save-dev
\`\`\`

### Usage

Then in your \`webpack.config.js\`, import it:

\`\`\`js
const { decorateConfig } = require('@pluralsight/ps-design-system-build/webpack')
\`\`\`

And use it to wrap your project's original webpack configuration object.

\`\`\`js
const yourOriginalConfig = { /* ... */ }
const options = {}
module.exports = decorateConfig(yourOriginalConfig, options)
\`\`\`

The second argument to \`decorateConfig\` is an options object.  There is one required option, \`packageJson\`.

### Options

These are all the potential options to \`decorateConfig\`:

- \`packageJson\` - _Object. Required._ - The JSON content of your \`package.json\`.  Used to discover what elements of the Design System you're using in your project.  Most commonly, the value is simply \`require('./package.json')\`.

- \`extraInclude\` - _Array<String>. Optional._ - List of absolute filesystem paths.  The Design System will process its own code with its own predetermined webpack config.  If you'd like to use this Design System config on your own app code, list your code's paths here. An example value: \`[path.resolve('src')]\`.

- \`defaultInclude\` - _String. Optional._ - Single absolute filesystem path.  \`decorateConfig\` requires that your project's \`module.rules\` all have an \`include\` property.  This is to ensure no unintended cross-loading of files between your app and the Design System.  If you don't want to specify an \`include\` per rule, you can set this as a fallback that the Design System will assign. An example value: \`path.resolve('src')\`.

- \`extractTextPlugin\` - _Instance<ExtractTextPlugin>. Optional._ - Provide this if you would like to produce an external stylesheet, either combined with or separate from your app's stylesheet, in your app build process.  \`style-loader\` is used as a fallback if this is not specified. An example value: \`new ExtractTextPlugin({ filename: '[name].[hash].css' })\`.

- \`postcssCssnext\` - _Object. Optional._ - Overrides the [postcss-cssnext](https://github.com/MoOx/postcss-cssnext) options used internally.  Defaults to \`{ browsers: ['Last 2 versions', 'IE >= 10'] }\`.

`}</Doc>
  </div>
