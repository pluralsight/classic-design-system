import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'
import Tab from '@pluralsight/ps-design-system-tab/react'

import { Code, Example, Heading, P } from '../../common/components'
import css from './index.module.css'

const tabList = `
<Tab.List>
  <Tab.ListItem id="menu1">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu2">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu3">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu4">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu5">Menu Item</Tab.ListItem>
</Tab.List>
`

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading size="xx-large">
        <h1>Tabs</h1>
      </Heading>

      <P>
        Tabs are a navigational element used to show and pivot between related
        subsections of an interface.
      </P>

      <Example.React orient="vertical" codes={[tabList]} />
    </div>
  )
})
