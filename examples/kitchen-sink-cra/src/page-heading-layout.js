import Button from '@pluralsight/ps-design-system-button'
import {
  PageHeadingLayout,
  PageWidthLayout
} from '@pluralsight/ps-design-system-layout'
import { Heading, P } from '@pluralsight/ps-design-system-text'
import React from 'react'

const Example = props => {
  return (
    <React.Fragment>
      <PageWidthLayout>
        <PageHeadingLayout
          actions={[
            <Button key="btn-1" appearance={Button.appearances.stroke}>
              Button
            </Button>,
            <Button key="btn-2">Button</Button>
          ]}
          heading={
            <Heading size={Heading.sizes.large}>
              <h2>Page title</h2>
            </Heading>
          }
        >
          <div className="outline">
            <P>Your page contents here</P>
          </div>
        </PageHeadingLayout>
      </PageWidthLayout>
    </React.Fragment>
  )
}

export default Example
