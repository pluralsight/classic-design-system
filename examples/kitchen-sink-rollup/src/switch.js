import React from 'react'
import Switch from '@pluralsight/ps-design-system-switch'

function Example() {
  return (
    <div className="example-grid--col-2">
      <Switch size={Switch.sizes.large} color={Switch.colors.blue} checked>
        Large blue
      </Switch>
      <Switch size={Switch.sizes.small} color={Switch.colors.blue} checked>
        Small blue
      </Switch>
      <Switch size={Switch.sizes.large} color={Switch.colors.green} checked>
        Large green
      </Switch>
      <Switch size={Switch.sizes.small} color={Switch.colors.green} checked>
        Small green
      </Switch>
    </div>
  )
}

export default Example
