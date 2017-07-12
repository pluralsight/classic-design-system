import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './app.module.css'
import CustomSvg from './custom.svg'

export default styleable(css)(props =>
  <div className={props.css.app}>
    <header>
      <h3>Pluralsight Design System</h3>
      <h2>React SVG Icon Example</h2>
    </header>
    <div className={props.css.icons}>
      <div className={props.css.icon}>
        <h3>Original Design System</h3>
        <Icon id="logo" />
      </div>
      <div className={props.css.icon}>
        <h3>Resized Design System</h3>
        <Icon
          id="logo"
          css={{ 'ps-icon': props.css.psIconStyleableOverride }}
        />
      </div>
      <div className={props.css.icon}>
        <h3>Custom</h3>
        <CustomSvg
          css={{ 'overrideable-class-name': props.css.customStyleableOverride }}
        />
      </div>
    </div>
  </div>
)
