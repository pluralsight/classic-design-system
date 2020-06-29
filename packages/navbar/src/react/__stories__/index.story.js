import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import React from 'react'

import NavBar from '../index.js'

storiesOf('Navbar', module).add('desktop', _ => (
  <Grid>
    <NavBar
      brand={<Filler>Brand</Filler>}
      items={<Filler>Items</Filler>}
      user={<Filler>User</Filler>}
      utility={<Filler>Utility</Filler>}
    />
    <NavBar
      brand={<Filler>Brand</Filler>}
      items={<Filler>Items</Filler>}
      onMobileMenuClick={() => alert('mobile click')}
      user={<Filler>User</Filler>}
      utility={<Filler>Utility</Filler>}
    />
  </Grid>
))

function Grid(props) {
  return (
    <div
      style={{
        width: '100%'
      }}
    >
      {props.children}
    </div>
  )
}
function Filler(props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colorsPink.base,
        height: '100%',
        border: `2px dashed ${colorsPink.base}`,
        padding: `0 ${layout.spacingMedium}`
      }}
    >
      {props.children}
    </div>
  )
}
