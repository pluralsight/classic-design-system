import Checkbox from '@pluralsight/ps-design-system-checkbox/react'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import * as Text from '@pluralsight/ps-design-system-text/react'
import Radio from '@pluralsight/ps-design-system-radio/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

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

class InAppExample extends React.Component {
  constructor() {
    super()
    this.state = { values: {} }
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(evt, checked, value, name) {
    if (checked) {
      this.setState({ values: { ...this.state.values, [name]: value } })
    } else {
      const { [name]: omit, ...values } = this.state.values
      this.setState({ values })
    }
  }
  render() {
    const features = Object.keys(this.state.values)
    const checked = name => features.indexOf(name) > -1
    return (
      <div>
        <div className="example">
          <div className="checkboxes">
            <Checkbox
              onCheck={this.handleCheck}
              name="demo"
              value="yes"
              label="Has demo?"
              checked={checked('demo')}
            />
            <Checkbox
              onCheck={this.handleCheck}
              name="assessment"
              value="of-course"
              label="Has assessment?"
              checked={checked('assessment')}
            />
            <Checkbox
              onCheck={this.handleCheck}
              name="slides"
              value="who-doesnt"
              label="Has slides?"
              checked={checked('slides')}
            />
          </div>
          <div className="selection">
            Checked:{' '}
            {features
              .map(name => `${name}: ${this.state.values[name]}`)
              .join(', ')}
          </div>
        </div>
        <Code
          lang="javascript"
          collapsible
        >{`class InAppExample extends React.Component {
  constructor() {
    super()
    this.state = { values: {} }
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(evt, checked, value, name) {
    if (checked) {
      this.setState({ values: { ...this.state.values, [name]: value } })
    } else {
      const { [name]: omit, ...values } = this.state.values
      this.setState({ values })
    }
  }
  render() {
    const features = Object.keys(this.state.values)
    const checked = name => features.indexOf(name) > -1
    return (
      <div>
        <div>
          <Checkbox
            onCheck={this.handleCheck}
            name="demo"
            value="yes"
            label="Has demo?"
            checked={checked('demo')}
          />
          <Checkbox
            onCheck={this.handleCheck}
            name="assessment"
            value="of-course"
            label="Has assessment?"
            checked={checked('assessment')}
          />
          <Checkbox
            onCheck={this.handleCheck}
            name="slides"
            value="who-doesnt"
            label="Has slides?"
            checked={checked('slides')}
          />
        </div>
        <div>
          Checked:{' '}
          {features
            .map(name => \`\$\{name\}: \$\{this.state.values[name]\}\`)
            .join(', ')}
        </div>
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
          .checkboxes {
            flex: 1;
            position: relative;
            z-index: 0;
            padding: ${core.layout.spacingLarge};
          }
        `}</style>
      </div>
    )
  }
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Checkbox">
      <PageHeading beta packageName="checkbox">
        Checkbox
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-checkbox
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Checkbox from '@pluralsight/ps-design-system-checkbox/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'checked',
            'boolean',
            null,
            <code>false</code>,
            'marks as selected'
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
          PropTypes.row(['name', 'string', null, null, 'form data identifier']),
          PropTypes.row(['label', 'node', true, null, 'display name']),
          PropTypes.row([
            'onCheck',
            '(DOM event, checked, value, name) => ()',
            null,
            null,
            'triggers on check toggle'
          ]),
          PropTypes.row([
            'value',
            'string | number',
            null,
            null,
            'currently selected radio value'
          ])
        ]}
      />
      <P>
        The normal React form-related props are also acceptable and expected.
      </P>

      <SectionHeading>In-app example</SectionHeading>
      <InAppExample />

      <SectionHeading>Checked</SectionHeading>
      <P>
        Passing the <Text.Code>checked</Text.Code> indicates that the checkbox
        is active.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ Checkbox }}
        codes={[
          `<Checkbox checked label="I'm checked" />`,
          `<Checkbox label="I'm not" />`
        ]}
      />

      <SectionHeading>Disabled</SectionHeading>
      <P>Disabled checkboxes are unmodifiable and diminished visually.</P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ Checkbox }}
        codes={[
          `<Checkbox disabled label="Can't touch this" />`,
          `<Checkbox disabled checked label="Checked or not" />`
        ]}
      />

      <SectionHeading>Error</SectionHeading>
      <P>
        Error states are engaged with the <Text.Code>error</Text.Code> flag.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ Radio }}
        codes={[
          `<Checkbox error label="I've got problems" />`,
          `<Checkbox error checked label="Checked and still not good enough" />`
        ]}
      />
    </Content>
  </Chrome>
))
