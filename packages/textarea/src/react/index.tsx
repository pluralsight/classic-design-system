import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { layout, type } from '@pluralsight/ps-design-system-core'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import { WarningIcon } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css'

const calcRowsPxHeight = rows => {
  const int = varVal => parseInt(varVal.replace('px', ''), 10)
  return (
    int(layout.spacingXSmall) * 2 +
    parseInt(rows, 10) * int(type.lineHeightStandard)
  )
}

const styles = {
  error: _ => css(stylesheet['.psds-text-area__error']),
  field: (themeName, { error }) => {
    const label = 'psds-text-area__field'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      error && css(stylesheet[`.${label}--error.psds-theme--${themeName}`])
    )
  },
  fieldContainer: themeName =>
    css(stylesheet['.psds-text-area__field-container']),
  textarea: (themeName, { disabled }) => {
    const label = 'psds-text-area'

    return compose(
      css(stylesheet[`.${label}`]),
      disabled && css(stylesheet[`.${label}--disabled`])
    )
  },
  label: themeName => {
    const label = 'psds-text-area__label'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  subLabel: themeName => {
    const label = 'psds-text-area__sub-label'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  }
}

const TextArea = React.forwardRef((props, ref) => {
  const themeName = useTheme()

  return (
    <label
      {...styles.textarea(themeName, props)}
      {...(props.style ? { style: props.style } : null)}
      {...(props.className ? { className: props.className } : null)}
    >
      {props.label && <div {...styles.label(themeName)}>{props.label}</div>}
      <div {...styles.fieldContainer(themeName)}>
        <Halo error={props.error} gapSize={Halo.gapSizes.small}>
          <textarea
            {...filterReactProps(props, { tagName: 'textarea' })}
            {...styles.field(themeName, props)}
            disabled={props.disabled}
            placeholder={props.placeholder}
            ref={ref}
            style={{ height: calcRowsPxHeight(props.rows) }}
          />
        </Halo>

        {props.error && (
          <div {...styles.error(themeName)}>
            <WarningIcon />
          </div>
        )}
      </div>

      {props.subLabel && (
        <div {...styles.subLabel(themeName)}>{props.subLabel}</div>
      )}
    </label>
  )
})

TextArea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  style: PropTypes.object,
  subLabel: PropTypes.node
}

TextArea.defaultProps = {
  disabled: false,
  error: false,
  rows: 4
}

export default TextArea
