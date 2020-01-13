import { compose, css } from 'glamor'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { CheckIcon } from '@pluralsight/ps-design-system-icon'

import stylesheet from '../css/index.js'
import { combineFns } from './utils.js'

const styles = {
  menu: () => css(stylesheet['.psds-typeahead__menu']),
  menuItem: () => css(stylesheet['.psds-typeahead__menu__item']),
  menuItemLabel: () => css(stylesheet['.psds-typeahead__menu__item__label']),
  menuItemIcon: ({ selected }) =>
    compose(
      css(stylesheet['.psds-typeahead__menu__item__icon']),
      selected && css(stylesheet['.psds-typeahead__menu__item__icon--selected'])
    )
}

const SuggestionsMenu = React.forwardRef((props, forwardedRef) => {
  const { activeValue, onChange, suggestions, ...rest } = props

  const ref = useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const [cursor, setCursor] = useState()
  const itemCount = useMemo(() => suggestions.length, [suggestions])

  const resetCursor = () => setCursor(undefined)

  const first = () => setCursor(0)
  const last = () => setCursor(itemCount - 1)

  const next = () => {
    const nextCursor = (cursor || 0) + 1
    if (nextCursor > itemCount - 1) return
    setCursor(nextCursor)
  }
  const prev = () => {
    const nextCursor = (cursor || 0) - 1
    if (nextCursor < 0) return
    setCursor(nextCursor)
  }

  useEffect(() => {
    resetCursor()
  }, [itemCount])

  const selectItemNodes = () => {
    if (!ref.current) return []

    const nodeList = ref.current.querySelectorAll('button')
    return Array.from(nodeList)
  }

  React.useEffect(() => {
    if (!ref.current || typeof cursor !== 'number') return
    if (cursor < 0 || cursor > itemCount) return

    const nodes = selectItemNodes()
    const node = nodes[cursor]

    if (node) node.focus()
  }, [cursor, itemCount])

  const handleFocus = combineFns(evt => {
    if (!ref.current) return

    const nodes = selectItemNodes()
    const nextCursor = nodes.findIndex(n => n === evt.target)

    setCursor(nextCursor)
  }, props.onFocus)

  const handleKeyDown = combineFns(evt => {
    const tab = evt.key === 'Tab'
    if (tab) return

    if (evt.key === 'ArrowDown') next()
    else if (evt.key === 'ArrowUp') prev()
    else if (evt.key === 'Home') first()
    else if (evt.key === 'End') last()

    evt.preventDefault()
  }, props.onKeyDown)

  const items = useMemo(() => {
    if (itemCount <= 0) return <MenuItem disabled>no results found</MenuItem>

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
  }, [activeValue, itemCount, onChange, suggestions])

  return (
    <div
      ref={ref}
      role="menu"
      {...styles.menu()}
      {...rest}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    >
      {items}
    </div>
  )
})

SuggestionsMenu.propTypes = {
  activeValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
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
      <span {...styles.menuItemLabel()}>{children}</span>
      <CheckIcon {...styles.menuItemIcon({ selected })} />
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
