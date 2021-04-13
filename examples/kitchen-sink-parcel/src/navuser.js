import NavUser from '@pluralsight/ps-design-system-navuser'
import React from 'react'

function Example() {
  return (
    <div className="example-grid--col-3">
      <NavUser
        name="Name"
        meta="Meta"
        src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
      />
      <NavUser
        name="Name"
        src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
      />
      <NavUser src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg" />
    </div>
  )
}

export default Example
