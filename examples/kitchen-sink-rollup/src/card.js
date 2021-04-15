import Card from '@pluralsight/ps-design-system-card'
import React from 'react'

function Example() {
  return (
    <div className="example-grid--spaced">
      <div style={{ maxWidth: '540px' }}>
        <Card
          size={Card.sizes.large}
          title="asdf"
          metadata1={['Jim Cooper']}
          image={<Card.Image src="https://picsum.photos/seed/picsum/540/360" />}
        />
      </div>
    </div>
  )
}

export default Example
