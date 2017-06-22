import Button from '@pluralsight/ps-button/react'
import React from 'react'

export default _ =>
  <div className="app ps-type-font-family">
    <header>
      <h3>Pluralsight Design System</h3>
      <h2>Webpack Config Decoration</h2>
    </header>
    <div className="ps-colors-gray03--background-color ps-layout-spacing-large--padding box">
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
