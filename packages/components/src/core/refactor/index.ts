import breakpoints from '../js/breakpoints'
import layers from '../js/layers'
import layout from '../js/layout'
import type from '../js/type'
import motion from '../js/motion'
import * as colors from '../js/colors'

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

type Tokens = {
  breakpoints: typeof breakpoints
  layers: typeof layers
  layout: typeof layout
  type: typeof type
  motion: typeof motion
} & typeof colors

export const refactorCssVars = Object.entries({
  breakpoints,
  layers,
  layout,
  type,
  motion,
  ...colors
}).reduce((acc, [group, obj]) => {
  const keys: Record<string, string> = {}
  Object.keys(obj).forEach(key => {
    keys[key] = `var(--ps${capitalizeFirstLetter(group)}${capitalizeFirstLetter(
      key
    )})`
  })
  return { ...acc, [group]: { ...keys } }
}, {}) as Tokens
