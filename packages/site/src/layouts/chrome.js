import Helmet from 'react-helmet'
import React from 'react'
import styleable from 'react-styleable'

import css from './chrome.module.css'
import SideNav from '../common/components/side-nav'
import TopBar from '../common/components/top-bar'
import util from '@pluralsight/ps-design-system-util'

const defaultTitle = 'Pluralsight Design System'

const formatTitle = props =>
  props.title
    ? util.string.capitalize(props.title) + ' | ' + defaultTitle
    : defaultTitle

export default styleable(css)(props =>
  <div className={props.css.root}>
    <Helmet>
      <title>{formatTitle(props)}</title>
    </Helmet>
    <TopBar />
    <div className={props.css.page}>
      <div className={props.css.side}>
        <SideNav />
      </div>
      <main className={props.css.main}>
        {props.children}
      </main>
    </div>
  </div>
)
