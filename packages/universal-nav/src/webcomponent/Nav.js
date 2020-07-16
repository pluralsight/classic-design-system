import React from 'react'
import PropTypes from 'prop-types'
import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import { Navbar } from './registry.js'
function Filler(props) {
  return (
    <div
      slot={props.slot}
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

Filler.propTypes = {
  children: PropTypes.node,
  slot: PropTypes.string
}
export const Nav = () => (
  <Navbar>
    <Filler slot="brand">Brand</Filler>
    <Filler slot="items">Items</Filler>
    <Filler slot="utility">Utility</Filler>
    <Filler slot="user">User</Filler>
  </Navbar>
)
