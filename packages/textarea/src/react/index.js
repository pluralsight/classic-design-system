import * as core from '@pluralsight/ps-design-system-core'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo'
import {WarningIcon} from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import css from '../css/index.js'

const calcRowsPxHeight = rows => {
  const int = varVal => parseInt(varVal.replace('px', ''), 10)
  return (
    int(core.layout.spacingXSmall) * 2 +
    parseInt(rows, 10) * int(core.type.lineHeightStandard)
  )
}

const styles = {
  error: _ => glamor.css(css['.psds-text-area__error']),
  field: ({ error, themeName }) =>
    glamor.css(
      css['.psds-text-area__field'],
      css[`.psds-text-area__field.psds-theme--${themeName}`],
      error && css[`.psds-text-area__field--error.psds-theme--${themeName}`],
      {
        ':focus': {
          ...css['.psds-text-area__field:focus'],
          ...css[`.psds-text-area__field.psds-theme--${themeName}:focus`]
        }
      }
    ),
  fieldContainer: ({ themeName }) =>
    glamor.css(css['.psds-text-area__field-container']),
  textarea: ({ disabled }) =>
    glamor.css(
      css['.psds-text-area'],
      disabled && css['.psds-text-area--disabled']
    ),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-text-area__label'],
      css[`.psds-text-area__label.psds-theme--${themeName}`]
    ),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-text-area__sub-label'],
      css[`.psds-text-area__sub-label.psds-theme--${themeName}`]
    )
}

const TextArea = (props, context) => {
  const themeName = useTheme()
  const allProps = { ...props, themeName }

  return (
    <label
      {...styles.textarea(allProps)}
      {...(allProps.style ? { style: allProps.style } : null)}
      {...(allProps.className ? { className: allProps.className } : null)}
    >
      {allProps.label && (
        <div {...styles.label(allProps)}>{allProps.label}</div>
      )}
      <div {...styles.fieldContainer(allProps)}>
        <Halo error={allProps.error} gapSize={Halo.gapSizes.small}>
          <textarea
            {...filterReactProps(allProps, { tagName: 'textarea' })}
            {...styles.field(allProps)}
            disabled={allProps.disabled}
            placeholder={allProps.placeholder}
            ref={allProps.innerRef}
            style={{ height: calcRowsPxHeight(allProps.rows) }}
          />
        </Halo>
        {allProps.error && (
          <div {...styles.error(allProps)}>
            <WarningIcon />
          </div>
        )}
      </div>
      {allProps.subLabel && (
        <div {...styles.subLabel(allProps)}>{allProps.subLabel}</div>
      )}
    </label>
  )
}

TextArea.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  innerRef: PropTypes.func,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  subLabel: PropTypes.node
}
TextArea.defaultProps = {
  disabled: false,
  error: false,
  rows: 4
}

export default TextArea
