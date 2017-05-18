import React from 'react'
import styleable from 'react-styleable'

import css from './chrome.css'
import SideNav from '../common/components/side-nav'
import TopBar from '../common/components/top-bar'

export default styleable(css)(props => (
  <div className={props.css.root}>
    <TopBar />
    <div className={props.css.content}>
      <SideNav />
      <main className={props.css.main}>
        {props.children}
      </main>
    </div>
  </div>
))
