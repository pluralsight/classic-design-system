import React from 'react'

import { Code, Example, Heading, Link, P } from '../../common/components'
import GradientColors from './gradient'
import GrayscaleColors from './grayscale'
import UiColors from './ui'

export default _ =>
  <div>
    <Heading size="xxLarge"><h1>Color</h1></Heading>

    <Heading size="large"><h2>Grayscale colors</h2></Heading>
    <P>Grayscale colors are used for containers, text, lines and borders.</P>
    <GrayscaleColors />

    <Heading size="large"><h2>UI colors</h2></Heading>
    <P>
      UI colors emphasize interface elements such as buttons, links, accents
      and vizualization.
    </P>
    <UiColors />

    <Heading size="large"><h2>Gradient</h2></Heading>
    <P>
      So fresh. Use the standard gradient to emphasize and showcase the brand.
      Use sparingly.
    </P>
    <GradientColors />

  </div>
