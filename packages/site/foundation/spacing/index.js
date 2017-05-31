import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

import { Heading, P } from '../../common/components'
import SpacingIncrements from './increments'
import IndividualSpacing from './individual'

export default props => (
  <div>
    <Heading.Xxl>Spacing</Heading.Xxl>

    <Heading.Large>Spacing increments</Heading.Large>
    <P>
      Spacing can be applied using margin or padding. There are 7 available spacing sizes. Both margin and padding share the same predefined scale.
    </P>
    <SpacingIncrements />

    <Heading.Large>Spacing increments</Heading.Large>
    <P>
      Spacing can be applied using margin or padding. There are 7 available spacing sizes. Both margin and padding share the same predefined scale.
    </P>
    <IndividualSpacing />
  </div>
)
