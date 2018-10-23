import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'
import React from 'react'

import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

const getDisplayName = Component => {
  if (typeof Component === 'string') return Component

  if (!Component) return undefined

  return Component.displayName || Component.name || 'Component'
}

export default function withDefaultTheme (BaseComponent) {
  const name = getDisplayName(BaseComponent)

  const EnhancedComponent = (props, context = {}) => {
    const themeName = props.themeName || context.themeName || themeDefaultName
    return <BaseComponent {...props} themeName={themeName} />
  }

  EnhancedComponent.BaseComponent = BaseComponent
  EnhancedComponent.contextTypes = { themeName: PropTypes.string }
  EnhancedComponent.displayName = `withDefaultTheme(${name})`

  return hoistNonReactStatics(EnhancedComponent, BaseComponent)
}
