import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import NavBar from '@pluralsight/ps-design-system-navbar'
import React from 'react'

function Filler(props) {
  return <div className="filler">{props.children}</div>
}

function Example() {
  return (
    <NavBar
      brand={<Filler>Brand</Filler>}
      items={<Filler>Items</Filler>}
      user={<Filler>User</Filler>}
      utility={<Filler>Utility</Filler>}
    />
  )
}

export default Example
