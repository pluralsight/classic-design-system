import LinearProgress from '@pluralsight/ps-design-system-linearprogress/react.js'
import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text/react.js'
import Theme from '@pluralsight/ps-design-system-theme'

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

class AnimationDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const rando = Math.floor(Math.random() * 115)
      this.setState({ value: rando > 100 ? 100 : rando })
    }, 2500)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div className="root">
        <div className="value">
          Value: <span className="exampleNumber">{this.state.value}</span>
        </div>
        <Theme>
          <div className="example">
            <LinearProgress value={this.state.value} />
          </div>
        </Theme>
        <style jsx>{`
          .root {
            display: flex;
            justify-content: center;
            height: 150px;
          }
          .value,
          .example {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
          }
          .value {
            background: ${core.colors.bone};
            border-radius: 12px 0 0 12px;
            font-size: ${core.type.fontSizeLarge};
            color: ${core.colors.gray04};
          }
          .example {
            background: ${core.colors.gray04};
            border-radius: 0 12px 12px 0;
            padding: 0 ${core.layout.spacingMedium};
          }
          .exampleNumber {
            padding-left: ${core.layout.spacingSmall};
            width: 3em;
          }
        `}</style>
      </div>
    )
  }
}

export default _ => (
  <Chrome>
    <Content title="Linear Progress">
      <PageHeading packageName="linearprogress">Linear Progress</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-linearprogress
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import LinearProgress from
        '@pluralsight/ps-design-system-linearprogress/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'value',
            'number',
            null,
            null,
            'current progress out of 100'
          ])
        ]}
      />

      <SectionHeading>Value</SectionHeading>
      <P>
        To set the progress, use the <Text.Code>value</Text.Code> prop with a
        number between 0 and 100.
      </P>
      <Example.React
        themeToggle
        includes={{ LinearProgress }}
        codes={[
          `<LinearProgress value={0} />`,
          `<LinearProgress value={33} />`,
          `<LinearProgress value={66} />`,
          `<LinearProgress value={100} />`
        ]}
      />

      <SectionHeading>Animation</SectionHeading>
      <P>
        Initial render is not animated, but the progress will tween as the{' '}
        <Text.Code>value</Text.Code> prop is updated.
      </P>
      <AnimationDemo />
    </Content>
  </Chrome>
)
