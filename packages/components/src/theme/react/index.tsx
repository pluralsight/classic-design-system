import { ValueOf } from '../../util'
import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'

import { themeDefaultName, themeNames } from '../vars/index'

type Names = typeof themeNames
export const ThemeContext = React.createContext<ValueOf<Names>>(
  themeDefaultName
)

type ThemeProps = { name?: ValueOf<Names> }
type ThemeStatics = { defaultName: typeof themeDefaultName; names: Names }
type ThemeComponent = React.FC<ThemeProps> & ThemeStatics

export const Theme: ThemeComponent = props => {
  const { name = themeDefaultName } = props

  return (
    <ThemeContext.Provider value={name}>{props.children}</ThemeContext.Provider>
  )
}

Theme.names = themeNames
Theme.defaultName = themeDefaultName

export function useTheme() {
  const themeName = React.useContext(ThemeContext)
  return themeName
}

function getDisplayName<T>(Component: React.ComponentType<T>) {
  if (typeof Component === 'string') return Component
  if (!Component) return

  return Component.displayName || Component.name || 'Component'
}

/**
 * @deprecated please use the useTheme hook to get theme information
 */
export function withTheme<T, P extends Record<string, unknown>>(
  BaseComponent: React.ComponentType<P>
) {
  const name = getDisplayName(BaseComponent)

  const Forwarded = React.forwardRef<T, P>((props, ref) => {
    const themeName = useTheme()

    return <BaseComponent ref={ref} themeName={themeName} {...(props as P)} />
  })

  Forwarded.displayName = `withTheme(${name})`

  return hoistNonReactStatics(Forwarded, BaseComponent)
}
