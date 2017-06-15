import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'
import util from '@pluralsight/ps-design-system-util'

import css from '../css/list-item.module.css'

export const propDefs = {
  active: {
    type: 'bool',
    default: false
  },
  id: {
    type: 'string',
    required: true
  }
}

const rmSystemProps = props => {
  const { active, css, listItemIndex, originalOnClick, ...rest } = props
  return rest
}

const getClassName = props =>
  classNames({
    [props.css['ps-tab-list-item']]: true,
    [props.css['ps-tab-list-item--active']]: props.active,
    [props.className]: props.className
  })

const ListItem = styleable(css)(props =>
  <button
    className={getClassName(props)}
    role="tab"
    aria-selected={props.active}
    {...rmSystemProps(props)}
  >
    {props.children}
  </button>
)

ListItem.propTypes = util.propDefs.generatePropTypes(propDefs)
ListItem.defaultProps = util.propDefs.generateDefaultProps(propDefs)

export default styleable(css)(ListItem)
