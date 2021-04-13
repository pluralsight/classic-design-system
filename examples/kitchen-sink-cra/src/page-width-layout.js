import {
  colorsPink,
  colorsPurple,
  layout,
} from '@pluralsight/ps-design-system-core'
import { PageWidthLayout } from '@pluralsight/ps-design-system-layout'
import { P } from '@pluralsight/ps-design-system-text'
import Theme from '@pluralsight/ps-design-system-theme'
import React from 'react'

const Example = (props) => {
  return (
    <React.Fragment>
      <Theme name={Theme.names.dark}>
        <header className="header">
          <PageWidthLayout>
            <div className="outline">
              <P>Contents in front of full-bleed background</P>
            </div>
          </PageWidthLayout>
        </header>
      </Theme>

      <PageWidthLayout>
        <div className="outline">
          <P>Normal case contents layout</P>
        </div>
      </PageWidthLayout>
    </React.Fragment>
  )
}

export default Example
