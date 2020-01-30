// DS: import and used react components
import Button from '@pluralsight/ps-design-system-button/react'
import { CodeIcon } from '@pluralsight/ps-design-system-icon'
import Text from '@pluralsight/ps-design-system-text/react'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
    );
  }
}

export default App;
