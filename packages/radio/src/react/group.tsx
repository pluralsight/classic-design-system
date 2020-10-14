import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { RadioContext } from './context'

import stylesheet from '../css'

const styles = {
  buttonContainer: _ => css(stylesheet['.psds-radio-group__button-container']),
  group: disabled =>
    css(
      stylesheet['.psds-radio-group'],
      disabled && stylesheet['.psds-radio-group--disabled']
    ),
  label: themeName =>
    css(
      stylesheet['.psds-radio-group__label'],
      stylesheet[`.psds-radio-group__label.psds-theme--${themeName}`]
    ),
  subLabel: themeName =>
    css(
      stylesheet['.psds-radio-group__sub-label'],
      stylesheet[`.psds-radio-group__sub-label.psds-theme--${themeName}`]
    )
}

const useValue = ({ value, onChange }) => {
  const [_value, setValue] = React.useState(value)
  return {
    ...(value !== undefined && onChange !== undefined
      ? { checkedValue: value, onChange }
      : { checkedValue: _value, onChange: (evt, val) => setValue(val) })
  }
}

const Group = React.forwardRef(
  (
    {
      children,
      disabled,
      error,
      label,
      name,
      onChange,
      subLabel,
      value,
      ...rest
    },
    ref
  ) => {
    const themeName = useTheme()
    return (
      <div
        {...styles.group(disabled)}
        {...filterReactProps(rest)}
        ref={ref}
        role="radiogroup"
      >
        {label && <div {...styles.label(themeName)}>{label}</div>}
        <div {...styles.buttonContainer()}>
          <RadioContext.Provider
            value={{
              disabled,
              error,
              name,
              ...useValue({ value, onChange })
            }}
          >
            {children}
          </RadioContext.Provider>
        </div>
        {subLabel && <div {...styles.subLabel(themeName)}>{subLabel}</div>}
      </div>
    )
  }
)

Group.displayName = 'Radio.Group'

Group.propTypes = {
  children: PropTypes.node, // TODO: children only Radio.Button
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  subLabel: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Group.defaultProps = {
  disabled: false,
  error: false
}

export default Group
