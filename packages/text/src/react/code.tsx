import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const style = ({ themeName }: { themeName: ValueOf<typeof names> }) =>
  glamor.compose(
    glamor.css(stylesheet[`.psds-text__code`]),
    glamor.css(stylesheet[`.psds-text__code.psds-theme--${themeName}`])
  )

const Code: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  const themeName = useTheme()

  return props.children ? (
    <code {...props} {...style({ themeName })}>
      {props.children}
    </code>
  ) : null
}

export default Code
