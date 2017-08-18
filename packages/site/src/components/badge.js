import React from 'react'

import {
  Code,
  Example,
  Heading,
  Link,
  P,
  PageHeading
} from '../common/components'

import Badge from '@pluralsight/ps-design-system-badge/react'

export default _ =>
  <div>
    <PageHeading beta>Badge</PageHeading>

    <P>Install the component dependency:</P>
    <Code language="bash">
      npm install @pluralsight/ps-design-system-badge --save-dev
    </Code>

    <P>Include a React component in your project:</P>
    <Code language="javascript">
      import Badge from '@pluralsight/ps-design-system-badge/react'
    </Code>

    <Heading size="large">
      <h2>Appearance</h2>
    </Heading>
    <P>In either solid or stroked styles.</P>
    <Example.React
      codes={[
        `<Badge>Badge</Badge>`,
        `<Badge appearance="stroke">Badge</Badge>`
      ]}
    />

    <Heading size="large">
      <h2>Colors</h2>
    </Heading>
    <P>
      Colors come from the Design System. Semantics come from your heart.
    </P>
    <Example.React
      codes={Object.keys(Badge.colors).map(
        color => `<Badge color={Badge.colors.${color}}>Badge</Badge>`
      )}
    />
  </div>
