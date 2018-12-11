import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css from '../css'
import * as vars from '../vars'

import fileNames from './file-names'

export const loadIconByID = id => {
  try {
    return require('./icons/' + fileNames[id]).default
  } catch (err) {
    return null
  }
}

const style = {
  icon: ({ css: propCSS = {}, color, size }) =>
    glamor.css({
      ...css['.psds-icon'],
      ...css[`.psds-icon--size-${size}`],

      '> svg': color
        ? css[`.psds-icon--color-${color} > svg`]
        : css['.psds-icon > svg']
    })
}

const Icon = ({ id, ...props }) => {
  const Comp = props.children || loadIconByID(id)

  return (
    <div {...style.icon(props)} {...filterReactProps(props)}>
      <Comp />
    </div>
  )
}

Icon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(vars.colors)),
  id: PropTypes.oneOf(Object.values(vars.ids)),
  size: PropTypes.oneOf(Object.values(vars.sizes))
}
Icon.defaultProps = {
  size: vars.sizes.medium
}
Icon.colors = vars.colors
Icon.ids = vars.ids
Icon.sizes = vars.sizes

export const ids = vars.ids
export const sizes = vars.sizes
export const colors = vars.colors

export default Icon
