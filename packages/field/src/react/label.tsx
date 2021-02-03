import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React, { forwardRef } from 'react'

import stylesheet from '../css/label'

const styles = {
  label: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-field__label']),
      css(stylesheet[`.psds-field__label.psds-theme--${themeName}`])
    )
}

interface LabelProps extends HTMLPropsFor<'label'> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { children, ...rest } = props
  const themeName = useTheme()

  return (
    <label ref={ref} {...styles.label(themeName)} {...rest}>
      {children}
    </label>
  )
})

Label.displayName = 'Field.Label'

export default Label
