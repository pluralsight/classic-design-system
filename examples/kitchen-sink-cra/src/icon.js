import React from 'react'
import { CodeIcon } from '@pluralsight/ps-design-system-icon'

const Comp = () => (
  <div
    style={{ outline: '2px solid red', paddingBottom: '64px', color: '#fff' }}
  >
    <CodeIcon size={CodeIcon.sizes.xSmall} />
    <CodeIcon size={CodeIcon.sizes.small} />
    <CodeIcon size={CodeIcon.sizes.medium} />
    <CodeIcon size={CodeIcon.sizes.large} />
  </div>
)

export default Comp
