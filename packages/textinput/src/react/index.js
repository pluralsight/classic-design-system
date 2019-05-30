import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import PropTypes from 'prop-types'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  error: _ => glamor.css(css['.psds-text-input__error']),
  field: ({ appearance, error, fieldAfter, icon, iconAlign, themeName }) =>
    glamor.css(
      css['.psds-text-input__field'],
      css[`.psds-text-input__field--appearance-${appearance}`],
      css[`.psds-text-input__field.psds-theme--${themeName}`],
      css[
        `.psds-text-input__field--appearance-${appearance}.psds-theme--${themeName}`
      ],
      fieldAfter && css[`.psds-text-input__field--w-after`],
      icon && css[`.psds-text-input__field--icon-align-${iconAlign}`],
      error && css[`.psds-text-input__field--error.psds-theme--${themeName}`]
    ),
  fieldContainer: _ => glamor.css(css['.psds-text-input__field-container']),
  fieldInput: _ => glamor.css(css['.psds-text-input__field-input']),
  icon: ({ appearance, icon, iconAlign, themeName }) =>
    glamor.css(
      css['.psds-text-input__icon'],
      icon && css[`.psds-text-input__icon--icon-align-${iconAlign}`],
      css[`.psds-text-input__icon--appearance-${appearance}`],
      css[`.psds-text-input__icon.psds-theme--${themeName}`]
    ),
  textInput: ({ disabled }) =>
    glamor.css(
      css['.psds-text-input'],
      disabled && css['.psds-text-input--disabled']
    ),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-text-input__label'],
      css[`.psds-text-input__label.psds-theme--${themeName}`]
    ),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-text-input__sub-label'],
      css[`.psds-text-input__sub-label.psds-theme--${themeName}`]
    )
}

const TextInput = (props, context) => {
  const themeName = context.themeName || themeDefaultName
  const allProps = { ...props, themeName }
  const {
    error,
    fieldAfter,
    label,
    icon,
    style,
    subLabel,
    ...inputProps
  } = allProps

  return (
    <label
      {...styles.textInput(allProps)}
      {...(allProps.style ? { style: allProps.style } : null)}
      {...(allProps.className ? { className: allProps.className } : null)}
    >
      {label && <div {...styles.label(allProps)}>{label}</div>}

      <div {...styles.fieldContainer(allProps)}>
        <Halo error={error} gapSize={Halo.gapSizes.small}>
          <div {...styles.field(allProps)}>
            <input
              {...filterReactProps(inputProps, { tagName: 'input' })}
              {...styles.fieldInput(allProps)}
              disabled={allProps.disabled}
              placeholder={allProps.placeholder}
              ref={allProps.innerRef}
            />
            {fieldAfter}
          </div>
        </Halo>

        {icon && <div {...styles.icon(allProps)}>{icon}</div>}

        {error && (
          <div {...styles.error(allProps)}>
            <Icon id={Icon.ids.warning} />
          </div>
        )}
      </div>

      {subLabel && <div {...styles.subLabel(allProps)}>{subLabel}</div>}
    </label>
  )
}

TextInput.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fieldAfter: PropTypes.node,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node
}
TextInput.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  iconAlign: vars.iconAligns.left
}
TextInput.contextTypes = {
  themeName: PropTypes.string
}

TextInput.appearances = vars.appearances
TextInput.iconAligns = vars.iconAligns

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export default TextInput
