import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import css, { BASE_CLASS_NAME } from '../css'
import * as vars from '../vars'

const styles = {
  halo: () => glamor.css({ ...css[BASE_CLASS_NAME] })
}

const Halo = props => {
  const { appearance, ...rest } = props

  return <div {...styles.halo(props)} {...rest} />
}

Halo.appearances = vars.appearances

Halo.defaultProps = {
  appearance: vars.appearances.primary
}

Halo.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  themeName: PropTypes.oneOf(Object.values(themeNames))
}

export default Halo
