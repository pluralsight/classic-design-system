import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'
import util from '@pluralsight/ps-design-system-util'

import css from '../css/index.module.css'

import logo from '../svg/logo.icon.svg'

const ids = {
  logo
}

export const propDefs = {
  size: {
    type: 'oneOf',
    value: ['tiny', 'small', 'medium', 'large', 'x-large'],
    default: 'small'
  }
}

const getClassName = props =>
          classNames({
            [props.css['ps-icon']]: true,
            [props.css['ps-icon--' + props.size]]: props.size
          })

const Icon = props =>
  <span className={getClassName(props)}>
    {React.createElement(ids[props.id], { css: props.css })}
  </span>

Icon.propTypes = util.propDefs.generatePropTypes(propDefs)
Icon.defaultProps = util.propDefs.generateDefaultProps(propDefs)

export default styleable(css)(Icon)
