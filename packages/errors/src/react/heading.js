import textCss from '@pluralsight/ps-design-system-text/css'
import * as textVars from '@pluralsight/ps-design-system-text/vars'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/vars'
import * as glamor from 'glamor'
import React from 'react'

const styles = {
  text: ({ size }) =>
    glamor.css(
      textCss['.psds-text__heading'],
      textCss[`.psds-text__heading.psds-theme--${themeDefaultName}`],
      textCss[`.psds-text__heading--size-${size}`],
      textCss[
        `.psds-text__heading--size-${size}.psds-theme--${themeDefaultName}`
      ]
    )
}

export default props =>
  React.cloneElement(React.Children.only(props.children), {
    ...rmChildren(props),
    ...styles.text(props)
  })

const rmChildren = ({ children, ...rest }) => rest
