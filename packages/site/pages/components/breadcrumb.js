import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import Breadcrumb from '@pluralsight/ps-design-system-breadcrumb/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Guideline,
  Heading,
  Intro,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Breadcrumb">
      <PageHeading packageName="breadcrumb">Breadcrumb</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-breadcrumb
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Breadcrumb from '@pluralsight/ps-design-system-breadcrumb/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'disabled',
            'boolean',
            null,
            <code>false</code>,
            'standard input disable flag'
          ]),
          PropTypes.row([
            'innerRef',
            'DOM element => ()',
            null,
            null,
            'react ref callback'
          ])
        ]}
      />

      <SectionHeading>Placement</SectionHeading>
      <P>
        The breadcrumb may be placed either above or below tabs in the top-left
        region of the page.
      </P>
      <Example.React
        includes={{ Breadcrumb }}
        codes={[`<Breadcrumb>All channels</Breadcrumb>`]}
      />

      <SectionHeading>Guidelines</SectionHeading>
      <P>
        No mention of "back to" should be used. Instead name the location that
        the breadcrumb is linked to.
      </P>
      <Guideline
        do={<Breadcrumb>All channels</Breadcrumb>}
        dont={<Breadcrumb>Back to channels</Breadcrumb>}
      />

      <P>Breadcrumb labels should be written in sentence case.</P>
      <Guideline
        do={<Breadcrumb>All channels</Breadcrumb>}
        dont={<Breadcrumb>All Channels</Breadcrumb>}
      />
    </Content>
  </Chrome>
))
