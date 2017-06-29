import { Heading, P } from '@pluralsight/ps-design-system-text/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

import FontFamily from './font-family'
import FontSize from './font-size'
import FontWeight from './font-weight'
import { Code } from '../../common/components'

export default props =>
  <div>
    <Heading size="xx-large"><h1>Typography</h1></Heading>

    <Heading size="large"><h2>Install the Font</h2></Heading>
    <P>
      To use the Pluralsight font-family on your site, you must install it by
      importing it from typography.com using Pluralsight's
      assigned CSS Key.
    </P>
    <Code lang="css">
      @import url(https://cloud.typography.com/6966154/691568/css/fonts.css);
    </Code>

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

    <Heading size="large"><h2>Font size</h2></Heading>
    <P>
      Eight Gotham SSm font sizes are available.
    </P>
    <FontSize />
  </div>
