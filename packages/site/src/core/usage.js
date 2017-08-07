import React from 'react'
import { Code, Doc, Heading, P } from '../common/components'

export default _ =>
  <div>
    <Heading size="xxLarge">
      <h1>Core Usage</h1>
    </Heading>
    <Doc>{`

## Core Lib Purpose

The \`@pluralsight/ps-design-system-core\` library's main purpose is to collect and provide to you Core elements of the Design System.

These elements are exposed as CSS variables.  

## Core Installation

\`\`\`bash
npm install @pluralsight/ps-design-system-core --save-dev
\`\`\`

## Import CSSNext

To use the Core variables in CSSNext:

\`\`\`css
@import "@pluralsight/ps-design-system-core";

.mySelector { color: var(--psColorsPink); }
\`\`\`

## Import SASS

To use the Core variables in SASS:

\`\`\`scss
@import "~@pluralsight/ps-design-system-core/dist/index.scss";

.mySelector { color: $ps-colors-pink; }
\`\`\`

## Import Vanilla CSS

In vanilla CSS, variables are not yet widely supported.  Instead utility classes, generated from the original variables, are available.  Include the vanilla CSS stylesheet via traditional means:

\`\`\`html
<link rel="stylesheet" href="node_modules/@pluralsight/ps-design-system-core/dist/index.css" />
\`\`\`

And apply utility classes directly to the HTML elements:

\`\`\`html
<div class="ps-colors-pink--color"></div>
\`\`\`

## Examples

For full working examples, please see the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples).
`}</Doc>
  </div>
