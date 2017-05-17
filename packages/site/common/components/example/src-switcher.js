import React from 'react'
import styleable from 'react-styleable'

import css from './src-switcher.css'
import Switcher from '../switcher'

export default styleable(css)(props => {
  const options = [
    {
      label: 'React',
      value: 'react'
    },
    {
      label: 'HTML',
      value: 'html'
    }
  ]

  return (
    <Switcher.List onSelect={props.onClick} value={props.value}>
      <Switcher.Option value="react">React</Switcher.Option>
      <Switcher.Option value="html">HTML</Switcher.Option>
    </Switcher.List>
  )
})
