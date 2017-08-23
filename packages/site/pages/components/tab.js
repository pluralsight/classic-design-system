import core from '@pluralsight/ps-design-system-core'
import Tab from '@pluralsight/ps-design-system-tab/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading
} from '../../src/ui'

export default _ =>
  <Chrome>
    <Content title="Tab">

      <PageHeading>Tab</PageHeading>

      <P>
        Tabs are a navigational element used to show and pivot between related
        subsections of an interface.
      </P>

      <Example.React
        orient="vertical"
        includes={{ Tab }}
        codes={[
          `
<Tab.List>
  <Tab.ListItem id="menu1">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu2">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu3">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu4">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu5">Menu Item</Tab.ListItem>
</Tab.List>
`
        ]}
      />

    </Content>
  </Chrome>
