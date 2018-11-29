import * as glamor from 'glamor'
import polyfillFocusWithin from 'focus-within'
import PropTypes from 'prop-types'
import React from 'react'

import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css, { BASE_CLASSNAME } from '../css'
import * as vars from '../vars'

if (typeof window !== 'undefined') polyfillFocusWithin(document)

const styles = {
  halo: props => {
    const base = BASE_CLASSNAME
    const theme = `${BASE_CLASSNAME}--theme-${props.themeName}`
    const shape = `${BASE_CLASSNAME}--shape-${props.shape}`
    const gapSize = `${BASE_CLASSNAME}--gap-size-${props.gapSize}`

    const gapTheme = gapSize + theme

    const visible = `${BASE_CLASSNAME}--visible`
    const visibleOnFocus = `${BASE_CLASSNAME}--visible-on-focus`

    return glamor.css(
      css[base],
      css[theme],
      css[shape],
      css[gapSize],
      css[gapTheme],

      props.inline && css[`${BASE_CLASSNAME}--inline`],
      props.error && css[`${BASE_CLASSNAME}--error`],
      props.visible && css[visible],
      props.visibleOnFocus && css[visibleOnFocus]
    )
  }
}

const Halo = props => (
  <div {...styles.halo(props)} {...filterReactProps(props)} />
)

Halo.gapSizes = vars.gapSizes
Halo.shapes = vars.shapes

Halo.defaultProps = {
  error: false,
  gapSize: vars.gapSizes.default,
  inline: false,
  shape: vars.shapes.default,
  visible: false,
  visibleOnFocus: true
}

Halo.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  gapSize: PropTypes.oneOf(Object.values(vars.gapSizes)),
  inline: PropTypes.bool,
  shape: PropTypes.oneOf(Object.values(vars.shapes)),
  themeName: PropTypes.string,
  visible: PropTypes.bool,
  visibleOnFocus: PropTypes.bool
}

export default withTheme(Halo)
