import React from 'react'
import Chrome from '../layouts/chrome'
import { Code, Doc, Heading, P } from '../common/components'

export default _ =>
  <Chrome title="Install">
    <Heading size="xx-large">
      <h1>Install FTW!</h1>
    </Heading>
    <Doc>{`
## Recommended Usage

Use npm. Use webpack@2+.  Follow these streamlined install instructions. Fun. Profit.

## Step 0: Build

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

For more details on the build decorator, see the [webpack build docs](/build/webpack).

For custom alternatives, see the [custom build docs](/build/custom).

## Step 1: Core

\`\`\`bash
npm install @pluralsight/ps-design-system-core --save-dev
\`\`\`

For core usage details, see the [core usage docs](/core/usage).

## Step 2: Components

Each component is installed separately.  Find and use what you need.  For example:

\`\`\`bash
npm install @pluralsight/ps-button --save-dev
\`\`\`

For full, working examples, see the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples).
`}</Doc>
  </Chrome>
