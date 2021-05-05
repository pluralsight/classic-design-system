import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import { useTheme, themeNames } from '../../theme'
import { ValueOf, HTMLPropsFor } from '../../util'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const style = ({ themeName }: { themeName: ValueOf<typeof themeNames> }) =>
  glamor.compose(
    glamor.css(stylesheet[`.psds-text__code`]),
    glamor.css(stylesheet[`.psds-text__code.psds-theme--${themeName}`])
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
