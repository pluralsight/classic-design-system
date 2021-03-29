import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React from 'react'

import stylesheet from '../css/sub-label'

const styles = {
  subLabel: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-field__sub-label']),
      css(stylesheet[`.psds-field__sub-label.psds-theme--${themeName}`])
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
