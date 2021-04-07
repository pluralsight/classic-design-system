import Tooltip from '@pluralsight/ps-design-system-tooltip'
import React from 'react'

const Example: React.FC = () => (
  <div className="example-grid">
    <Tooltip appearance={Tooltip.appearances.basic}>basic</Tooltip>
    <Tooltip appearance={Tooltip.appearances.accent}>accent</Tooltip>
  </div>
)

export default Example
