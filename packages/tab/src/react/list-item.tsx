import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'

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
          `.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${props.themeName}`
        ]
    ),
  textInner: _ => glamor.css(css['.psds-tab__list-item__text-inner']),
  textWidth: _ => glamor.css(css['.psds-tab__list-item__text'])
}

const ListItem = React.forwardRef((props, ref) => {
  const themeName = useTheme()
  const tagName = props.href ? 'a' : 'button'
  const allProps = {
    ...props,
    themeName
  }
  return React.createElement(
    tagName,
    filterReactProps(
      {
        ...props,
        ...styles.listItem(allProps),
        'aria-selected': allProps.active,
        ref,
        role: 'tab',
        tabIndex: '-1'
      },
      { tagName }
    ),
    <div {...styles.textWidth(allProps)} tabIndex="-1">
      <div {...styles.textInner(allProps)} tabIndex="-1">
        {allProps.children}
      </div>
      <span {...styles.bar(allProps)} />
    </div>
  )
})
ListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  innerRef: PropTypes.func,
  onClick: PropTypes.func
}
ListItem.defaultProps = {
  active: false
}

export default ListItem
