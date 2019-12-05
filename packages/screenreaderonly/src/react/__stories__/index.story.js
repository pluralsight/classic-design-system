import { storiesOf } from '@storybook/react'
import React from 'react'

import ScreenReaderOnly from '../index.js'

storiesOf('ScreenReaderOnly', module).add('basic', _ => (
  <div>
    <p>you should not see the following</p>

    <ScreenReaderOnly />
  </div>
))
