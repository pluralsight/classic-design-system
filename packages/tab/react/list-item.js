import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'
import util from '@pluralsight/ps-design-system-util'

import css from '../css/list-item.module.css'

export const propDefs = {
  active: {
    type: 'bool',
    default: false
  }
}

const getClassName = props =>
  classNames({
    [props.css['ps-tab-list-item']]: true,
    [props.css['ps-tab-list-item--active']]: props.active
  })

const ListItem = styleable(css)(props =>
  <button className={getClassName(props)}>{props.children}</button>
)

ListItem.propTypes = util.propDefs.generatePropTypes(propDefs)
ListItem.defaultProps = util.propDefs.generateDefaultProps(propDefs)

export default styleable(css)(ListItem)
