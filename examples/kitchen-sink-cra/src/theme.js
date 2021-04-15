import Button from '@pluralsight/ps-design-system-button'
import Theme from '@pluralsight/ps-design-system-theme'
import React from 'react'

const Example = (props) => {
  return (
    <Theme name={Theme.names.light}>
      <div>
        <Button>On light</Button>
      </div>
    </Theme>
  )
}

export default Example
