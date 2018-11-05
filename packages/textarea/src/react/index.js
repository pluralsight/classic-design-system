import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css'

const textAreaHtmlPropsWhitelist = [
  'name',
  'autocomplete',
  'autofocus',
  'role',
  'tabIndex',
  'value',
  'defaultValue',
  /^on/,
  /^aria-/,
  /^data-/,
  /^form/
]

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
      },
      {
        '@media (min-width: 433px)':
          css['@media (min-width: 433px)']['.psds-text-area__field']
      }
    ),
  fieldContainer: ({ themeName }) =>
    glamor.css(css['.psds-text-area__field-container']),
  textarea: ({ disabled }) =>
    glamor.css(
      css['.psds-text-area'],
      disabled && css['.psds-text-area--disabled'],
      {
        '@media (min-width: 433px)':
          css['@media (min-width: 433px)']['.psds-text-area']
      }
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
  const allProps = {
    ...props,
    themeName: context.themeName || themeDefaultName
  }
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
        <Halo
          appearance={
            props.error ? Halo.appearances.error : Halo.appearances.default
          }
          gapSize={Halo.gapSizes.small}
          visible={!!props.error}
          visibleOnFocus
        >
          <textarea
            {...propsUtil.whitelistProps(allProps, textAreaHtmlPropsWhitelist)}
            {...styles.field(allProps)}
            disabled={allProps.disabled}
            placeholder={allProps.placeholder}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            ref={allProps.innerRef}
            style={{ height: calcRowsPxHeight(allProps.rows) }}
          />
        </Halo>
        {allProps.error && (
          <div {...styles.error(allProps)}>
            <Icon id={Icon.ids.warning} />
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
TextArea.contextTypes = {
  themeName: PropTypes.string
}

export default TextArea
