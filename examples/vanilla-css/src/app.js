import Button from '@pluralsight/ps-button/react'
import React from 'react'

// NOTE: css imports not possible here without app config

// TODO: finish styling when core can output vanilla bg-color and padding
export default _ =>
  <div className="app">
    <header>
      <h3>Pluralsight Design System</h3>
      <h2>Webpack Config Decoration</h2>
    </header>
    <div className="box">
      <Button
        className="ps-layout-spacing-large"
        size="large"
        appearance="stroke"
        onClick={_ => alert("It's working")}
      >
        Design System component
      </Button>
    </div>
  </div>
