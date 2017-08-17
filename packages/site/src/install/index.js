import React from 'react'
import Chrome from '../layouts/chrome'
import { Code, Doc, Heading, P } from '../common/components'

export default _ =>
  <Chrome title="Install">
    <Heading size="xxLarge">
      <h1>Install FTW!</h1>
    </Heading>
    <Doc>{`
## Recommended Usage

Use npm. Follow these streamlined install instructions. Fun. Profit.

## Step 0: Use Components

Each component is installed separately.  JavaScript is prebuilt as Node modules.  Assets are inlined.  Find and use what you need.  For example:

\`\`\`bash
npm install @pluralsight/ps-design-system-button --save-dev
\`\`\`

See individual reference pages for usage examples.

## Step 1: Use Core

Core design elements are represented as a set of variables.  We recommend you use either the JavaScript variables or the CSS variables.

For build support, consult the [CSS Build docs](/install/css).

For usage details, see the [Core Usage docs](/core/usage).

For full, working project examples, see the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples).
`}</Doc>
  </Chrome>
