import * as glamor from 'glamor'
import polyfillFocusWithin from 'focus-within'
import PropTypes from 'prop-types'
import React from 'react'

import css, { BASE_CLASSNAME } from '../css'
import * as vars from '../vars'

import withDefaultTheme from './with-default-theme'

polyfillFocusWithin(document)

const styles = {
  halo: props => {
    const theme = `${BASE_CLASSNAME}--theme-${props.themeName}`
    const appearance = `${BASE_CLASSNAME}--appearance-${props.appearance}`
    const gapSize = `${BASE_CLASSNAME}--gap-size-${props.gapSize}`
    const shape = `${BASE_CLASSNAME}--shape-${props.shape}`

    return glamor.css(
      css[BASE_CLASSNAME],
      css[theme],
      css[appearance],
      css[gapSize],
      css[shape],

      css[gapSize + theme],

      props.visible && css[`${BASE_CLASSNAME}--visible`],
      props.visibleOnFocus && css[`${BASE_CLASSNAME}--visible-on-focus`]
    )
  }
}

const Halo = props => {
  const {
    appearance,
    gapSize,
    themeName,
    shape,
    visible,
    visibleOnFocus,
    ...filteredProps
  } = props

  const classes = [String(styles.halo(props)), props.className].join(' ').trim()
  return <div {...filteredProps} className={classes} />
}

Halo.appearances = vars.appearances
Halo.gapSizes = vars.gapSizes
Halo.shapes = vars.shapes

Halo.defaultProps = {
  appearance: vars.appearances.default,
  gapSize: vars.gapSizes.default,
  shape: vars.shapes.default,
  className: '',
  visible: true,
  visibleOnFocus: false
}

Halo.propTypes = {
  appearance: PropTypes.oneOf(Object.values(vars.appearances)),
  gapSize: PropTypes.oneOf(Object.values(vars.gapSizes)),
  shape: PropTypes.oneOf(Object.values(vars.shapes)),
  className: PropTypes.string,
  themeName: PropTypes.string,
  visible: PropTypes.bool,
  visibleOnFocus: PropTypes.bool
}

export default withDefaultTheme(Halo)
