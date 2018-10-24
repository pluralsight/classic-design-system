import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css, { BASE_CLASSNAME } from '../css'
import * as vars from '../vars'

import withDefaultTheme from './with-default-theme'

const styles = {
  halo: ({ themeName, appearance, visible, visibleOnFocus }) =>
    glamor.css(
      css[BASE_CLASSNAME],
      css[`${BASE_CLASSNAME}--theme-${themeName}`],
      css[`${BASE_CLASSNAME}--appearance-${appearance}`],
      visible && css[`${BASE_CLASSNAME}--visible`],
      visibleOnFocus && css[`${BASE_CLASSNAME}--visible-on-focus`]
    )
}

const Halo = props => {
  const {
    appearance,
    themeName,
    visible,
    visibleOnFocus,
    ...filteredProps
  } = props

  const classes = [String(styles.halo(props)), props.className].join(' ').trim()

  return <div {...filteredProps} className={classes} />
}

Halo.appearances = vars.appearances

Halo.defaultProps = {
  appearance: vars.appearances.default,
  className: '',
  visible: true,
  visibleOnFocus: false
}

Halo.propTypes = {
  appearance: PropTypes.oneOf(Object.values(vars.appearances)),
  className: PropTypes.string,
  themeName: PropTypes.string,
  visible: PropTypes.bool,
  visibleOnFocus: PropTypes.bool
}

export default withDefaultTheme(Halo)
