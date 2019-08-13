import React from 'react'
import { Chrome, Content, Doc, PageHeading } from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Core Usage">
      <PageHeading>Core Usage</PageHeading>
      <Doc>{`
After, [installation](/install), use Core in the flavor of your choice.  JavaScript or CSSNext is recommended.

## Import JavaScript

\`\`\`js
import core from '@pluralsight/ps-design-system-core'

<button style={{ backgroundColor: core.colors.orange }}>Click</button>
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
@import "~@pluralsight/ps-design-system-core/dist/index.module.scss";

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
    </Content>
  </Chrome>
)
