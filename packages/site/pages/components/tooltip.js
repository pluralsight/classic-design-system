import { Below } from '@pluralsight/ps-design-system-position'
import Button from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import { BookmarkIcon } from '@pluralsight/ps-design-system-icon'
import ReactPropTypes from 'prop-types'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme'
import Tooltip from '@pluralsight/ps-design-system-tooltip'

import {
  Chrome,
  Code,
  Content,
  Example,
  Guideline,
  Intro,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

function TooltipGuideline(props) {
  return (
    <Theme name={Theme.names.light}>
      <Button appearance={Button.appearances.flat} icon={<BookmarkIcon />} />
      <div className="tooltipWrapper">
        <Tooltip
          appearance={props.appearance}
          onClose={props.onClose}
          tailPosition={Tooltip.tailPositions.topLeft}
        >
          {props.children}
        </Tooltip>
      </div>
      <style jsx>{`
        .tooltipWrapper {
          position: relative;
          top: 12px;
          left: -2px;
        }
      `}</style>
    </Theme>
  )
}
TooltipGuideline.propTypes = {
  appearance: ReactPropTypes.oneOf(
    Object.keys(Tooltip.appearances).map(a => Tooltip.appearances[a])
  ),
  children: ReactPropTypes.string,
  onClose: ReactPropTypes.func
}

function InAppExample() {
  const [isHovered, setHovered] = React.useState(false)
  const [isClicked, setClicked] = React.useState(false)
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
            >
              <Button
                appearance={Button.appearances.secondary}
                className="text"
              >
                Look at me
              </Button>
            </Below>
          </div>

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

          <div className="example">
            <Below
              show={
                <Tooltip tailPosition={Tooltip.tailPositions.topCenter}>
                  Tooltip
                </Tooltip>
              }
              when={isClicked}
            >
              <Button
                appearance={Button.appearances.secondary}
                className="text"
                onClick={_ => setClicked(!isClicked)}
              >
                Click me
              </Button>
            </Below>
          </div>
        </Theme>
      </div>
      <Code
        collapsible
        lang="javascript"
      >{`import Button from '@pluralsight/ps-design-system-button'
import { Below } from '@pluralsight/ps-design-system-position'
import Tooltip from '@pluralsight/ps-design-system-tooltip'

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

export default _ => (
  <Chrome>
    <Content title="Tooltip">
      <PageHeading packageName="tooltip">Tooltip</PageHeading>

      <Intro>
        The purpose of a tooltip is to provide context and explain the function
        of a user interface element or feature. The content of a tooltip is
        limited to styled text. If more customization is necessary, consider the{' '}
        <Link href="/components/dialog">Dialog</Link> component which builds on
        the patterns of the tooltip.
      </Intro>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-tooltip
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Tooltip from '@pluralsight/ps-design-system-tooltip'
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

      <SectionHeading>Guidelines</SectionHeading>
      <P>Tooltips should be written in sentence case.</P>
      <Guideline
        do={<TooltipGuideline>Bookmark this course</TooltipGuideline>}
        dont={<TooltipGuideline>Bookmark This Course</TooltipGuideline>}
      />

      <P>Write your tooltips to be concise and scannable.</P>
      <Guideline
        do={<TooltipGuideline>Bookmark this course</TooltipGuideline>}
        dont={
          <TooltipGuideline>
            Bookmark this course and then you’ll know its safe and sound. This
            course will enjoy its new company amongst your other bookmarked
            courses. At first this course might feel shy, but the other
            bookmarked courses will be friendly and will help this new course
            get acclimated and comfortable.
          </TooltipGuideline>
        }
      />

      <P>
        Use <code>accent</code> appearance to gain user attention in cases such
        onboarding, introducing functionality, asking for input, or prompting
        action. A good rule of thumb is <code>accent</code> tooltips appear
        automatically, while basic tooltips appear as a user clicks or hovers to
        obtain more context.
      </P>
      <Guideline
        do={
          <TooltipGuideline
            appearance={Tooltip.appearances.accent}
            onClose={_ => {}}
          >
            We’ve added a new way keep track of your content. Bookmark this
            course to view it later.
          </TooltipGuideline>
        }
        dont={
          <TooltipGuideline appearance={Tooltip.appearances.accent}>
            Bookmark this course
          </TooltipGuideline>
        }
      />
    </Content>
  </Chrome>
)
