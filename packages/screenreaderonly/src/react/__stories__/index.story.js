import { storiesOf } from '@storybook/react'
import React from 'react'

import ScreenReaderOnly from '../index.js'

storiesOf('ScreenReaderOnly', module).add('basic', _ => (
  <div>
    <p>
      There is some hidden text on this page. Try to find it with a screen
      reader
    </p>

    <ScreenReaderOnly>content only for screen readers</ScreenReaderOnly>
  </div>
))
