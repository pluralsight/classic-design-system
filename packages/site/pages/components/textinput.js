import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import * as Text from '@pluralsight/ps-design-system-text/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Text Input">
      <PageHeading beta packageName="textinput">
        Text Input
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-textinput
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import TextInput from '@pluralsight/ps-design-system-textinput/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'appearance',
            PropTypes.union(TextInput.appearances),
            null,
            <code>default</code>,
            <span>
              visual style (from <code>TextInput.appearances</code>)
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
            'icon',
            <code>Icon</code>,
            null,
            null,
            'Icon component'
          ]),
          PropTypes.row([
            'iconAlign',
            PropTypes.union(TextInput.iconAligns),
            null,
            <code>left</code>,
            <span>
              horizontal icon placement (from <code>TextInput.iconAligns</code>)
            </span>
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
            'placeholder',
            'string',
            null,
            null,
            'in-field usage hint'
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
        Primary identification of a text input comes through the{' '}
        <Text.Code>label</Text.Code>. Usage hints are given in the{' '}
        <Text.Code>placeholder</Text.Code>. Supporting text and error messaging
        is set in the <Text.Code>subLabel</Text.Code>.
      </P>
      <Example.React
        orient="vertical"
        themeToggle
        includes={{ TextInput }}
        codes={[
          `<TextInput label="First name" />`,
          `<TextInput label="First name" placeholder="Your given name" />`,
          `<TextInput
  label="First name"
  placeholder="Your given name"
  subLabel="As you'd like printed on your badge"
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
        includes={{ TextInput }}
        codes={[
          `<TextInput appearance={TextInput.appearances.subtle} placeholder="Search" />`
        ]}
      />

      <SectionHeading>Icon</SectionHeading>
      <P>
        Text Inputs may include an icon to the left or right of the field. Read
        more in the <Link href="/components/icon">icon docs</Link>.
      </P>
      <Example.React
        orient="vertical"
        themeToggle
        includes={{ TextInput, Icon }}
        codes={[
          `<TextInput
  icon={<Icon id={Icon.ids.search} />}
  placeholder="Search"
/>`,
          `<TextInput
  icon={<Icon id={Icon.ids.search} />}
  iconAlign={TextInput.iconAligns.right}
  placeholder="Search"
/>`
        ]}
      />

      <SectionHeading>Disabled</SectionHeading>
      <P>Disabled text inputs are unmodifiable and diminished visually.</P>
      <Example.React
        themeToggle
        includes={{ TextInput }}
        codes={[`<TextInput disabled label="Can't touch this" />`]}
      />

      <SectionHeading>Error</SectionHeading>
      <P>
        Error states are engaged with the <Text.Code>error</Text.Code> flag.
        Error-related messaging is sent to the <Text.Code>subLabel</Text.Code>{' '}
        prop.
      </P>
      <Example.React
        themeToggle
        includes={{ TextInput }}
        codes={[
          `<TextInput error label="First name" subLabel="Field is required" />`
        ]}
      />
    </Content>
  </Chrome>
))
