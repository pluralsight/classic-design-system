import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  navbar: (themeName, props) => css(stylesheet['.psds-navbar'])
}

const Navbar = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <div
      ref={ref}
      {...styles.navbar(themeName, props)}
      {...filterReactProps(props)}
    />
  )
})


Navbar.propTypes = {}

export default Navbar
