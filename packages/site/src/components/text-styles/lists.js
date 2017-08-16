import Text from '@pluralsight/ps-design-system-text/react'
import React from 'react'

import { Example, Heading, P } from '../../common/components'

export default _ =>
  <div>

    <Heading size="large"><h2>List</h2></Heading>

    <P>
      Nothing fancy, just simple lists. You’ll know when you need them.
    </P>

    <Example.React
      codes={[
        `
<Text.List>
  <Text.List.Item>apple</Text.List.Item>
  <Text.List.Item>orange</Text.List.Item>
  <Text.List.Item>banana</Text.List.Item>
  <Text.List.Item>strawberry</Text.List.Item>
  <Text.List.Item>papaya</Text.List.Item>
</Text.List>
`,
        `
<Text.List type="bulleted">
  <Text.List.Item>apple</Text.List.Item>
  <Text.List.Item>orange</Text.List.Item>
  <Text.List.Item>banana</Text.List.Item>
  <Text.List.Item>strawberry</Text.List.Item>
  <Text.List.Item>papaya</Text.List.Item>
</Text.List>
`,
        `
<Text.List type="numbered">
  <Text.List.Item>apple</Text.List.Item>
  <Text.List.Item>orange</Text.List.Item>
  <Text.List.Item>banana</Text.List.Item>
  <Text.List.Item>strawberry</Text.List.Item>
  <Text.List.Item>papaya</Text.List.Item>
</Text.List>
`
      ]}
    />

  </div>
