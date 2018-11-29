import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css'

const checkboxHtmlPropsWhitelist = [
  'type',
  'name',
  'autocomplete',
  'autofocus',
  'role',
  'tabIndex',
  'value',
  'defaultValue',
  /^on((?!Check).)*$/,
  /^aria-/,
  /^data-/,
  /^form/
]

const styles = {
  checkbox: ({ disabled }) =>
    glamor.css(
      css['.psds-checkbox'],
      disabled && css['.psds-checkbox--disabled']
    ),
  square: ({ checked, disabled, error, themeName }) =>
    glamor.css(
      css['.psds-checkbox__square'],
      css[`.psds-checkbox__square.psds-theme--${themeName}`],
      checked && css['.psds-checkbox__square--checked'],
      {
        ':focus': css['.psds-checkbox__square:focus']
      }
    ),
  checkmark: _ => glamor.css(css['.psds-checkbox__checkmark']),
  input: () => glamor.css(css['.psds-checkbox__input']),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-checkbox__label'],
      css[`.psds-checkbox__label.psds-theme--${themeName}`]
    )
}

const Checkmark = _ => (
  <svg
    role="img"
    aria-label="Checkmark"
    {...styles.checkmark()}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="6.89667458 13 2.62114014 8.72446556 4.12826603 7.21733967 6.89667458 9.97505938 12.871734 4 14.3788599 5.51781473" />
  </svg>
)

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleKeyDown(evt) {
    if (evt.key === 'Enter' || evt.key === ' ') {
      this.handleClick(evt)
    }
  }
  handleClick(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    if (typeof this.props.onCheck === 'function')
      this.props.onCheck(
        evt,
        !this.props.checked,
        this.props.value,
        this.props.name
      )
    this.square.focus()
  }
  render() {
    const { context, props } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    return (
      <label
        onClick={allProps.disabled ? null : this.handleClick}
        onKeyDown={allProps.disabled ? null : this.handleKeyDown}
        {...styles.checkbox(allProps)}
      >
        <Halo
          error={allProps.error}
          inline
          gapSize={Halo.gapSizes.small}
          visibleOnFocus={!allProps.disabled}
        >
          <div
            role="checkbox"
            aria-checked={allProps.checked}
            tabIndex={allProps.disabled ? '-1' : '0'}
            ref={el => (this.square = el)}
            {...styles.square(allProps)}
          >
            {allProps.checked && <Checkmark />}
          </div>
        </Halo>
        <input
          {...propsUtil.whitelistProps(allProps, checkboxHtmlPropsWhitelist)}
          tabIndex="-1"
          type="checkbox"
          readOnly
          name={allProps.name}
          checked={allProps.checked}
          value={allProps.value}
          ref={allProps.innerRef}
          {...styles.input(allProps)}
        />
        <div {...styles.label(allProps)}>{allProps.label}</div>
      </label>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  innerRef: PropTypes.func,
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
Checkbox.contextTypes = {
  themeName: PropTypes.string
}

export default Checkbox
