import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'
import React from 'react'

import * as vars from '../vars'

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
    const themeName = useTheme()
    return <BaseComponent {...props} ref={ref} themeName={themeName} />
  })
  Forwarded.BaseComponent = BaseComponent
  Forwarded.displayName = `withTheme(${name})`

  return hoistNonReactStatics(Forwarded, BaseComponent)
}

export function useTheme() {
  const themeName = React.useContext(ThemeContext)
  return themeName
}

// NOTE: anything that uses <Theme /> from context only (no withTheme), will be broken with this new impl
// TODO: find this set of components ^ and update
export default function Theme(props) {
  return (
    <ThemeContext.Provider value={props.name}>
      {props.children}
    </ThemeContext.Provider>
  )
}
Theme.propTypes = {
  children: PropTypes.any,
  name: PropTypes.oneOf(Object.keys(vars.names)).isRequired
}
Theme.defaultProps = {
  name: vars.defaultName
}

Theme.names = vars.names
Theme.defaultName = vars.defaultName

export const defaultName = vars.defaultName
export const names = vars.names
