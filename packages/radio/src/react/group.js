import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  buttonContainer: _ => css(stylesheet['.psds-radio-group__button-container']),
  group: ({ disabled }) =>
    css(
      stylesheet['.psds-radio-group'],
      disabled && stylesheet['.psds-radio-group--disabled']
    )
}

const Group = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const buttons = React.useMemo(_ => React.Children.toArray(props.children), [
    props.children
  ])

  const [value, setValue] = React.useState(props.value)
  const [focusValue, setFocusValue] = React.useState()

  React.useEffect(() => {
    setValue(value)
  }, [props.value, value])

  const handleKeyDown = combineFns(evt => {
    if (props.disabled) return

    if (evt.key === 'Enter' || evt.key === ' ') {
      const nextValue = focusValue
      setValue(nextValue)

      if (isFunction(props.onSelect)) props.onSelect(evt, nextValue)
    } else if (evt.key === 'ArrowDown') {
      handleKeyboardNav(evt, 1)
    } else if (evt.key === 'ArrowUp') {
      handleKeyboardNav(evt, -1)
    } else if (evt.key === 'Tab') {
      setFocusValue(null)
    }
  }, props.onKeyDown)

  function handleKeyboardNav(evt, indexDelta) {
    evt.stopPropagation()
    evt.preventDefault()

    const focusIndex = buttons.findIndex(b => b.props.value === focusValue)
    const newFocusIndex =
      focusIndex + indexDelta > buttons.length - 1
        ? focusIndex
        : focusIndex + indexDelta < 0
        ? 0
        : focusIndex + indexDelta

    const nextFocusValue = buttons[newFocusIndex].props.value
    setFocusValue(nextFocusValue)
  }

  function handleButtonFocus(evt, focusValue) {
    setFocusValue(focusValue)
  }

  const handleFocus = combineFns(evt => {
    if (props.disabled || focusValue) return

    const defaultFocusValue = buttons[0].props.value
    setFocusValue(defaultFocusValue)
  }, props.onFocus)

  const handleSelect = combineFns((vt, nextValue) => {
    setFocusValue(nextValue)
    setValue(nextValue)
  }, props.onSelect)

  return (
    <div
      {...styles.group(props)}
      {...filterReactProps(props)}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      ref={ref}
      role="radiogroup"
    >
      {React.Children.map(props.children, (child, i) => {
        const childValue = child.props.value

        return (
          <div {...styles.buttonContainer()}>
            {React.cloneElement(child, {
              _disabled: props.disabled,
              _error: props.error,
              _isFocused: childValue === focusValue,
              _name: props.name,
              _onClick: handleSelect,
              _onFocus: handleButtonFocus,

              checked: value === childValue,
              tabIndex: i === 0 && childValue > -1 ? childValue : 0
            })}
          </div>
        )
      })}
    </div>
  )
})

Group.propTypes = {
  children: PropTypes.node, // TODO: children only Radio.Button
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSelect: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Group.defaultProps = {
  disabled: false,
  error: false,
  tabIndex: 0
}

export default Group

function combineFns(...fns) {
  return (...args) => fns.filter(isFunction).forEach(fn => fn(...args))
}

function isFunction(fn) {
  return typeof fn === 'function'
}
