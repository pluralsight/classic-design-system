import React from 'react'
import Tab from '@pluralsight/ps-design-system-tab/react'

import { Code, Example, Heading, P } from '../../common/components'

const tabList = `
<Tab.List>
  <Tab.ListItem id="menu1">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu2">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu3">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu4">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu5">Menu Item</Tab.ListItem>
</Tab.List>
`

export default _ =>
  <div>
    <Heading size="xxLarge">
      <h1>Tabs</h1>
    </Heading>

    <P>
      Tabs are a navigational element used to show and pivot between related
      subsections of an interface.
    </P>

    <Example.React orient="vertical" codes={[tabList]} />
  </div>
