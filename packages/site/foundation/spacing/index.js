import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

import { Heading, P } from '../../common/components'
import SpacingIncrements from './increments'
import IndividualSpacing from './individual'

export default props =>
  <div>
    <Heading.Xxl>Spacing</Heading.Xxl>

    <Heading.Large>Spacing increments</Heading.Large>
    <P>
      Spacing can be applied using margin or padding. There are 7 available
      spacing sizes. Both margin and padding share the same predefined scale.
    </P>
    <SpacingIncrements />

    <Heading.Large>Individual spacing</Heading.Large>
    <P>
      Individual spacing can be applied to a singe side of an element. Both
      margin and padding share the same predefined scale. The same 7 sizes are
      available.
    </P>
    <IndividualSpacing />
  </div>
