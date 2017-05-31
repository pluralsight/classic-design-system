import React from 'react'

import { Example, Spacing } from '../../common/components'

const increments = [
  { side: 'top', attrName: 'margin-top' },
  { side: 'right', attrName: 'margin-right' },
  { side: 'bottom', attrName: 'margin-bottom' },
  { side: 'left', attrName: 'margin-left' }
]

export default props => (
  <Example.CssVar
    output={
      <Spacing.Parent>
        {increments.map((x, i) => (
          <Spacing.Example key={i} width={24} sides={x.side} />
        ))}
      </Spacing.Parent>
    }
    attributes={increments.map(x => ({
      varName: 'psLayoutSpacingLarge',
      attrName: x.attrName
    }))}
  />
)
