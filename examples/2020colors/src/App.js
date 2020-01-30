import Button from '@pluralsight/ps-design-system-button'
import FeatureFlags from '@pluralsight/ps-design-system-featureflags'
import Link from '@pluralsight/ps-design-system-link'
import React from 'react'
import { Code, P, List } from '@pluralsight/ps-design-system-text'
import Theme from '@pluralsight/ps-design-system-theme'

import './App.css'

function App() {
  const [flag, setFlag] = React.useState(false)
  return (
    <FeatureFlags flags={{ psds2020Colors: flag }}>
      <Theme>
        <div className="App">
          <div>
            <button
              onClick={() => setFlag(!flag)}
              style={{ marginBottom: '3rem' }}
            >
              Toggle fake colors feature flag {flag ? 'off' : 'on'}
            </button>
          </div>
          <Button>DS Button</Button>
          <Link>
            <a href="#">DS Link</a>
          </Link>
          <Code>DS Text.Code</Code>
          <P>DS Text.P</P>
          <List>
            <List.Item>DS.List Item 1</List.Item>
            <List.Item>DS.List Item 2</List.Item>
            <List.Item>DS.List Item 3</List.Item>
          </List>
        </div>
      </Theme>
    </FeatureFlags>
  )
}

export default App
