import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'
import React from 'react'

import { defaultName as themeDefaultName } from '.'

const getDisplayName = Component => {
  if (typeof Component === 'string') return Component

  if (!Component) return undefined

  return Component.displayName || Component.name || 'Component'
}

export default function withTheme(BaseComponent, options = {}) {
  const { forwardRef = true } = options
  const name = getDisplayName(BaseComponent)

  const EnhancedComponent = ({ forwardedRef, ...props }, context) => {
    const themeName = context.themeName || themeDefaultName
    return <BaseComponent {...props} ref={forwardedRef} themeName={themeName} />
  }

  EnhancedComponent.contextTypes = { themeName: PropTypes.string }
  EnhancedComponent.propTypes = { forwardedRef: PropTypes.any }

  if (forwardRef) {
    const Forwarded = React.forwardRef(function forwardThemeRef(props, ref) {
      return <EnhancedComponent {...props} forwardedRef={ref} />
    })
    Forwarded.BaseComponent = BaseComponent
    Forwarded.displayName = `withTheme(${name})`

    return hoistNonReactStatics(Forwarded, BaseComponent)
  }

  EnhancedComponent.BaseComponent = BaseComponent
  EnhancedComponent.displayName = `withTheme(${name})`
  return hoistNonReactStatics(EnhancedComponent, BaseComponent)
}
