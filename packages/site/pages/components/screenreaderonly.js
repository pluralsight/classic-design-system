import React from 'react'

import {
  Chrome,
  Code,
  Content,
  P,
  PageHeading,
  SectionHeading
} from '../../src/ui/index.js'

export default () => (
  <Chrome>
    <Content title="ScreenReaderOnly">
      <PageHeading packageName="screenreaderonly">ScreenReaderOnly</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-screenreaderonly
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Typeahead from '@pluralsight/ps-design-system-screenreaderonly'
      </Code>

      <SectionHeading>Usage example</SectionHeading>
      <br />
      <Code language="javascript">
        {'<ScreenReaderOnly>content only for screen readers</ScreenReaderOnly>'}
      </Code>
    </Content>
  </Chrome>
)
