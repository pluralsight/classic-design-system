import { storiesOf } from '@storybook/react'
import React from 'react'

import Frame from '../index.js'

storiesOf('Frame', module)
  .add('basic', _ => (
    <Frame topnav={<Frame.Topnav />}>
      <Frame.Main />
    </Frame>
  ))
  .add('w/sidenav', _ => (
    <Frame topnav={<Frame.Topnav />} sidenav={<Frame.Sidenav />}>
      <Frame.Main />
    </Frame>
  ))
