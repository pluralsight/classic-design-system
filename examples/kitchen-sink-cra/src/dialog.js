import Button from '@pluralsight/ps-design-system-button'
import Dialog from '@pluralsight/ps-design-system-dialog'
import { P } from '@pluralsight/ps-design-system-text'
import React from 'react'

function Example() {
  return (
    <div className="example-grid--col-2">
      <Dialog disableFocusOnMount>
        <ExampleContent />
      </Dialog>
      <Dialog tailPosition={Dialog.tailPositions.topCenter} disableFocusOnMount>
        <ExampleContent />
      </Dialog>
    </div>
  )
}

export default Example

const ExampleContent = (_) => (
  <div style={{ maxWidth: '300px' }}>
    <P>
      Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
    </P>
    <div style={{ textAlign: 'right' }}>
      <Button>Primary button</Button>
    </div>
  </div>
)
