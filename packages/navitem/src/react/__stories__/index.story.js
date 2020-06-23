import { HomeIcon } from '@pluralsight/ps-design-system-icon'
import { storiesOf } from '@storybook/react'
import React from 'react'

import NavItem from '../index.js'

function Grid(props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 200px)',
        gap: '24px'
      }}
    >
      {props.children}
    </div>
  )
}

const stories = storiesOf('NavItem', module)

Object.keys(NavItem.alignments).forEach(key =>
  stories.add(NavItem.alignments[key], _ => (
    <Grid>
      <NavItem alignment={NavItem.alignments[key]}>Text only</NavItem>
      <NavItem alignment={NavItem.alignments[key]} icon={<HomeIcon />}>
        With icon
      </NavItem>
      <NavItem alignment={NavItem.alignments[key]} selected icon={<HomeIcon />}>
        Selected
      </NavItem>
      <NavItem
        alignment={NavItem.alignments[key]}
        href="https://jaketrent.com"
        icon={<HomeIcon />}
      >
        Link to web
      </NavItem>
      <NavItem
        alignment={NavItem.alignments[key]}
        menu={<div>Placeholder menu</div>}
        icon={<HomeIcon />}
      >
        With menu
      </NavItem>
    </Grid>
  ))
)
