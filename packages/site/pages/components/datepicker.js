import * as Text from '@pluralsight/ps-design-system-text/react.js'
import DatePicker from '@pluralsight/ps-design-system-datepicker/react.js'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react.js'

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
    <Content title="Date Picker">
      <PageHeading packageName="datepicker">Date Picker</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-datepicker
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import DatePicker from '@pluralsight/ps-design-system-datepicker/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'appearance',
            PropTypes.union(DatePicker.appearances),
            null,
            <code>default</code>,
            <span>
              visual style (from <code>DatePicker.appearances</code>)
            </span>
          ]),
          PropTypes.row([
            'disabled',
            'boolean',
            null,
            <code>false</code>,
            'standard input disable flag'
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
            'input field react ref callback'
          ]),
          PropTypes.row([
            'label',
            'string',
            null,
            null,
            'identifying string for input'
          ]),
          PropTypes.row([
            'onBlur',
            "('mm/dd/yyyy') => ()",
            null,
            null,
            'on subfield blur, returns null if invalid date'
          ]),
          PropTypes.row([
            'onSelect',
            "('mm/dd/yyyy') => ()",
            null,
            null,
            'triggered when new valid date selected'
          ]),
          PropTypes.row([
            'subLabel',
            'string',
            null,
            null,
            'supporting text or error messaging'
          ]),
          PropTypes.row([
            'value',
            'string',
            null,
            null,
            <span>
              current date as a string (format <code>mm/dd/yyyy</code>)
            </span>
          ])
        ]}
      />
      <P>
        The normal React form-related props are also acceptable and expected.
      </P>

      <SectionHeading>Labels</SectionHeading>
      <P>
        Primary identification of a date picker comes through the{' '}
        <Text.Code>label</Text.Code>. Supporting text and error messaging is set
        in the <Text.Code>subLabel</Text.Code>.
      </P>
      <Example.React
        orient="vertical"
        themeToggle
        outputStyle={{ paddingBottom: '336px' }}
        includes={{ DatePicker }}
        codes={[
          `<DatePicker label="Publish date" />`,
          `<DatePicker
  label="Publish date"
  subLabel="When your course will go live"
/>`
        ]}
      />

      <SectionHeading>Appearance</SectionHeading>
      <P>
        When using the <Text.Code>dark</Text.Code> theme, a{' '}
        <Text.Code>subtle</Text.Code> appearance is available.{' '}
      </P>
      <Example.React
        orient="vertical"
        themeToggle
        outputStyle={{ paddingBottom: '336px' }}
        includes={{ DatePicker, Theme }}
        codes={[
          `<Theme name={Theme.names.dark}>
  <DatePicker appearance={DatePicker.appearances.subtle} />
</Theme>`
        ]}
      />

      <SectionHeading>Disabled</SectionHeading>
      <P>Disabled date pickers are unmodifiable and diminished visually.</P>
      <Example.React
        themeToggle
        includes={{ DatePicker }}
        codes={[`<DatePicker disabled label="Can't touch this" />`]}
      />

      <SectionHeading>Error</SectionHeading>
      <P>
        Error states are engaged with the <Text.Code>error</Text.Code> flag.
        Error-related messaging is sent to the <Text.Code>subLabel</Text.Code>{' '}
        prop.
      </P>
      <Example.React
        themeToggle
        outputStyle={{ paddingBottom: '336px' }}
        includes={{ DatePicker }}
        codes={[
          `<DatePicker error label="Publish date" subLabel="Field is required" />`
        ]}
      />
    </Content>
  </Chrome>
)
