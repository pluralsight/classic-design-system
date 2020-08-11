/* eslint-disable react/display-name */
import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import * as Text from '@pluralsight/ps-design-system-text'
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
  SectionHeading,
  TextLink
} from '../../src/ui/index.js'

function InAppExample() {
  const options = [
    { value: 'beg', label: 'Beginner' },
    { value: 'int', label: 'Intermediate' },
    { value: 'adv', label: 'Advanced' }
  ]
  const [value, setValue] = React.useState(options[1].value)
  return (
    <div>
      <div className="example">
        <div className="dropdown">
          <Dropdown
            label="Level"
            placeholder="Select"
            onChange={(evt, value, label) => setValue(value)}
            menu={
              <>
                {options.map(opt => (
                  <Dropdown.Item key={opt.value} value={opt.value}>
                    {opt.label}
                  </Dropdown.Item>
                ))}
              </>
            }
            value={value}
          />
          <div className="button">
            <Button
              onClick={() => setValue('beg')}
              appearance={Button.appearances.secondary}
            >
              Set Beginner
            </Button>
          </div>
        </div>
        <div className="selection">Selected: {value}</div>
      </div>
      <Code lang="javascript" collapsible>{`function InAppExample() {
  const options = [
    { value: 'beg', label: 'Beginner' },
    { value: 'int', label: 'Intermediate' },
    { value: 'adv', label: 'Advanced' }
  ]
  const [value, setValue] = React.useState(options[1].value)
  return (
    <div>
      <Dropdown
        label="Level"
        placeholder="Select"
        onChange={(evt, value, label) => setValue(value)}
        menu={
          <>
            {options.map(opt => (
              <Dropdown.Item key={opt.value} value={opt.value}>
                {opt.label}
              </Dropdown.Item>
            ))}
          </>
        }
        value={value}
      />
      <Button onClick={() => setValue('beg')}>Set Beginner</Button>
      <div>Selected: {value}</div>
    </div>
  )
}`}</Code>
      <style jsx>{`
        .example {
          display: flex;
          margin-bottom: ${core.layout.spacingMedium};
        }
        .button {
          margin-top: ${core.layout.spacingLarge};
        }
        .selection {
          flex: 1;
          display: flex;
          align-items: center;
          margin: ${core.layout.spacingMedium} 0 0 0;
          padding: ${core.layout.spacingLarge};
          font-size: ${core.type.fontSizeMedium};
          color: ${core.colorsTextIcon.lowOnLight};
          background: ${core.colorsBackgroundLight[2]};
          border-radius: 12px;
        }
        .dropdown {
          flex: 1;
          position: relative;
          z-index: 0;
          padding: ${core.layout.spacingLarge} ${core.layout.spacingLarge} 104px
            ${core.layout.spacingLarge};
        }
      `}</style>
    </div>
  )
}

