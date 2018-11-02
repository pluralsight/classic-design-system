import * as glamor from 'glamor'
import polyfillFocusWithin from 'focus-within'
import PropTypes from 'prop-types'
import React from 'react'

import css, { BASE_CLASSNAME } from '../css'
import * as vars from '../vars'

import withDefaultTheme from './with-default-theme'

if (typeof window !== 'undefined') polyfillFocusWithin(document)

const styles = {
  halo: props => {
    const base = BASE_CLASSNAME
    const theme = `${BASE_CLASSNAME}--theme-${props.themeName}`
    const appearance = `${BASE_CLASSNAME}--appearance-${props.appearance}`
    const shape = `${BASE_CLASSNAME}--shape-${props.shape}`
    const gapSize = `${BASE_CLASSNAME}--gap-size-${props.gapSize}`

    const gapTheme = gapSize + theme

    const visible = `${BASE_CLASSNAME}--visible`
    const visibleOnFocus = `${BASE_CLASSNAME}--visible-on-focus`

    return glamor.css(
      css[base],
      { ':after': css[`${base}:after`] },
      { ':after': css[`${theme}:after`] },
      { ':after': css[`${appearance}:after`] },
      { ':after': css[`${shape}:after`] },
      { ':after': css[`${gapSize}:after`] },
      { ':after': css[`${gapTheme}:after`] },

      props.visible && { ':after': css[`${visible}:after`] },
      props.visibleOnFocus && {
        ':focus-within:after': css[`${visibleOnFocus}:focus-within:after`],
        '[focus-within]:after': css[`${visibleOnFocus}[focus-within]:after`]
      }
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
