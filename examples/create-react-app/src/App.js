import Button from '@pluralsight/ps-design-system-button/react'
import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="ps-colors-gray03--background-color ps-layout-spacing-large--padding box">
          <Button>Click me</Button>
        </div>
      </div>
    )
  }
}

export default App
