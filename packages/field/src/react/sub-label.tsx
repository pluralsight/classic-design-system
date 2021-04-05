import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/sub-label'

const glamor = glamorDefault || glamorExports

const styles = {
  subLabel: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-field__sub-label']),
      glamor.css(stylesheet[`.psds-field__sub-label.psds-theme--${themeName}`])
    )
}

interface SubLabelProps extends HTMLPropsFor<'div'> {}

const SubLabel = React.forwardRef<HTMLDivElement, SubLabelProps>(
  (props, ref) => {
    const { children, ...rest } = props
    const themeName = useTheme()

    return (
      <div ref={ref} {...styles.subLabel(themeName)} {...rest}>
        {children}
      </div>
    )
  }
)

SubLabel.displayName = 'Field.SubLabel'

export default SubLabel
