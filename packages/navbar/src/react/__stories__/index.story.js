import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import React from 'react'

import NavBar from '../index.js'

storiesOf('Navbar', module).add('desktop', _ => (
  <NavBar
    brand={<Filler>Brand</Filler>}
    items={<Filler>Items</Filler>}
    user={<Filler>User</Filler>}
    utility={<Filler>Utility</Filler>}
  />
))

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
