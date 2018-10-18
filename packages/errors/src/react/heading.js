import textCss from '@pluralsight/ps-design-system-text/css'
import * as textVars from '@pluralsight/ps-design-system-text/vars'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/vars'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

const rmChildren = ({ children, ...rest }) => rest

const styles = {
  text: ({ size, themeName }) =>
    glamor.css(
      textCss['.psds-text__heading'],
      textCss[`.psds-text__heading.psds-theme--${themeName}`],
      textCss[`.psds-text__heading--size-${size}`],
      textCss[`.psds-text__heading--size-${size}.psds-theme--${themeName}`]
    )
}

const Heading = (props, context) => {
  const themeName = context.themeName || themeDefaultName

  return React.cloneElement(React.Children.only(props.children), {
    ...rmChildren(props),
    ...styles.text({ ...props, themeName })
  })
}

Heading.propTypes = {
  themeName: PropTypes.string
}

Heading.contextTypes = {
  themeName: PropTypes.string
}

export default Heading
