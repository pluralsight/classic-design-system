import Markdown from 'react-markdown'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

export default styleable(css)(props =>
  <Markdown className={props.css.root} source={props.children} />
)
