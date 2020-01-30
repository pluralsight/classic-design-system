// DS: import and used react components
import React from 'react'

import Button from '@pluralsight/ps-design-system-button/react'
import { CodeIcon } from '@pluralsight/ps-design-system-icon'
import Text from '@pluralsight/ps-design-system-text/react'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CodeIcon size={CodeIcon.sizes.large} className="App-logo" />

        <Text.P>
          Edit <Text.Code>src/App.js</Text.Code> and save to reload.
        </Text.P>

        <Button
          href="https://design-system.pluralsight.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn the Design System
        </Button>
      </header>
    </div>
  )
}
