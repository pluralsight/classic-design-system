import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'
import Switch from '@pluralsight/ps-design-system-switch/react.js'
import * as Text from '@pluralsight/ps-design-system-text'

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

class InAppExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isChecked: true }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(isChecked) {
    this.setState({ isChecked })
  }
  render() {
    return (
      <div className="root">
        <div className="example">
          <Switch checked={this.state.isChecked} onClick={this.handleClick}>
            Click me
          </Switch>
        </div>
        <Code lang="javascript">{`class InAppExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isChecked: true }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(isChecked) {
    this.setState({ isChecked })
  }
  render() {
    return (
      <Switch checked={this.state.isChecked} onClick={this.handleClick}>
        Click me
      </Switch>
    )
  }
}`}</Code>
        <style jsx>
          {`
            .root {
            }
            .example {
              padding: ${core.layout.spacingLarge};
              background: ${core.colors.bone};
              border-radius: 12px;
              margin-bottom: ${core.layout.spacingLarge};
            }
          `}
        </style>
      </div>
    )
  }
}

export default _ => (
  <Chrome>
    <Content title="Switch">
      <PageHeading packageName="switch">Switch</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-switch
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Switch from '@pluralsight/ps-design-system-switch/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'checked',
            'boolean',
            null,
            <code>false</code>,
            'shows a toggled-on switch'
          ]),
          PropTypes.row([
            'color',
            PropTypes.union(Switch.colors),
            null,
            <code>orange</code>,
            <span>
              track color (from <code>Switch.colors</code>)
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
            'labelAlign',
            PropTypes.union(Switch.labelAligns),
            null,
            <code>right</code>,
            <span>
              label position (from <code>Switch.labelAligns</code>)
            </span>
          ]),
          PropTypes.row([
            'size',
            PropTypes.union(Switch.sizes),
            null,
            <code>large</code>,
            <span>
              switch size (from <code>Switch.sizes</code>)
            </span>
          ])
        ]}
      />

      <SectionHeading>In-app Example</SectionHeading>
      <P>
        There is no internal state for the switch component. The containing app
        will take care of how it maintains and changes the state of the Switch
        with the <code>checked</code> and <code>onClick</code> props.
      </P>
      <InAppExample />

      <SectionHeading>Size</SectionHeading>
      <P>Switches come in two sizes.</P>
      <Example.React
        themeToggle
        includes={{ Switch }}
        codes={Object.keys(Switch.sizes).map(
          s => `<Switch size={Switch.sizes.${s}} />`
        )}
      />

      <SectionHeading>Color</SectionHeading>
      <P>Switches come in two colors. Orange is default.</P>
      <Example.React
        themeToggle
        includes={{ Switch }}
        codes={Object.keys(Switch.colors).map(
          c => `<Switch checked color={Switch.colors.${c}} />`
        )}
      />

      <SectionHeading>Label</SectionHeading>
      <P>
        Labels will provide additional context around the usage of the switch.
      </P>
      <Example.React
        themeToggle
        includes={{ Switch }}
        codes={[
          `<Switch>Label right</Switch>`,
          `<Switch size={Switch.sizes.small}>Label right</Switch>`,
          `<Switch labelAlign={Switch.labelAligns.left}>Label left</Switch>`,
          `<Switch labelAlign={Switch.labelAligns.left} size={Switch.sizes.small}>Label left</Switch>`
        ]}
      />

      <SectionHeading>Disabled</SectionHeading>
      <P>
        Each switch may be displayed as disabled. Do not use disabled treatment
        for non-disabled switches.
      </P>
      <Example.React
        themeToggle
        includes={{ Switch }}
        codes={[
          `<Switch disabled>Unavailable</Switch>`,
          `<Switch disabled checked size={Switch.sizes.small}>Unavailable</Switch>`
        ]}
      />

      <SectionHeading>Error</SectionHeading>
      <P>
        Error states are engaged with the <Text.Code>error</Text.Code> flag.
        This is useful when tags are used from within a form
      </P>
      <Example.React
        themeToggle
        includes={{ Switch }}
        codes={[`<Switch error>Problem with this one</Switch>`]}
      />
    </Content>
  </Chrome>
)
