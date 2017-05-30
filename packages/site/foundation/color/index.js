import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import { Code, Example, Heading, P, Link } from '../../common/components'
import css from './index.module.css'
import GrayscaleColors from './grayscale'

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading.Xxl>Color</Heading.Xxl>

      <Heading.Large>Grayscale colors</Heading.Large>
      <P>Grayscale colors are used for containers, text, lines and borders.</P>
      <GrayscaleColors />

    </div>
  )
})