export default _ => (
  <Chrome>
    <Content title="Dropdown">
      <PageHeading packageName="dropdown">Dropdown</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-dropdown
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Dropdown from '@pluralsight/ps-design-system-dropdown'
      </Code>
      <PropTypes
        props={{
          Dropdown: [
            PropTypes.row([
              'appearance',
              PropTypes.union(Dropdown.appearances),
              null,
              <code>default</code>,
              <span>
                visual style (from <code>Dropdown.appearances</code>)
              </span>
            ]),
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
              'label',
              'string',
              null,
              null,
              'identifying string for dropdown'
            ]),
            PropTypes.row([
              'menu',
              <code>Dropdown.Item</code>,
              true,
              null,
              'menu for dropdown contents'
            ]),
            PropTypes.row([
              'onChange',
              <span>(Event, value, label) {'=>'} ()</span>,
              null,
              null,
              'triggered when an item selected'
            ]),
            PropTypes.row([
              'placeholder',
              'string',
              null,
              null,
              'in-field usage hint'
            ]),
            PropTypes.row([
              'size',
              PropTypes.union(Dropdown.sizes),
              null,
              <code>medium</code>,
              <span>
                horizontal icon placement (from <code>Dropdown.sizes</code>)
              </span>
            ]),
            PropTypes.row([
              'subLabel',
              'string',
              null,
              null,
              'supporting text or error messaging'
            ])
          ],
          'Dropdown.Item': [
            PropTypes.row([
              'disabled',
              'boolean',
              null,
              <code>false</code>,
              'visually disabled, non-interactive'
            ]),
            PropTypes.row(['href', 'string', null, null, 'anchor tag uri']),
            PropTypes.row([
              'icon',
              <code>*Icon</code>,
              null,
              null,
              'Icon component'
            ]),
            PropTypes.row([
              'menu',
              <code>Dropdown.Items</code>,
              null,
              null,
              'menu (Dropdown.Item)s'
            ]),
            PropTypes.row([
              'onClick',
              'Event => ()',
              null,
              null,
              'triggered on item select: click, enter or space'
            ]),
            PropTypes.row([
              'value',
              <code>string | number</code>,
              null,
              null,
              <span>
                value sent to <code>Menu#onChange</code>
              </span>
            ])
          ]
        }}
      />
      <P>
        The normal React form-related props are also acceptable and expected.
      </P>

      <SectionHeading>In-app example</SectionHeading>
      <P>
        Keep your own app state. Feed it to the dropdown with{' '}
        <Text.Code>value</Text.Code>. Listen for changes in the menu selection
        using <Text.Code>onChange</Text.Code>. The Dropdown menu is provided by
        the <Link href="/components/actionmenu">ActionMenu</Link>.
      </P>
      <InAppExample />

      <SectionHeading>Labels</SectionHeading>
      <P>
        Primary identification of a dropdown comes through the{' '}
        <Text.Code>label</Text.Code>. Usage hints are given in the{' '}
        <Text.Code>placeholder</Text.Code>. Supporting text and error messaging
        is set in the <Text.Code>subLabel</Text.Code>.
      </P>
      <Example.React
        orient="vertical"
        outputStyle={{ paddingBottom: '96px' }}
        themeToggle
        includes={{ Dropdown }}
        codes={[
          `<Dropdown
  label="Level"
  menu={
    <React.Fragment>
      <Dropdown.Item>Beginner</Dropdown.Item>
      <Dropdown.Item>Intermediate</Dropdown.Item>
      <Dropdown.Item>Advanced</Dropdown.Item>
    </React.Fragment>
  }
/>`,
          `<Dropdown
  label="Level"
  placeholder="Select level"
  menu={
    <React.Fragment>
      <Dropdown.Item>Beginner</Dropdown.Item>
      <Dropdown.Item>Intermediate</Dropdown.Item>
      <Dropdown.Item>Advanced</Dropdown.Item>
    </React.Fragment>
  }
/>`,
          `<Dropdown
  label="Level"
  placeholder="Select level"
  subLabel="Which audience is this course aimed at?"
  menu={
    <React.Fragment>
      <Dropdown.Item>Beginner</Dropdown.Item>
      <Dropdown.Item>Intermediate</Dropdown.Item>
      <Dropdown.Item>Advanced</Dropdown.Item>
    </React.Fragment>
  }
/>`
        ]}
      />

      <SectionHeading>Pre-selected Label</SectionHeading>
      <P>
        To pre-select a label, use the <Text.Code>placeholder</Text.Code> prop.
        Note that this is a visual preselection only, which will work for most
        React apps where your data model with the initial *value* is held in
        memory somewhere already. To see this in action, refer to the{' '}
        <TextLink href="#in-app-example">In-app example</TextLink> above.
      </P>
      <Example.React
        orient="vertical"
        outputStyle={{ paddingBottom: '96px' }}
        themeToggle
        includes={{ Dropdown }}
        codes={[
          `<Dropdown
  label="Level"
  placeholder="Intermediate"
  subLabel="Which audience is this course aimed at?"
  menu={
    <React.Fragment>
      <Dropdown.Item>Beginner</Dropdown.Item>
      <Dropdown.Item>Intermediate</Dropdown.Item>
      <Dropdown.Item>Advanced</Dropdown.Item>
    </React.Fragment>
  }
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
        outputStyle={{ paddingBottom: '128px' }}
        includes={{ Dropdown, Theme }}
        codes={[
          `<Theme name={Theme.names.dark}>
  <Dropdown
    appearance={Dropdown.appearances.subtle}
    label="Level"
    placeholder="Select level"
    menu={
      <React.Fragment>
        <Dropdown.Item>Beginner</Dropdown.Item>
        <Dropdown.Item>Intermediate</Dropdown.Item>
        <Dropdown.Item>Advanced</Dropdown.Item>
      </React.Fragment>
    }
  />
</Theme>`
        ]}
      />

      <SectionHeading>Disabled</SectionHeading>
      <P>
        Disabled dropdowns are unmodifiable, not interactive, and diminished
        visually.
      </P>
      <Example.React
        themeToggle
        includes={{ Dropdown }}
        codes={[
          `<Dropdown disabled label="Can't touch this" placeholder="Just try it" />`
        ]}
      />

      <SectionHeading>Error</SectionHeading>
      <P>
        Error states are engaged with the <Text.Code>error</Text.Code> flag.
        Error-related messaging is sent to the <Text.Code>subLabel</Text.Code>{' '}
        prop.
      </P>
      <Example.React
        themeToggle
        outputStyle={{ paddingBottom: '128px' }}
        includes={{ Dropdown }}
        codes={[
          `<Dropdown
  error
  label="Level"
  placeholder="Select level"
  menu={
    <React.Fragment>
      <Dropdown.Item>Beginner</Dropdown.Item>
      <Dropdown.Item>Intermediate</Dropdown.Item>
      <Dropdown.Item>Advanced</Dropdown.Item>
    </React.Fragment>
  }
/>`
        ]}
      />
      <SectionHeading>Size</SectionHeading>
      <P>
        The small dropdown is ideal for usage within table rows otherwise use
        the default, medium size dropdown, in forms for example.
      </P>
      <Example.React
        orient="vertical"
        outputStyle={{ paddingBottom: '116px' }}
        themeToggle
        includes={{ Dropdown }}
        codes={[
          `<Dropdown
  placeholder="medium dropdown"
  menu={
    <React.Fragment>
      <Dropdown.Item>Beginner</Dropdown.Item>
      <Dropdown.Item>Intermediate</Dropdown.Item>
      <Dropdown.Item>Advanced</Dropdown.Item>
    </React.Fragment>
  }
/>`,
          `<Dropdown
  size={Dropdown.sizes.small}
  placeholder="Small dropdown"
  menu={
    <React.Fragment>
      <Dropdown.Item>Beginner</Dropdown.Item>
      <Dropdown.Item>Intermediate</Dropdown.Item>
      <Dropdown.Item>Advanced</Dropdown.Item>
    </React.Fragment>
  }
/>`
        ]}
      />
    </Content>
  </Chrome>
)
