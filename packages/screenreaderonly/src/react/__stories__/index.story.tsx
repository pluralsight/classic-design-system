import { storiesOf } from '@storybook/react'
import React from 'react'

import ScreenReaderOnly from '..'

storiesOf('ScreenReaderOnly', module).add('basic', _ => (
  <div>
    <p style={{ background: 'white', padding: 20 }}>
      There is some hidden text on this page. Try to find it with a screen
      reader
    </p>

    <ScreenReaderOnly>content only for screen readers</ScreenReaderOnly>
  </div>
))
