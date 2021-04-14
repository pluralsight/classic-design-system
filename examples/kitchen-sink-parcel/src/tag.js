import Tag from '@pluralsight/ps-design-system-tag'
import React from 'react'

const Example = props => {
  return (
    <div className="example-grid--col-2">
      <Tag size={Tag.sizes.small}>small</Tag>
      <Tag size={Tag.sizes.medium}>medium</Tag>
    </div>
  )
}

export default Example
