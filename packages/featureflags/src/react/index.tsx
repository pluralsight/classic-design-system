import PropTypes from 'prop-types'
import React from 'react'

export const FeatureFlagsContext = React.createContext({
  flags: {}
})

export function useFeatureFlags() {
  const context = React.useContext(FeatureFlagsContext)
  return context
}

function FeatureFlags(props) {
  const context = { flags: props.flags }
  return (
    <FeatureFlagsContext.Provider value={context}>
      {props.children}
    </FeatureFlagsContext.Provider>
  )
}

FeatureFlags.propTypes = {
  children: PropTypes.any,
  flags: PropTypes.object
}
FeatureFlags.defaultProps = {
  flags: {}
}

export default FeatureFlags
