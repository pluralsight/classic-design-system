import React from 'react'
import styleable from 'react-styleable'

import css from './chrome.module.css'
import SideNav from '../common/components/side-nav'
import TopBar from '../common/components/top-bar'

export default styleable(css)(props => (
  <div className={props.css.root}>
    <TopBar />
    <div className={props.css.page}>
      <SideNav />
      <main className={props.css.main}>
        <div className={props.css.content}>
          {props.children}
        </div>
      </main>
    </div>
  </div>
))
