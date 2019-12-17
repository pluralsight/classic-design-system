import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'
import React from 'react'

import * as vars from '../vars/index.js'

export const ThemeContext = React.createContext(vars.defaultName)

const getDisplayName = Component => {
  if (typeof Component === 'string') return Component

  if (!Component) return undefined

  return Component.displayName || Component.name || 'Component'
}

// NOTE: anything that uses withTheme is ok for now, but everything/anything can move to useTheme
export function withTheme(BaseComponent) {
  const name = getDisplayName(BaseComponent)

  const Forwarded = React.forwardRef((props, ref) => {
    const { enableBleutrals, ...rest } = props
    const themeName = useTheme({ enableBleutrals })
    return <BaseComponent {...rest} ref={ref} themeName={themeName} />
  })
  Forwarded.BaseComponent = BaseComponent
  Forwarded.displayName = `withTheme(${name})`
  Forwarded.propTypes = {
    enableBleutrals: PropTypes.bool
  }
  Forwarded.defaultProps = {
    enableBleutrals: false
  }

  return hoistNonReactStatics(Forwarded, BaseComponent)
}

export function useTheme(config) {
  const themeName = React.useContext(ThemeContext)
  const bleutralsAdjustedThemeName =
    config && config.enableBleutrals ? themeName + 'Bleutrals' : themeName
  return bleutralsAdjustedThemeName
}

// NOTE: anything that uses <Theme /> from context only (no withTheme), will be broken with this new impl
// TODO: find this set of components ^ and update
export default function Theme(props) {
  const value = props.enableBleutrals ? props.name + 'Bleutrals' : props.name
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}
Theme.propTypes = {
  children: PropTypes.any,
  enableBleutrals: PropTypes.bool,
  name: PropTypes.oneOf(Object.keys(vars.names)).isRequired
}
Theme.defaultProps = {
  enableBleutrals: false,
  name: vars.defaultName
}

Theme.names = vars.names
Theme.defaultName = vars.defaultName

export const defaultName = vars.defaultName
export const names = vars.names
