import { Heading } from '@pluralsight/ps-design-system-text/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

export default styleable(css)(props =>
  <Heading {...props} className={props.css.root}>{props.children}</Heading>
)
