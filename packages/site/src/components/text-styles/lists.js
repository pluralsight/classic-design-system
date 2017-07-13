import { List } from '@pluralsight/ps-design-system-text/react'
import React from 'react'

import { Example, Heading, P } from '../../common/components'

export default _ =>
  <div>

    <Heading size="large"><h2>Heading styles</h2></Heading>

    <P>
      Nothing fancy, just simple lists. You’ll know when you need them.
    </P>

    <Example.React
      component={
        <List>
          <List.Item>apple</List.Item>
          <List.Item>orange</List.Item>
          <List.Item>banana</List.Item>
          <List.Item>strawberry</List.Item>
          <List.Item>papaya</List.Item>
        </List>
      }
      name="List"
      permutations={[{}, { type: 'bulleted' }, { type: 'numbered' }]}
    />

  </div>
