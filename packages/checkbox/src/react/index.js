import { compose, css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo/react.js'
import { useTheme } from '@pluralsight/ps-design-system-theme/react.js'

import stylesheet from '../css/index.js'

const styles = {
  checkbox: (themeName, { disabled }) =>
    compose(
      css(stylesheet['.psds-checkbox']),
      disabled && css(stylesheet['.psds-checkbox--disabled'])
    ),
  square: (themeName, { checked }) =>
    compose(
      css(stylesheet['.psds-checkbox__square']),
      css(stylesheet[`.psds-checkbox__square.psds-theme--${themeName}`]),
      checked && css(stylesheet['.psds-checkbox__square--checked'])
    ),
  checkmark: () => css(stylesheet['.psds-checkbox__checkmark']),
  input: () => css(stylesheet['.psds-checkbox__input']),
  label: themeName =>
    compose(
      css(stylesheet['.psds-checkbox__label']),
      css(stylesheet[`.psds-checkbox__label.psds-theme--${themeName}`])
    )
}

const Checkbox = React.forwardRef((props, ref) => {
  const themeName = useTheme()
  const square = React.createRef()

  const handleKeyDown = evt => {
    if (evt.key === 'Enter' || evt.key === ' ') handleClick(evt)
  }

  const handleClick = evt => {
    evt.preventDefault()
    evt.stopPropagation()

    const { onCheck } = props
    if (typeof onCheck === 'function') {
      onCheck(evt, !props.checked, props.value, props.name)
    }

    if (square.current) square.current.focus()
  }

  return (
    <label
      onClick={props.disabled ? null : handleClick}
      onKeyDown={props.disabled ? null : handleKeyDown}
      {...styles.checkbox(themeName, props)}
    >
      <Halo
        error={props.error}
        gapSize={Halo.gapSizes.small}
        inline
        visibleOnFocus={!props.disabled}
      >
        <div
          aria-checked={props.checked}
          ref={square}
          role="checkbox"
          tabIndex={props.disabled ? '-1' : '0'}
          {...styles.square(themeName, props)}
        >
          {props.checked && <Checkmark />}
        </div>
      </Halo>

      <input
        readOnly
        ref={ref}
        tabIndex="-1"
        type="checkbox"
        value={props.value}
        {...styles.input(themeName, props)}
        {...filterReactProps(props, { tagName: 'input' })}
      />
      <div {...styles.label(themeName, props)}>{props.label}</div>
    </label>
  )
})

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  onCheck: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  error: false
}

export default Checkbox

const Checkmark = props => (
  <svg
    role="img"
    aria-label="Checkmark"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...styles.checkmark()}
    {...props}
  >
    <polygon points="6.89667458 13 2.62114014 8.72446556 4.12826603 7.21733967 6.89667458 9.97505938 12.871734 4 14.3788599 5.51781473" />
  </svg>
)
