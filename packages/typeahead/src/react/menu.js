import { compose, css } from 'glamor'

import React from 'react'
import PropTypes from 'prop-types'

import {CheckIcon} from '@pluralsight/ps-design-system-icon'

import stylesheet from '../css/index.js'

const styles = {
  menu: () => css(stylesheet['.psds-typeahead__menu']),
  menuItem: () => css(stylesheet['.psds-typeahead__menu__item']),
  menuItemIcon: ({ selected }) =>
    compose(
      css(stylesheet['.psds-typeahead__menu__item__icon']),
      selected && css(stylesheet['.psds-typeahead__menu__item__icon--selected'])
    )
}

const SuggestionsMenu = React.forwardRef((props, forwardedRef) => {
  const { activeValue, onChange, suggestions, ...rest } = props

  const items = React.useMemo(() => {
    if (suggestions.length <= 0) {
      return <MenuItem disabled>no results found</MenuItem>
    }

    return suggestions.map(sug => (
      <MenuItem
        key={sug.index}
        onClick={evt => onChange(evt, sug.value)}
        selected={sug.value === activeValue}
        value={sug.value}
      >
        {sug.label}
      </MenuItem>
    ))
  }, [activeValue, onChange, suggestions])

  return (
    <div ref={forwardedRef} role="menu" {...rest} {...styles.menu()}>
      {items}
    </div>
  )
})

SuggestionsMenu.propTypes = {
  activeValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string
    })
  ).isRequired
}

function MenuItem({ children, selected, value, ...rest }) {
  return (
    <button {...rest} {...styles.menuItem()}>
      <CheckIcon {...styles.menuItemIcon({ selected })} />

      {children}
    </button>
  )
}

MenuItem.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  value: PropTypes.any
}

export default SuggestionsMenu
