import FeatureFlags from '@pluralsight/ps-design-system-featureflags'
import Button from '@pluralsight/ps-design-system-button'
import React from 'react'

const Example = props => {
  return (
    <div>
      <FeatureFlags flags={{}}>
        <Button>Flags</Button>
      </FeatureFlags>
    </div>
  )
}

export default Example
