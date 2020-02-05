import React from 'react'
import PropTypes from 'prop-types'

import FeatureFlags from '@pluralsight/ps-design-system-featureflags'

const App = ({ Component, pageProps }) => (
  <FeatureFlags flags={{ psds2020Colors: true }}>
    <Component {...pageProps} />
  </FeatureFlags>
)

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any
}

export default App
