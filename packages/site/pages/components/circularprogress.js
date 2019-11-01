import CircularProgress from '@pluralsight/ps-design-system-circularprogress/react.js'
import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'
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
            <CircularProgress value={this.state.value} />
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
    <Content title="Circular Progress">
      <PageHeading packageName="circularprogress">
        Circular Progress
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-circularprogress
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import CircularProgress from
        '@pluralsight/ps-design-system-circularprogress/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'size',
            PropTypes.union(CircularProgress.sizes),
            null,
            <code>medium</code>,
            <span>
              standard size for widget (from <code>CircularProgress.sizes</code>
              )
            </span>
          ]),
          PropTypes.row([
            'value',
            'number',
            null,
            null,
            'current progress out of 100'
          ])
        ]}
      />

      <SectionHeading>Size</SectionHeading>
      <P>Circular progress comes in two standard sizes.</P>
      <Example.React
        themeToggle
        includes={{ CircularProgress }}
        codes={Object.keys(CircularProgress.sizes).map(
          s =>
            `<CircularProgress size={CircularProgress.sizes.${s}} value={75} />`
        )}
      />

      <SectionHeading>Mode</SectionHeading>
      <P>
        Mode is determined by the presence of the <code>value</code> prop. When
        a value is given the mode is "determinate", and visual progress is set
        to that static value. When a value is absent the mode is "indeterminate"
        and becomes an infinite spinner.
      </P>
      <Example.React
        themeToggle
        includes={{ CircularProgress }}
        codes={[`<CircularProgress value={66} />`, `<CircularProgress />`]}
      />

      <SectionHeading>Animation</SectionHeading>
      <P>
        In determinate mode the initial render is not animated, but the progress
        will tween as new <code>value</code> props are updated.
      </P>
      <AnimationDemo />
    </Content>
  </Chrome>
)
