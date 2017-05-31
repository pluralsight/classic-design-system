import React from 'react'

import Spacing from '../../common/components/spacing'

export default props => (
  <Spacing.Parent>
    <Spacing.Example width={24} sides="top" />
    <Spacing.Example width={24} sides="right" />
    <Spacing.Example width={24} sides="bottom" />
    <Spacing.Example width={24} sides="left" />
  </Spacing.Parent>
)
