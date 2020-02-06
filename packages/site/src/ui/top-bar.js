import React from 'react'

import { colorsGradient } from '@pluralsight/ps-design-system-core'

export const cssVars = {
  topBarHeight: '8px'
}

export default function TopBar() {
  return (
    <>
      <div className="bar" />

      <style jsx>{`
        .bar {
          display: block;
          height: ${cssVars.topBarHeight};
          background: ${colorsGradient.skillsBackground};
        }
      `}</style>
    </>
  )
}
