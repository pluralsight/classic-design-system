import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Intro,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

const styleUnder = (target, tooltip) => {
  if (!target || !tooltip) return

  const targetRect = target.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()

  const scrollLeft = window.pageXOffset
  const scrollTop = window.pageYOffset

  const bufferHeight = 10
  const targetCenterLeft = targetRect.left + targetRect.width / 2
  const tooltipLeft = scrollLeft + targetCenterLeft - tooltipRect.width / 2
  const tooltipTop =
    scrollTop + targetRect.top + targetRect.height + bufferHeight

  return {
    position: 'absolute',
    top: tooltipTop,
    left: tooltipLeft
  }
}

class TooltipPositioner extends React.Component {
  constructor(props) {
    super(props)
    this.el = null
    this.state = { rect: { top: 0, left: 0 } }
  }
  componentDidMount() {
    this.setState({ rect: this.el.getBoundingClientRect() })
  }
  render() {
    return React.cloneElement(this.props.children, {
      innerRef: el => (this.el = el),
      style: this.props.styleBy(this.el)
    })
  }
}

class InAppExample extends React.Component {
  constructor(props) {
    super(props)
    this.examples = []
    this.tips = []
    this.state = {
      examples: [],
      tips: [],
      isHovered: false,
      isClicked: false
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.setState({
      examples: this.examples.map(el => el),
      tips: this.tips.map(el => el)
    })
  }
  handleClick() {
    this.setState({ isClicked: !this.state.isClicked })
  }
  handleMouseOver() {
    this.setState({ isHovered: true })
  }
  handleMouseOut() {
    this.setState({ isHovered: false })
  }
  render() {
    return (
      <div className="examples">
        <div className="example">
          <Button
            appearance={Button.appearances.flat}
            className="text"
            innerRef={el => (this.examples[0] = el)}
          >
            Look at me
          </Button>
          <TooltipPositioner styleBy={styleUnder.bind(null, this.examples[0])}>
            <Tooltip
              innerRef={el => (this.tips[0] = el)}
              tailPosition={Tooltip.tailPositions.topCenter}
            >
              Tooltip
            </Tooltip>
          </TooltipPositioner>
        </div>

        <div className="example">
          <Button
            appearance={Button.appearances.flat}
            className="text"
            innerRef={el => (this.examples[1] = el)}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            Hover me
          </Button>
        </div>
        {this.state.isHovered && (
          <TooltipPositioner styleBy={styleUnder.bind(null, this.examples[1])}>
            <Tooltip
              innerRef={el => (this.tips[1] = el)}
              style={styleUnder(this.state.examples[1], this.state.tips[1])}
              tailPosition={Tooltip.tailPositions.topCenter}
            >
              Is hovered
            </Tooltip>
          </TooltipPositioner>
        )}

        <div className="example">
          <Button
            appearance={Button.appearances.flat}
            className="text"
            innerRef={el => (this.examples[2] = el)}
            onClick={this.handleClick}
          >
            Click me
          </Button>
        </div>
        {this.state.isClicked && (
          <TooltipPositioner styleBy={styleUnder.bind(null, this.examples[2])}>
            <Tooltip
              innerRef={el => (this.tips[2] = el)}
              style={styleUnder(this.state.examples[2], this.state.tips[2])}
              tailPosition={Tooltip.tailPositions.topCenter}
            >
              Was clicked
            </Tooltip>
          </TooltipPositioner>
        )}

        <style jsx>{`
          .examples {
            display: flex;
            padding: ${core.layout.spacingLarge};
            padding-bottom: 88px;
            color: ${core.colors.gray02};
            font-weight: ${core.type.fontWeightMedium};
            background: ${core.colors.gray06};
          }
          .example {
            margin-right: calc(${core.layout.spacingLarge} * 2);
          }
          .text {
            display: inline-block;
          }
          .example:last-child {
            margin-right: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Tooltip">
      <PageHeading packageName="tooltip">Tooltip</PageHeading>

      <Intro>
        The purpose of a tooltip is to provide context and explain the function
        of a user interface element or feature. The content of a tooltip is
        limited to styled text. If more cutomization is necessary, consider the{' '}
        <Link href="/components/dialog">Dialog</Link> component which builds on
        the patterns of the tooltip.
      </Intro>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-tooltip
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Tooltip from '@pluralsight/ps-design-system-tooltip/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'appearance',
            PropTypes.union(Tooltip.appearances),
            null,
            <code>basic</code>,
            <span>
              visual style (from <code>Tooltip.appearances</code>)
            </span>
          ]),
          PropTypes.row([
            'innerRef',
            'DOM element => ()',
            null,
            null,
            'react ref callback'
          ]),
          PropTypes.row([
            'tailPosition',
            PropTypes.union(Tooltip.tailPositions),
            null,
            null,
            <span>
              positions a tail pointer (from <code>Tooltip.tailPositions</code>)
            </span>
          ]),
          PropTypes.row([
            'onClose',
            'Event => ()',
            null,
            null,
            'displays a close button, triggered on click'
          ])
        ]}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        Tooltips can appear automatically, or be triggered by hover, focus, tap
        or click.
      </P>
      <InAppExample />
      <SectionHeading>Appearance</SectionHeading>
      <P>
        Tooltips come in {Object.keys(Tooltip.appearances).length} styles.
        Defaults to <code>basic</code>.
      </P>
      <Example.React
        includes={{ Tooltip }}
        codes={Object.keys(Tooltip.appearances).map(
          a => `<Tooltip appearance={Tooltip.appearances.${a}}>${a}</Tooltip>`
        )}
      />

      <SectionHeading>Tail</SectionHeading>
      <P>
        Tooltips can be shown with or without a tail (a directional indicator).
        To make the tail appear, use a <code>Tooltip.tailPositions</code>{' '}
        option.
      </P>
      <Example.React
        includes={{ Tooltip }}
        themeName="light"
        outputStyle={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: core.layout.spacingMedium
        }}
        outputChildStyle={{ margin: 0 }}
        codes={Object.keys(Tooltip.tailPositions).map(
          tailPosition =>
            `<Tooltip tailPosition={Tooltip.tailPositions.${tailPosition}}>${tailPosition}</Tooltip>`
        )}
      />

      <SectionHeading>Close button</SectionHeading>
      <P>
        Tooltips may be persistent until a user interaction closes them. For a
        close button in the top-right corner of the tooltip, provide a{' '}
        <code>onClose</code> callback.
      </P>
      <Example.React
        includes={{ Tooltip }}
        codes={[
          `<Tooltip onClose={_ => alert('close clicked')}>With a close button for those cases you want the tooltip to persist until closed.</Tooltip>`
        ]}
      />
    </Content>
  </Chrome>
))
