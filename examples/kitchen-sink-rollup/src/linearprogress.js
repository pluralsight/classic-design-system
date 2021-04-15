import React from 'react'
import LinearProgress from '@pluralsight/ps-design-system-linearprogress'

const Comp = () => (
  <div className="example-flex-column">
    <LinearProgress value={0} />
    <LinearProgress value={33} />
    <LinearProgress value={66} />
    <LinearProgress value={100} />
  </div>
)

export default Comp
