import Button from '@pluralsight/ps-design-system-button/react'
import React from 'react'

export default _ =>
  <div className="app ps-type-font-family">
    <header>
      <h3>Pluralsight Design System</h3>
      <h2>Srsly Vanilla CSS</h2>
    </header>
    <div className="ps-colors-gray03--background-color ps-layout-spacing-large--padding box">
      <Button
        className="app-button-override"
        size="large"
        appearance="stroke"
        onClick={_ => alert("It's working")}
      >
        Overridden Design System component
      </Button>
    </div>
  </div>
