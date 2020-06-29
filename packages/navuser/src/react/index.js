import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  navuser: (themeName, props) => css(stylesheet['.psds-navuser'])
}

const Navuser = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <div
      ref={ref}
      {...styles.navuser(themeName, props)}
      {...filterReactProps(props)}
    />
  )
})


Navuser.propTypes = {}

export default Navuser
