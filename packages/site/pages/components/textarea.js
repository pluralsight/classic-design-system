import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text'
import TextArea from '@pluralsight/ps-design-system-textarea/react.js'

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
    <Content title="Text Area">
      <PageHeading packageName="textarea">Text Area</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-textarea
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import TextArea from '@pluralsight/ps-design-system-textarea/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'disabled',
            'boolean',
            null,
            <code>false</code>,
            'standard input disabled flag'
          ]),
          PropTypes.row([
            'error',
            'boolean',
            null,
            <code>false</code>,
            'error state flag'
          ]),
          PropTypes.row([
            'innerRef',
            'DOM element => ()',
            null,
            null,
            'textarea field react ref callback'
          ]),
          PropTypes.row([
            'label',
            'string',
            null,
            null,
            'identifying string for input'
          ]),
          PropTypes.row([
            'placeholder',
            'string',
            null,
            null,
            'in-field usage hint'
          ]),
          PropTypes.row([
            'rows',
            'number',
            null,
            <code>4</code>,
            'expand the viewable rows (height)'
          ]),
          PropTypes.row([
            'subLabel',
            'string',
            null,
            null,
            'supporting text or error messaging'
          ])
        ]}
      />
      <P>
        The normal React form-related props are also acceptable and expected.
      </P>

      <SectionHeading>Labels</SectionHeading>
      <P>
        Primary identification of a text area comes through the{' '}
        <Text.Code>label</Text.Code>. Usage hints are given in the{' '}
        <Text.Code>placeholder</Text.Code>. Supporting text and error messaging
        is set in the <Text.Code>subLabel</Text.Code>.
      </P>
      <Example.React
        orient="vertical"
        themeToggle
        includes={{ TextArea }}
        codes={[
          `<TextArea label="Bio" />`,
          `<TextArea label="Bio" placeholder="What brought you to authoring?" />`,
          `<TextArea
  label="Bio"
  placeholder="What brought you to authoring?"
  subLabel="The short version"
/>`
        ]}
      />

      <SectionHeading>Disabled</SectionHeading>
      <P>Disabled text inputs are unmodifiable and diminished visually.</P>
      <Example.React
        themeToggle
        includes={{ TextArea }}
        codes={[`<TextArea disabled label="Can't touch this" />`]}
      />

      <SectionHeading>Error</SectionHeading>
      <P>
        Error states are engaged with the <Text.Code>error</Text.Code> flag.
        Error-related messaging is sent to the <Text.Code>subLabel</Text.Code>{' '}
        prop.
      </P>
      <Example.React
        themeToggle
        includes={{ TextArea }}
        codes={[`<TextArea error label="Bio" subLabel="Field is required" />`]}
      />

      <SectionHeading>Rows</SectionHeading>
      <P>
        To increase the height of the text area, use the{' '}
        <Text.Code>rows</Text.Code> prop.
      </P>
      <Example.React
        themeToggle
        includes={{ TextArea }}
        codes={[
          `<TextArea rows={8} label="Bio" subLabel="Field is required" />`
        ]}
      />
    </Content>
  </Chrome>
)
