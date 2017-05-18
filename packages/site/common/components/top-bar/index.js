import React from 'react'
import styleable from 'react-styleable'

import css from './top-bar.css'

export default styleable(css)(props => <div className={props.css.root} />)
