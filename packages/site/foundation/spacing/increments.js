import React from 'react'

import Spacing from '../../common/components/spacing'

export default props => (
  <Spacing.Parent>
    <Spacing.Example width={4} label="Tiny" sides="all" />
    <Spacing.Example width={8} label="X-Small" sides="all" />
    <Spacing.Example width={12} label="Small" sides="all" />
    <Spacing.Example width={16} label="Medium" sides="all" />
    <Spacing.Example width={24} label="Large" sides="all" />
    <Spacing.Example width={40} label="X-Large" sides="all" />
    <Spacing.Example width={56} label="XX-Large" sides="all" />
  </Spacing.Parent>
)
