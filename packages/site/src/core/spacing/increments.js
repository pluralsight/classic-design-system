import React from 'react'

import { Example, Spacing } from '../../common/components'

const increments = [
  { width: 4, label: 'Tiny', varName: 'psLayoutSpacingTiny' },
  { width: 8, label: 'X-Small', varName: 'psLayoutSpacingXSmall' },
  { width: 12, label: 'Small', varName: 'psLayoutSpacingSmall' },
  { width: 16, label: 'Medium', varName: 'psLayoutSpacingMedium' },
  { width: 24, label: 'Large', varName: 'psLayoutSpacingLarge' },
  { width: 40, label: 'X-Large', varName: 'psLayoutSpacingXLarge' },
  { width: 56, label: 'XX-Large', varName: 'psLayoutSpacingXXLarge' }
]

export default props =>
  <Example.CssVar
    output={
      <Spacing.Parent>
        {increments.map((x, i) =>
          <Spacing.Example
            key={i}
            width={x.width}
            label={x.label}
            sides="all"
          />
        )}
      </Spacing.Parent>
    }
    attributes={increments.map(x => ({
      varName: x.varName,
      attrName: 'margin'
    }))}
  />
