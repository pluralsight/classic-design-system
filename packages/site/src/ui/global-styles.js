import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'

export default function GlobalStyles() {
  return (
    <style global jsx>{`
      html,
      body {
        background: ${core.colorsBackgroundLight[3]};
      }
      code {
        font-family: ${core.type.fontFamilyCode};
      }
    `}</style>
  )
}
