import { Theme, useTheme } from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { RadioContext } from './context'
import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  buttonContainer: () =>
    glamor.css(stylesheet['.psds-radio-group__button-container']),
  group: (disabled: boolean) =>
    glamor.css(
      stylesheet['.psds-radio-group'],
      disabled && stylesheet['.psds-radio-group--disabled']
    ),
  label: (themeName: ValueOf<typeof Theme.names>) =>
    glamor.css(
      stylesheet['.psds-radio-group__label'],
      stylesheet[`.psds-radio-group__label.psds-theme--${themeName}`]
    ),
  subLabel: (themeName: ValueOf<typeof Theme.names>) =>
    glamor.css(
      stylesheet['.psds-radio-group__sub-label'],
      stylesheet[`.psds-radio-group__sub-label.psds-theme--${themeName}`]
    )
}

const useValue = ({
  value,
  onChange
}: {
  value?: React.ReactText
  onChange?: (evt?: React.MouseEvent, val?: React.ReactText) => void
}) => {
  const [_value, setValue] = React.useState(value)
  return {
    ...(value !== undefined && onChange !== undefined
      ? { checkedValue: value, onChange }
      : {
          checkedValue: _value,
          onChange: (evt?: React.MouseEvent, val?: React.ReactText) =>
            setValue(val)
        })
  }
}

export interface RadioGroupProps extends Omit<HTMLPropsFor<'div'>, 'onChange'> {
  children?: React.ReactNode
  disabled?: boolean
  error?: boolean
  label?: React.ReactNode
  name: string
  onChange?: (evt?: React.MouseEvent, val?: React.ReactText) => void
  subLabel?: React.ReactNode
  value?: React.ReactText
}

const Group = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      children,
      disabled = false,
      error = false,
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
      <div {...styles.group(disabled)} {...rest} ref={ref} role="radiogroup">
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

export default Group
