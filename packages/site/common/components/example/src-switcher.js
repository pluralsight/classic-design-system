import React from 'react'
import styleable from 'react-styleable'

import css from './src-switcher.css'

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
    <div className={props.css.root}>
      {options.map(opt => {
        return (
          <a key={opt.value} onClick={props.onClick.bind(null, opt.value)}>
            {opt.label}
          </a>
        )
      })}
    </div>
  )
})
