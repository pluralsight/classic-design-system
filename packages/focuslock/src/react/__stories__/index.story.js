import { storiesOf } from '@storybook/react'
import React from 'react'

import FocusLock from '..'

const Story = () => {
  return (
    <div style={{ color: 'white', textAlign: 'center' }}>
      <FocusLock>
        <p>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
          <a href="#">a link</a>
        </p>
      </FocusLock>
    </div>
  )
}
storiesOf('FocusLock', module).add('default', _ => <Story />)
