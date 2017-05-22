import React from 'react'
import styleable from 'react-styleable'

import css from './src-switcher.module.css'
import Switcher from '../switcher'

export default styleable(css)(props => (
  <Switcher.List onSelect={props.onClick} value={props.value}>
    <Switcher.Option value="react">REACT</Switcher.Option>
    <Switcher.Option value="html">HTML</Switcher.Option>
  </Switcher.List>
))
