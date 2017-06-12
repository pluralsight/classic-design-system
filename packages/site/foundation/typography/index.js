import Heading from '@pluralsight/ps-heading/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

import FontFamily from './font-family'
import { P } from '../../common/components'

export default props =>
  <div>
    <Heading size="xx-large"><h1>Typography</h1></Heading>

    <Heading size="large"><h2>Font family</h2></Heading>
    <P>
      Pluralsight's font family for the web is Gotham SSm.
    </P>
  </div>
