import { compose, css } from 'glamor'
import polyfillFocusWithin from 'focus-within'
import PropTypes from 'prop-types'
import React from 'react'

import { withTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet, { BASE_CLASSNAME, themeClasses } from '../css/index.js'
import * as vars from '../vars/index.js'

if (typeof window !== 'undefined') polyfillFocusWithin(document)

const styles = {
  halo: props => {
    const base = BASE_CLASSNAME
    const theme = base + themeClasses[props.themeName]
    const shape = `${BASE_CLASSNAME}--shape-${props.shape}`
    const gapSize = `${BASE_CLASSNAME}--gap-size-${props.gapSize}`

    const gapTheme = gapSize + themeClasses[props.themeName]

    const visible = `${BASE_CLASSNAME}--visible`
    const visibleOnFocus = `${BASE_CLASSNAME}--visible-on-focus`

    return compose(
      css(stylesheet[base]),
      css(stylesheet[theme]),
      css(stylesheet[shape]),
      css(stylesheet[gapSize]),
      css(stylesheet[gapTheme]),

      props.inline && css(stylesheet[`${BASE_CLASSNAME}--inline`]),
      props.error && css(stylesheet[`${BASE_CLASSNAME}--error`]),
      props.visible && css(stylesheet[visible]),
      props.visibleOnFocus && css(stylesheet[visibleOnFocus])
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
