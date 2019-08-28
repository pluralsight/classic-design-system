import Button from '@pluralsight/ps-design-system-button/react.js'
import core from '@pluralsight/ps-design-system-core'
import { below } from '@pluralsight/ps-design-system-position/js.js'
import { Below } from '@pluralsight/ps-design-system-position/react.js'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text/react.js'
import Theme from '@pluralsight/ps-design-system-theme/react.js'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react.js'

import {
  Chrome,
  Code,
  Content,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Position">
      <PageHeading packageName="position">Position</PageHeading>

      <Intro>
        The Position component is a utility meant to help one control position
        of elements relative to other elements, for example, tooltips above a
        button.
      </Intro>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-position
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">{`import {
  Above,
  Below,
  LeftOf,
  RightOf
} from '@pluralsight/ps-design-system-position/react'`}</Code>

      <PropTypes
        props={[
          PropTypes.row([
            'children',
            <code>React.Element</code>,
            true,
            null,
            <span>Target element something will be relative to</span>
          ]),
          PropTypes.row([
            'inNode',
            <code>HTMLElement</code>,
            null,
            null,
            'specific node for portal rendering'
          ]),
          PropTypes.row([
            'show',
            <code>React.Element</code>,
            null,
            null,
            'Element placed in relation to target'
          ]),
          PropTypes.row([
            'when',
            <code>boolean</code>,
            null,
            <code>true</code>,
            'Conditional rendering of positioned element'
          ])
        ]}
      />

      <SectionHeading>React Example</SectionHeading>
      <P>Positioning with the component</P>
      <ReactExample />

      <SectionHeading>Positions</SectionHeading>
      <P>
        There are several position-specific components for adjusting the
        relative positioning of things like <Text.Code>Tooltip</Text.Code>s
        around target elements.
      </P>
      <iframe
        className="iframe"
        style={{ height: `calc(160px * 2 + ${core.layout.spacingLarge})` }}
        src="/components/position-positions-example"
      />

      <SectionHeading>Portal Example</SectionHeading>
      <P>
        Sometimes it's difficult to accurately position relative to another
        element on the page. Perhaps the surrounding markup and styles were not
        designed to accommodate an inserted <Text.Code>Tooltip</Text.Code>. Or
        perhaps there's a parent container that's{' '}
        <Text.Code>position: relative</Text.Code>. Both of these would be good
        cases for rendering through a React Portal. The component can take care
        of that for you. You just supply another independent DOM node elsewhere
        in your document.
      </P>
      <iframe
        className="iframe"
        style={{ height: '300px' }}
        src="/components/position-portal-example"
      />
      <Code collapsible lang="javascript">{`function PortalExample() {
  const portal = React.useRef()
  // NOTE: this node setup is often unneeded if you have 
  // a <div id="put-portal-stuff-here" /> already
  const [node, setNode] = React.useState(portal.current)
  React.useEffect(
    () => {
      if (portal.current) setNode(portal.current)
    },
    [portal]
  )

  return (
    <div>
      <div className="relative-area">
        <Above
          show={
            <Tooltip tailPosition={Tooltip.tailPositions.bottomCenter}>
              Rendered through Portal
            </Tooltip>
          }
          inNode={node}
        >
          <Button>Button</Button>
        </Above>
        This is an area that needs escaped
      </div>
      <div ref={portal} />{/*NOTE: it's outside the problematic "relative-area" markup */}
      <style>
        .relative-area {
          position: relative;
          top: 25px;
          left: 25%;
        }
      </style>
    </div>
  )
}`}</Code>

      <SectionHeading>JavaScript Example</SectionHeading>
      <P>
        The most important bits of this utility are available in pure
        JavaScript. To use, import the <Text.Code>/js</Text.Code> part of the
        utility.
      </P>
      <Code language="javascript">{`import {
  above,
  below,
  leftOf,
  rightOf
} from '@pluralsight/ps-design-system-position/js'`}</Code>

      <P>Use the JavaScript function to get the positioning style desired.</P>
      <JsExample />
    </Content>
    <style jsx>{`
      .iframe {
        border: 0;
        width: 100%;
      }
    `}</style>
  </Chrome>
)

function JsExample() {
  const targetRef = React.useRef()
  const elRef = React.useRef()
  const [isHovered, setHovered] = React.useState(false)
  const [style, setStyle] = React.useState({ position: 'absolute' })
  React.useEffect(() => {
    if ((targetRef.current, elRef.current))
      setStyle(below(targetRef.current).styleFor(elRef.current))
  }, [])

  return (
    <div>
      <div className="examples">
        <Theme name={Theme.names.dark}>
          <div className="example">
            <Button
              ref={targetRef}
              appearance={Button.appearances.secondary}
              className="text"
              onMouseEnter={_ => setHovered(true)}
              onMouseOut={_ => setHovered(false)}
            >
              Hover me
            </Button>
            {isHovered && (
              <Tooltip
                style={style}
                ref={elRef}
                tailPosition={Tooltip.tailPositions.topCenter}
              >
                Tooltip
              </Tooltip>
            )}
          </div>
        </Theme>
      </div>
      <Code
        collapsible
        lang="javascript"
      >{`import Button from '@pluralsight/ps-design-system-button/react'
import { below } from '@pluralsight/ps-design-system-position/js'
import Tooltip from '@pluralsight/ps-design-system-position/react'

function JsExample() {
  const targetRef = React.useRef()
  const elRef = React.useRef()
  const [isHovered, setHovered] = React.useState(false)
  const [style, setStyle] = React.useState({ position: 'absolute' })
  React.useEffect(() => {
    if ((targetRef.current, elRef.current))
      setStyle(below(targetRef.current).styleFor(elRef.current))
  })

  return (
    <div>
      <Button
        ref={targetRef}
        appearance={Button.appearances.secondary}
        className="text"
        onMouseEnter={_ => setHovered(true)}
        onMouseOut={_ => setHovered(false)}
      >
        Hover me
      </Button>
      {isHovered && (
        <Tooltip
          style={style}
          ref={elRef}
          tailPosition={Tooltip.tailPositions.topCenter}
        >
          Tooltip
        </Tooltip>
      )}
    </div>
  )
}`}</Code>

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

function ReactExample() {
  const [isHovered, setHovered] = React.useState(false)
  return (
    <div>
      <div className="examples">
        <Theme name={Theme.names.dark}>
          <div className="example">
            <Below
              show={
                <Tooltip tailPosition={Tooltip.tailPositions.topCenter}>
                  Tooltip
                </Tooltip>
              }
              when={isHovered}
            >
              <Button
                appearance={Button.appearances.secondary}
                className="text"
                onMouseEnter={_ => setHovered(true)}
                onMouseOut={_ => setHovered(false)}
              >
                Hover me
              </Button>
            </Below>
          </div>
        </Theme>
      </div>
      <Code
        collapsible
        lang="javascript"
      >{`import Button from '@pluralsight/ps-design-system-button/react'
import { Below } from '@pluralsight/ps-design-system-position/react'
import Tooltip from '@pluralsight/ps-design-system-position/react'

function HoverExampleOnly() {
  const [isHovered, setHovered] = React.useState(false)
  return (
    <Below
      show={
        <Tooltip tailPosition={Tooltip.tailPositions.topCenter}>
          Tooltip
        </Tooltip>
      }
      when={isHovered}
    >
      <Button
        appearance={Button.appearances.secondary}
        onMouseEnter={_ => setHovered(true)}
        onMouseOut={_ => setHovered(false)}
      >
        Hover me
      </Button>
    </Below>
  )
}`}</Code>

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
