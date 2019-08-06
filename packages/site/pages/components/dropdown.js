import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import Dropdown from '@pluralsight/ps-design-system-dropdown/react'
import * as Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

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
  TextLink,
  withServerProps
} from '../../src/ui'

class InAppExample extends React.Component {
  constructor() {
    super()
    this.state = { value: 'int' }
  }
  render() {
    const options = [
      { value: 'beg', label: 'Beginner' },
      { value: 'int', label: 'Intermediate' },
      { value: 'adv', label: 'Advanced' }
    ]
    return (
      <div>
        <div className="example">
          <div className="dropdown">
            <Dropdown
              label="Level"
              placeholder={
                options.find(opt => opt.value === this.state.value).label ||
                'Select'
              }
              menu={
                <ActionMenu>
                  {options.map(opt => (
                    <ActionMenu.Item
                      key={opt.value}
                      onClick={_ => this.setState({ value: opt.value })}
                    >
                      {opt.label}
                    </ActionMenu.Item>
                  ))}
                </ActionMenu>
              }
            />
          </div>
          <div className="selection">Selected: {this.state.value}</div>
        </div>
        <Code
          lang="javascript"
          collapsible
        >{`class InAppExample extends React.Component {
  constructor() {
    super()
    this.state = { value: 'int' }
  }
  render() {
    const options = [
      { value: 'beg', label: 'Beginner' },
      { value: 'int', label: 'Intermediate' },
      { value: 'adv', label: 'Advanced' }
    ]
    return (
      <div>
        <Dropdown
          label="Level"
          placeholder={
            options.find(opt => opt.value === this.state.value).label ||
            'Select'
          }
          menu={
            <ActionMenu>
              {options.map(opt => (
                <ActionMenu.Item
                  key={opt.value}
                  onClick={_ => this.setState({ value: opt.value })}
                >
                  {opt.label}
                </ActionMenu.Item>
              ))}
            </ActionMenu>
          }
        />
        <div>Selected: {this.state.value}</div>
      </div>
    )
  }
}`}</Code>
        <style jsx>{`
          .example {
            display: flex;
            margin-bottom: ${core.layout.spacingMedium};
          }
          .selection {
            flex: 1;
            display: flex;
            align-items: center;
            margin: ${core.layout.spacingMedium} 0 0 0;
            padding: ${core.layout.spacingLarge};
            font-size: ${core.type.fontSizeMedium};
            color: ${core.colors.gray04};
            background: ${core.colors.bone};
            border-radius: 12px;
          }
          .dropdown {
            flex: 1;
            position: relative;
            z-index: 0;
            padding: ${core.layout.spacingLarge} ${core.layout.spacingLarge}
              104px ${core.layout.spacingLarge};
          }
        `}</style>
      </div>
    )
  }
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Dropdown">
      <PageHeading packageName="dropdown">Dropdown</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-dropdown
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Dropdown from '@pluralsight/ps-design-system-dropdown/react'
      </Code>
      <PropTypes
        props={[
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
            <code>ActionMenu</code>,
            true,
            null,
            'menu for dropdown contents'
          ]),
          PropTypes.row([
            'onChange',
            <span>(Event, value, label) => ()</span>,
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

      <SectionHeading>In-app example</SectionHeading>
      <P>
        The Dropdown menu is provided by the{' '}
        <Link href="/components/actionmenu">ActionMenu</Link>.
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
        includes={{ ActionMenu, Dropdown }}
        codes={[
          `<Dropdown
  label="Level"
  menu={
    <ActionMenu>
      <ActionMenu.Item>Beginner</ActionMenu.Item>
      <ActionMenu.Item>Intermediate</ActionMenu.Item>
      <ActionMenu.Item>Advanced</ActionMenu.Item>
    </ActionMenu>
  }
/>`,
          `<Dropdown
  label="Level"
  placeholder="Select level"
  menu={
    <ActionMenu>
      <ActionMenu.Item>Beginner</ActionMenu.Item>
      <ActionMenu.Item>Intermediate</ActionMenu.Item>
      <ActionMenu.Item>Advanced</ActionMenu.Item>
    </ActionMenu>
  }
/>`,
          `<Dropdown
  label="Level"
  placeholder="Select level"
  subLabel="Which audience is this course aimed at?"
  menu={
    <ActionMenu>
      <ActionMenu.Item>Beginner</ActionMenu.Item>
      <ActionMenu.Item>Intermediate</ActionMenu.Item>
      <ActionMenu.Item>Advanced</ActionMenu.Item>
    </ActionMenu>
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
        includes={{ ActionMenu, Dropdown }}
        codes={[
          `<Dropdown
  label="Level"
  placeholder="Intermediate"
  subLabel="Which audience is this course aimed at?"
  menu={
    <ActionMenu>
      <ActionMenu.Item>Beginner</ActionMenu.Item>
      <ActionMenu.Item>Intermediate</ActionMenu.Item>
      <ActionMenu.Item>Advanced</ActionMenu.Item>
    </ActionMenu>
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
        includes={{ ActionMenu, Dropdown, Theme }}
        codes={[
          `<Theme name={Theme.names.dark}>
  <Dropdown
    appearance={Dropdown.appearances.subtle}
    label="Level"
    placeholder="Select level"
    menu={
      <ActionMenu>
        <ActionMenu.Item>Beginner</ActionMenu.Item>
        <ActionMenu.Item>Intermediate</ActionMenu.Item>
        <ActionMenu.Item>Advanced</ActionMenu.Item>
      </ActionMenu>
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
        includes={{ ActionMenu, Dropdown }}
        codes={[
          `<Dropdown disabled label="Can't touch this" placeholder="Just try it" menu={<ActionMenu />} />`
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
        includes={{ ActionMenu, Dropdown }}
        codes={[
          `<Dropdown
  error
  label="Level"
  placeholder="Select level"
  menu={
    <ActionMenu>
      <ActionMenu.Item>Beginner</ActionMenu.Item>
      <ActionMenu.Item>Intermediate</ActionMenu.Item>
      <ActionMenu.Item>Advanced</ActionMenu.Item>
    </ActionMenu>
  }
/>`
        ]}
      />
    </Content>
  </Chrome>
))
