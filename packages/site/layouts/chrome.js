import React from 'react'
import styleable from 'react-styleable'

import css from './chrome.css'
import SideNav from '../common/components/side-nav'

export default styleable(css)(props => (
  <div className={props.css.root}>
    <div className={props.css.topGrad} />
    <div className={props.css.content}>

      <SideNav />
      <main className={props.css.main}>
        {props.children}
      </main>
    </div>

  </div>
))
