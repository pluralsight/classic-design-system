import { SearchIcon } from '@pluralsight/ps-design-system-icon'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text'
import TextInput from '@pluralsight/ps-design-system-textinput'
import Theme from '@pluralsight/ps-design-system-theme'

import {
  Chrome,
  Code,
  Content,
  Example,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Text Input">
      <PageHeading packageName="textinput">Text Input</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-textinput
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import TextInput from '@pluralsight/ps-design-system-textinput'
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
            <code>*Icon</code>,
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
            'ref',
            'Ref || { field: Ref,input: Ref, }',
            null,
            null,
            'refs to access underlying elements'
          ]),
          PropTypes.row([
            'size',
            PropTypes.union(TextInput.sizes),
            null,
            <code>medium</code>,
            <span>
              horizontal icon placement (from <code>TextInput.sizes</code>)
            </span>
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

      <SectionHeading>Icon</SectionHeading>
      <P>
        Text Inputs may include an icon to the left or right of the field. Read
        more in the <Link href="/components/icon">icon docs</Link>.
      </P>
      <Example.React
        orient="vertical"
        themeToggle
        includes={{ TextInput, SearchIcon }}
        codes={[
          `<TextInput
  icon={<SearchIcon />}
  placeholder="Search"
/>`,
          `<TextInput
  icon={<SearchIcon />}
  iconAlign={TextInput.iconAligns.right}
  placeholder="Search"
/>`
        ]}
      />

      <SectionHeading>Appearance</SectionHeading>
      <P>
        For a more subtle look, use <Text.Code>subtle</Text.Code> appearance. So
        subtle.
      </P>
      <Example.React
        orient="vertical"
        includes={{ TextInput, Theme, SearchIcon }}
        themeToggle
        codes={[
          `<TextInput
  appearance={TextInput.appearances.subtle}
  icon={<SearchIcon />}
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
      <SectionHeading>Size</SectionHeading>
      <P>
        The small text input is ideal for usage within table rows otherwise use
        the default, medium size text input, in forms for example.
      </P>
      <Example.React
        orient="vertical"
        outputStyle={{ paddingBottom: '116px' }}
        themeToggle
        includes={{ TextInput }}
        codes={[
          `
<TextInput
placeholder="medium text input"
/>`,
          `<TextInput
placeholder="small text input"
size={TextInput.sizes.small}
/>
          `
        ]}
      />
    </Content>
  </Chrome>
)
