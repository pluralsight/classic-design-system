import React from 'react'
import ViewToggle from '@pluralsight/ps-design-system-viewtoggle/react.js'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  TextLink
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="View Toggle">
      <PageHeading packageName="viewtoggle">View Toggle</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-viewtoggle
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import ViewToggle from '@pluralsight/ps-design-system-viewtoggle/react'
      </Code>

      <PropTypes
        props={{
          ViewToggle: [
            PropTypes.row([
              'children',
              <code>ViewToggle.Option[]</code>,
              null,
              null,
              'options to appear in toggle'
            ]),
            PropTypes.row([
              'onSelect',
              'function',
              null,
              null,
              'triggered when an option is clicked'
            ])
          ],
          'ViewToggle.Option': [
            PropTypes.row([
              'active',
              'boolean',
              null,
              'first option is active',
              'marks as selected'
            ])
          ]
        }}
      />

      <SectionHeading>Toggling</SectionHeading>
      <P>
        View toggles are used when there are just a couple options to switch
        between. Use a <TextLink href="/components/tab">Tab</TextLink> component
        when more options exist.
      </P>
      <Example.React
        includes={{ ViewToggle }}
        codes={[
          `
<ViewToggle>
  <ViewToggle.Option active>Option 1</ViewToggle.Option>
  <ViewToggle.Option>Option 2</ViewToggle.Option>
</ViewToggle>
`
        ]}
      />

      <SectionHeading>More options</SectionHeading>
      <P>Make a toggle with up to 3 options.</P>
      <Example.React
        includes={{ ViewToggle }}
        codes={[
          `
<ViewToggle>
  <ViewToggle.Option>Option 1</ViewToggle.Option>
  <ViewToggle.Option>Option 2</ViewToggle.Option>
  <ViewToggle.Option active>Option 3</ViewToggle.Option>
</ViewToggle>
`
        ]}
      />

      <SectionHeading>Long labels</SectionHeading>
      <P>Keep labels short. Long labels will truncate with ellipsis.</P>
      <Example.React
        includes={{ ViewToggle }}
        codes={[
          `
<ViewToggle>
  <ViewToggle.Option active>Option 1</ViewToggle.Option>
  <ViewToggle.Option>Option 2 that is such long you'll never see the end of it</ViewToggle.Option>
</ViewToggle>
`
        ]}
      />
    </Content>
  </Chrome>
)
