import { ValueOf } from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/label'

const glamor = glamorDefault || glamorExports

const styles = {
  label: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-field__label']),
      glamor.css(stylesheet[`.psds-field__label.psds-theme--${themeName}`])
    )
}

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
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
