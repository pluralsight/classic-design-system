import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { colorsPink, layout } from '@pluralsight/ps-design-system-core'

import { Navbar } from './Navbar.js'

var mountNode = document.getElementById('main')

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

Filler.propTypes = {
  children: PropTypes.node
}

ReactDOM.render(
  <Navbar
    brand={<Filler>Brand</Filler>}
    items={<Filler>Items</Filler>}
    user={<Filler>User</Filler>}
    utility={<Filler>Utility</Filler>}
  />,
  mountNode
)
