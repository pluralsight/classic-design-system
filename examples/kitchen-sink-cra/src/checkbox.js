import React from 'react'
import Checkbox from '@pluralsight/ps-design-system-checkbox'

const Comp = () => (
  <div className="example-flex-column">
    <Checkbox checked label="I'm checked" value="Checked-eg" />
    <Checkbox label="I'm not" value="Checked-eg" />
  </div>
)

export default Comp
