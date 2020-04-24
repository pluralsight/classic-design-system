import * as core from '@pluralsight/ps-design-system-core'
import * as Text from '@pluralsight/ps-design-system-text'
import Radio from '@pluralsight/ps-design-system-radio'
import React from 'react'

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
  constructor() {
    super()
    this.state = { value: 'beginner' }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(_, value) {
    this.setState(_ => ({ value }))
  }

  render() {
    return (
      <div>
        <div className="example">
          <div className="radios">
            <Radio.Group onSelect={this.handleSelect} value={this.state.value}>
              <Radio.Button value="beginner" label="Beginner" />
              <Radio.Button value="intermediate" label="Intermediate" />
              <Radio.Button value="advanced" label="Advanced" />
            </Radio.Group>
          </div>
          <div className="selection">Selected: {this.state.value}</div>
        </div>
        <Code
          lang="javascript"
          collapsible
        >{`class InAppExample extends React.Component {
  constructor() {
    super()
    this.state = { value: 'beginner' }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(_, value) {
    this.setState(_ => ({ value }))
  }
  render() {
    return (
      <div>
        <Radio.Group onSelect={this.handleSelect} value={this.state.value}>
          <Radio.Button value="beginner" label="Beginner" />
          <Radio.Button value="intermediate" label="Intermediate" />
          <Radio.Button value="advanced" label="Advanced" />
        </Radio.Group>
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
            color: ${core.colorsTextIcon.lowOnLight};
            background: ${core.colorsBackgroundLight[2]};
            border-radius: 12px;
          }
          .radios {
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

export default _ => (
  <Chrome>
    <Content title="Radio">
      <PageHeading packageName="radio">Radio</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-radio
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Radio from '@pluralsight/ps-design-system-radio'
      </Code>

      <PropTypes
        props={{
          'Radio.Group': [
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
              'label',
              'string',
              null,
              null,
              'identifying string for group'
            ]),
            PropTypes.row([
              'name',
              'string',
              null,
              null,
              'form data identifier'
            ]),
            PropTypes.row([
              'onSelect',
              '(DOM event, value) => ()',
              null,
              null,
              'triggers on radio select'
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
              'string | number',
              null,
              null,
              'currently selected radio value'
            ])
          ],
          'Radio.Button': [
            PropTypes.row([
              'checked',
              'boolean',
              null,
              <code>false</code>,
              'styled selected (automatically set)'
            ]),
            PropTypes.row([
              'innerRef',
              'DOM element => ()',
              null,
              null,
              'input field react ref callback'
            ]),
            PropTypes.row(['label', 'node', true, null, 'display text']),
            PropTypes.row([
              'value',
              'string | number',
              true,
              null,
              'radio option value'
            ])
          ]
        }}
      />
      <P>
        The normal React form-related props are also acceptable and expected.
      </P>

      <SectionHeading>In-app example</SectionHeading>
      <InAppExample />

      <SectionHeading>Radio groups</SectionHeading>
      <P>
        Radio buttons present a group of options, of which only a single option
        can be selected at a time. The grouping is commonly defined by the{' '}
        <Text.Code>name</Text.Code> prop.
      </P>
      <Example.React
        themeToggle
        includes={{ Radio }}
        codes={[
          `<Radio.Group name="courseLevel">
  <Radio.Button value="beginner" label="Beginner" />
  <Radio.Button value="intermediate" label="Intermediate" />
  <Radio.Button value="advanced" label="Advanced" />
</Radio.Group>`
        ]}
      />

      <SectionHeading>Disabled</SectionHeading>
      <P>Disabled radio buttons are unmodifiable and diminished visually.</P>
      <Example.React
        themeToggle
        includes={{ Radio }}
        codes={[
          `<Radio.Group disabled name="courseLevel">
  <Radio.Button value="beginner" label="Beginner" />
  <Radio.Button value="intermediate" label="Intermediate" />
  <Radio.Button value="advanced" label="Advanced" />
</Radio.Group>`
        ]}
      />

      <SectionHeading>Error</SectionHeading>
      <P>
        Error states are engaged with the <Text.Code>error</Text.Code> flag.
      </P>
      <Example.React
        themeToggle
        includes={{ Radio }}
        codes={[
          `<Radio.Group error name="courseLevel">
  <Radio.Button value="beginner" label="Beginner" />
  <Radio.Button value="intermediate" label="Intermediate" />
  <Radio.Button value="advanced" label="Advanced" />
</Radio.Group>`
        ]}
      />
    </Content>
  </Chrome>
)
