import Heading from '@pluralsight/ps-heading/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

import { P } from '../../common/components'
import SpacingIncrements from './increments'
import IndividualSpacing from './individual'

export default props =>
  <div>
    <Heading size="xx-large"><h1>Spacing</h1></Heading>

    <Heading size="large"><h2>Spacing increments</h2></Heading>
    <P>
      Spacing can be applied using margin or padding. There are 7 available
      spacing sizes. Both margin and padding share the same predefined scale.
    </P>
    <SpacingIncrements />

    <Heading size="large"><h2>Individual spacing</h2></Heading>
    <P>
      Individual spacing can be applied to a singe side of an element. Both
      margin and padding share the same predefined scale. The same 7 sizes are
      available.
    </P>
    <IndividualSpacing />
  </div>
