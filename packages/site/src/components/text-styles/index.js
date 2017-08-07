import React from 'react'

import BodyText from './body-text'
import HeadingStyles from './heading-styles'
import { Heading } from '../../common/components'
import Install from './install'
import Lists from './lists'

export default _ =>
  <div>
    <Heading size="xxLarge"><h1>Text styles</h1></Heading>

    <Install />

    <HeadingStyles />

    <BodyText />

    <Lists />

  </div>
