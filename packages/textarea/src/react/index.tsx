import { compose, css } from 'glamor'
import React from 'react'

import { layout, type } from '@pluralsight/ps-design-system-core'
import Halo from '@pluralsight/ps-design-system-halo'
import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const calcRowsPxHeight = (rows: React.ReactText) => {
  const int = (varVal: string) => parseInt(varVal.replace('px', ''), 10)
  return (
    int(layout.spacingXSmall) * 2 +
    parseInt(rows as string, 10) * int(type.lineHeightStandard)
  )
}

const styles = {
  error: () => css(stylesheet['.psds-text-area__error']),
  field: (themeName: ValueOf<typeof themeNames>, error: boolean) => {
    const label = 'psds-text-area__field'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      error && css(stylesheet[`.${label}--error.psds-theme--${themeName}`])
    )
  },
  fieldContainer: () => css(stylesheet['.psds-text-area__field-container']),
  textarea: (disabled: boolean) => {
    const label = 'psds-text-area'

    return compose(
      css(stylesheet[`.${label}`]),
      disabled && css(stylesheet[`.${label}--disabled`])
    )
  },
  label: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-text-area__label'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  subLabel: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-text-area__sub-label'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  }
}

export interface TextAreaProps extends Omit<HTMLPropsFor<'textarea'>, 'rows'> {
  disabled?: boolean
  error?: boolean
  label?: React.ReactNode
  placeholder?: string
  rows?: React.ReactText
  subLabel?: React.ReactNode
  value?: React.ReactText
  name?: string
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      disabled = false,
      error = false,
      label,
      placeholder,
      rows = 4,
      style,
      subLabel,
      ...rest
    },
    ref
  ) => {
    const themeName = useTheme()

    return (
      <label {...styles.textarea(disabled)} style={style} className={className}>
        {label && <div {...styles.label(themeName)}>{label}</div>}
        <div {...styles.fieldContainer()}>
          <Halo error={error} gapSize={Halo.gapSizes.small}>
            <textarea
              {...rest}
              {...styles.field(themeName, error)}
              disabled={disabled}
              placeholder={placeholder}
              ref={ref}
              style={{ height: calcRowsPxHeight(rows) }}
            />
          </Halo>

          {error && (
            <div {...styles.error()}>
              <WarningIcon />
            </div>
          )}
        </div>

        {subLabel && <div {...styles.subLabel(themeName)}>{subLabel}</div>}
      </label>
    )
  }
)

export default TextArea
