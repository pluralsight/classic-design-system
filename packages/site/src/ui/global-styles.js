import core from '@pluralsight/ps-design-system-core'
import React from 'react'

export default _ => (
  <style global jsx>{`
    html,
    body {
      background: ${core.colors.white};
    }
    code {
      font-family: ${core.type.fontFamilyCode};
    }
  `}</style>
)
