import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import { Code, Example, Heading, P, Link } from '../../common/components'
import css from './index.module.css'
import GradientColors from './gradient'
import GrayscaleColors from './grayscale'
import UiColors from './ui'

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading.Xxl>Color</Heading.Xxl>

      <Heading.Large>Grayscale colors</Heading.Large>
      <P>Grayscale colors are used for containers, text, lines and borders.</P>
      <GrayscaleColors />

      <Heading.Large>UI colors</Heading.Large>
      <P>
        UI colors emphasize interface elements such as buttons, links, accents
        and vizualization.
      </P>
      <UiColors />

      <Heading.Large>Gradient</Heading.Large>
      <P>
        So fresh. Use the standard gradient to emphasize and showcase the brand.
        Use sparingly.
      </P>
      <GradientColors />

    </div>
  )
})
