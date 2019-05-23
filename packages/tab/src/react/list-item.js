import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'

const styles = {
  bar: _ => glamor.css(css['.psds-tab__list-item__bar']),
  listItem: props =>
    glamor.css(
      css['.psds-tab__list-item'],
      css[`.psds-tab__list-item.psds-theme--${props.themeName}`],
      props.active && css[`.psds-tab__list-item.psds-tab__list-item--active`],
      props.active &&
        css[
          `.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${
            props.themeName
          }`
        ]
    ),
  textWidth: _ => glamor.css(css['.psds-tab__list-item__text'])
}

const ListItem = (props, context) => {
  const tagName = props.href ? 'a' : 'button'
  return React.createElement(
    tagName,
    filterReactProps(
      {
        ...props,
        role: 'tab',
        'aria-selected': props.active,
        ref: props.innerRef,
        tabIndex: '-1',
        ...styles.listItem(props)
      },
      { tagName }
    ),
    <div {...styles.textWidth(props)} tabIndex="-1">
      {props.children}
      <span {...styles.bar(props)} />
    </div>
  )
}
ListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  innerRef: PropTypes.func,
  onClick: PropTypes.func
}
ListItem.defaultProps = {
  active: false
}

export default withTheme(ListItem)
