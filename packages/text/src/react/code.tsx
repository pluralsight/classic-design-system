import { compose, css } from 'glamor'
import React from 'react'
import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const style = ({ themeName }: { themeName: ValueOf<typeof names> }) =>
  compose(
    css(stylesheet[`.psds-text__code`]),
    css(stylesheet[`.psds-text__code.psds-theme--${themeName}`])
  )

const Code: React.FC<HTMLPropsFor<'code'>> = props => {
  const themeName = useTheme()

  return props.children ? (
    <code {...props} {...style({ themeName })}>
      {props.children}
    </code>
  ) : null
}

export default Code
