import * as glamor from 'glamor'
import polyfillFocusWithin from 'focus-within'
import PropTypes from 'prop-types'
import React from 'react'

import css, { BASE_CLASSNAME } from '../css'
import * as vars from '../vars'

import makeGroupStyle from './make-style-group'
import withDefaultTheme from './with-default-theme'

polyfillFocusWithin(document)

const styles = {
  halo: props => {
    const groupStyle = makeGroupStyle(css)
    const theme = `${BASE_CLASSNAME}--theme-${props.themeName}`
    const gapSize = `${BASE_CLASSNAME}--gap-size-${props.gapSize}`

    return glamor.compose(
      groupStyle(BASE_CLASSNAME),
      groupStyle(theme),
      groupStyle(`${BASE_CLASSNAME}--appearance-${props.appearance}`),
      groupStyle(`${BASE_CLASSNAME}--shape-${props.shape}`),
      groupStyle(`${BASE_CLASSNAME}--gap-size-${props.gapSize}`),
      groupStyle(gapSize + theme),
      props.visible && groupStyle(`${BASE_CLASSNAME}--visible`),
      props.visibleOnFocus && groupStyle(`${BASE_CLASSNAME}--visible-on-focus`)
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

  return <div {...styles.halo(props)} {...filteredProps} />
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
