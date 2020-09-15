import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'

import { Parent, Example } from './example'

const increments = [
  { width: 4, label: 'XX-Small', varName: 'psLayoutSpacingXXSmall' },
  { width: 8, label: 'X-Small', varName: 'psLayoutSpacingXSmall' },
  { width: 12, label: 'Small', varName: 'psLayoutSpacingSmall' },
  { width: 16, label: 'Medium', varName: 'psLayoutSpacingMedium' },
  { width: 24, label: 'Large', varName: 'psLayoutSpacingLarge' },
  { width: 48, label: 'X-Large', varName: 'psLayoutSpacingXLarge' },
  { width: 64, label: 'XX-Large', varName: 'psLayoutSpacingXXLarge' },
]

export const SpacingIncrements = () => (
  <Parent>
    {increments.map((x, i) => (
      <Example
        key={i}
        width={x.width}
        label={x.label}
        varName={x.varName}
        sides="all"
      />
    ))}
  </Parent>
)
