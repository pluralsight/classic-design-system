import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { css as textStylesheet } from '@pluralsight/ps-design-system-text'
import { useTheme } from '@pluralsight/ps-design-system-theme'

const rmChildren = ({ children, ...rest }) => rest

const styles = {
  text: ({ size, themeName }) =>
    compose(
      css(textStylesheet['.psds-text__heading']),
      css(textStylesheet[`.psds-text__heading.psds-theme--${themeName}`]),
      css(textStylesheet[`.psds-text__heading--size-${size}`]),
      css(
        textStylesheet[
          `.psds-text__heading--size-${size}.psds-theme--${themeName}`
        ]
      )
    )
}

const Heading = props => {
  const themeName = useTheme()

  return React.cloneElement(React.Children.only(props.children), {
    ...rmChildren(props),
    ...styles.text({ ...props, themeName })
  })
}

Heading.propTypes = {
  themeName: PropTypes.string
}

export default Heading
