import React from 'react'

import { colorsBackgroundLight, type } from '@pluralsight/ps-design-system-core'

export default function GlobalStyles() {
  return (
    <style global jsx>{`
      html,
      body {
        background: ${colorsBackgroundLight[3]};
      }
      code {
        font-family: ${type.fontFamilyCode};
      }
    `}</style>
  )
}
