import Heading from '@pluralsight/ps-heading/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

import FontFamily from './font-family'
import FontWeight from './font-weight'
import { P } from '../../common/components'

export default props =>
  <div>
    <Heading size="xx-large"><h1>Typography</h1></Heading>

    <Heading size="large"><h2>Font family</h2></Heading>
    <P>
      Pluralsight's font family for the web is Gotham SSm.
    </P>
    <FontFamily />

    <Heading size="large"><h2>Font weight</h2></Heading>
    <P>
      Five Gotham SSm font weights are available for use.
    </P>
    <FontWeight />
  </div>
