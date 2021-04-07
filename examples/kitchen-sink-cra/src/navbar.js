import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import NavBar from '@pluralsight/ps-design-system-navbar'
import React from 'react'

function Filler(props) {
  return (
    <div className="filler">
      {props.children}
      <style jsx>{`
        .filler {
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colorsPink[6]};
          height: 100%;
          border: 2px dashed ${colorsPink[6]};
          padding: 0 ${layout.spacingMedium};
        }
      `}</style>
    </div>
  )
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
