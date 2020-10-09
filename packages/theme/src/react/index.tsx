import { ValueOf } from '@pluralsight/ps-design-system-util'
import hoistNonReactStatics from 'hoist-non-react-statics'
import React, {
  ComponentType,
  createContext,
  forwardRef,
  useContext
} from 'react'

import { defaultName, names } from '../vars'
export { defaultName, names }

type Names = typeof names
export const ThemeContext = createContext<ValueOf<Names>>(defaultName)

type ThemeProps = { name?: ValueOf<Names> }
type ThemeStatics = { defaultName: typeof defaultName; names: Names }
type ThemeComponent = React.FC<ThemeProps> & ThemeStatics

const Theme: ThemeComponent = props => {
  const { name = defaultName } = props

  return (
    <ThemeContext.Provider value={name}>{props.children}</ThemeContext.Provider>
  )
}

Theme.names = names
Theme.defaultName = defaultName

export default Theme

export function useTheme() {
  const themeName = useContext(ThemeContext)
  return themeName
}

function getDisplayName<T>(Component: ComponentType<T>) {
  if (typeof Component === 'string') return Component
  if (!Component) return

  return Component.displayName || Component.name || 'Component'
}

/**
 * @deprecated please use the useTheme hook to get theme information
 */
export function withTheme<T, P extends Record<string, unknown>>(
  BaseComponent: ComponentType<P>
) {
  const name = getDisplayName(BaseComponent)

  const Forwarded = forwardRef<T, P>((props, ref) => {
    const themeName = useTheme()

    return <BaseComponent ref={ref} themeName={themeName} {...(props as P)} />
  })

  Forwarded.displayName = `withTheme(${name})`

  return hoistNonReactStatics(Forwarded, BaseComponent)
}
