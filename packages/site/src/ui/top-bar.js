import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'

export const cssVars = {
  topBarHeight: '8px'
}

export default _ => (
  <div className="bar">
    <style jsx>{`
      .bar {
        display: block;
        height: ${cssVars.topBarHeight};
        background: ${core.colors.gradientHorz};
      }
    `}</style>
  </div>
)
