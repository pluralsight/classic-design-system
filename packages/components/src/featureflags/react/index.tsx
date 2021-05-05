import React from 'react'

interface FeatureFlagsContextValue {
  flags: Record<string, unknown>
}
export const FeatureFlagsContext = React.createContext<FeatureFlagsContextValue>(
  {
    flags: {}
  }
)

export function useFeatureFlags() {
  const context = React.useContext(FeatureFlagsContext)
  return context
}

interface FeatureFlagsProps {
  flags?: Record<string, unknown>
}
export const FeatureFlags: React.FC<FeatureFlagsProps> = props => {
  const context = { flags: props.flags || {} }
  return (
    <FeatureFlagsContext.Provider value={context}>
      {props.children}
    </FeatureFlagsContext.Provider>
  )
}
