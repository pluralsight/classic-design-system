import React from 'react'
import Badge from '@pluralsight/ps-design-system-badge'
import * as core from '@pluralsight/ps-design-system-core'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Badge">
      <PageHeading packageName="badge">Badge</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-badge
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Badge from '@pluralsight/ps-design-system-badge'
      </Code>

      <PropTypes
        title="PropTypes"
        props={[
          PropTypes.row([
            'appearance',
            PropTypes.union(Badge.appearances),
            null,
            <code>default</code>,
            <span>
              visual style (from <code>Badge.appearances</code>)
            </span>
          ]),
          PropTypes.row([
            'color',
            PropTypes.union(Badge.colors),
            null,
            <code>gray</code>,
            <span>
              badge color (from <code>Badge.colors</code>)
            </span>
          ])
        ]}
      />

      <SectionHeading>Colors &amp; appearance</SectionHeading>
      <P>Colors come from the Design System. Semantics come from your heart.</P>
      <Example.React
        includes={{ Badge }}
        themeToggle
        outputStyle={{ display: 'grid', gap: core.layout.spacingMedium }}
        outputChildStyle={{
          margin: 0,
          display: 'grid',
          gridTemplateColumns: 'min-content min-content',
          gap: core.layout.spacingMedium
        }}
        orient="vertical"
        codes={Object.values(Badge.colors).map(
          color => `<Badge color={Badge.colors.${color}}>Badge</Badge>
<Badge color={Badge.colors.${color}} appearance={Badge.appearances.subtle}>Badge</Badge>`
        )}
      />
    </Content>
  </Chrome>
)
