import { Heading } from '@pluralsight/ps-design-system-text/react'
import React from 'react'

import BodyText from './body-text'
import HeadingStyles from './heading-styles'
import Install from './install'

export default _ =>
  <div>
    <Heading size="xx-large"><h1>Text styles</h1></Heading>

    <Install />

    <HeadingStyles />

    <BodyText />

  </div>
