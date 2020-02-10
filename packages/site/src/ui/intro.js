import React from 'react'

import { layout, type } from '@pluralsight/ps-design-system-core'

export default function Intro(props) {
  return (
    <>
      <div className="intro" {...props} />

      <style jsx>{`
        .intro {
          margin-bottom: ${layout.spacingLarge};
          font-size: ${type.fontSizeMedium};
          line-height: ${type.lineHeightExtra};
          font-weight: ${type.fontWeightLight};
        }
      `}</style>
    </>
  )
}
