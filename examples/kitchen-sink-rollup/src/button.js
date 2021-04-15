import Button from '@pluralsight/ps-design-system-button'
import React from 'react'

function Example() {
  return (
    <div className="example-grid">
      <Button appearance={Button.appearances.primary}>Primary</Button>
      <Button appearance={Button.appearances.secondary}>Secondary</Button>
      <Button appearance={Button.appearances.stroke}>Stroke</Button>
      <Button appearance={Button.appearances.flat}>Flat</Button>
    </div>
  )
}

export default Example
