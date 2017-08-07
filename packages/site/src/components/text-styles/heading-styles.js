import Text from '@pluralsight/ps-design-system-text/react'
import React from 'react'

import { Example, Heading, Link, P } from '../../common/components'

export default _ =>
  <div>
    <Heading size="large"><h2>Heading styles</h2></Heading>

    <P>
      Heading styles compose complimentary typography attributes for simplified
      implementation. Try to use common heading styles when possible.
    </P>

    <Example.React
      orient="vertical"
      codes={[
        `
<Text.Heading size="xxLarge">
  <h2>XX Large</h2>
</Text.Heading>
`,
        `
<Text.Heading size="large">
  <h2>Large</h2>
</Text.Heading>
`,
        `
<Text.Heading size="medium">
  <h2>Medium</h2>
</Text.Heading>
`,
        `
<Text.Heading size="smallCaps">
  <h2>Small Caps</h2>
</Text.Heading>
`
      ]}
    />
  </div>
