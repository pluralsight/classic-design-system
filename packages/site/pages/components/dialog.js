import * as core from '@pluralsight/ps-design-system-core'
import Button from '@pluralsight/ps-design-system-button'
import Dialog from '@pluralsight/ps-design-system-dialog'
import { Below } from '@pluralsight/ps-design-system-position'
import * as Text from '@pluralsight/ps-design-system-text'
import { transparentize } from '@pluralsight/ps-design-system-util'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme'

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

function InAppExample() {
  const [isHovered, setHovered] = React.useState(false)
  const [isClicked, setClicked] = React.useState(false)
  console.log({ isHovered })
  return (
    <div>
      <div className="examples">
        <Theme name={Theme.names.dark}>
          <div className="example">
            <Below
              show={
                <Dialog
                  style={{ outline: '2px solid blue' }}
                  tailPosition={Dialog.tailPositions.topCenter}
                >
                  Dialog
                </Dialog>
              }
              when
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
                <Dialog tailPosition={Dialog.tailPositions.topCenter}>
                  Dialog
                </Dialog>
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
                <Dialog tailPosition={Dialog.tailPositions.topCenter}>
                  Dialog
                </Dialog>
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
import Dialog from '@pluralsight/ps-design-system-dialog'

function HoverExampleOnly() {
  const [isHovered, setHovered] = React.useState(false)
  return (
    <Below
      show={
        <Dialog tailPosition={Dialog.tailPositions.topCenter}>
          Dialog
        </Dialog>
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
          padding-bottom: 188px;
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

const ContentGridVisual = _ => (
  <div className="grid">
    <div className="box top" />
    <div className="box hero" />
    <div className="box body" />
    <div className="box side" />
    <style jsx>{`
      .grid {
        display: grid;
        grid-gap: ${core.layout.spacingSmall};
        grid-template-columns: [left] 5fr [right] 1fr [end];
        grid-template-rows: [row1] 1fr [row2] 2fr [row3] 5fr [end];
        height: 100%;
        width: 100%;
        min-height: 400px;
      }
      .box {
        border-radius: 2px;
        background: ${transparentize(0.8, core.colors.gray03)};
      }
      .top {
        grid-column: left / end;
        grid-row: row1 / row2;
      }
      .hero {
        grid-column: left / right;
        grid-row: row2 / row3;
      }
      .body {
        grid-column: left / right;
        grid-row: row3 / end;
      }
      .side {
        grid-column: right / end;
        grid-row: row2 / end;
      }
    `}</style>
  </div>
)

const ModalGuidelineExample = props => (
  <div className="example" style={props.style}>
    <ContentGridVisual />
    {props.children}
    <style jsx>{`
      .example {
        position: relative;
        height: 100%;
        width: 100%;
      }
    `}</style>
  </div>
)
ModalGuidelineExample.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

const ExampleContent = _ => (
  <div style={{ maxWidth: '300px' }}>
    <Text.P>
      Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
    </Text.P>
    <div style={{ textAlign: 'right' }}>
      <Button>Primary button</Button>
    </div>
  </div>
)

const ModalIframe = _ => (
  <div>
    <iframe className="iframe" src="/components/dialog-modal-example" />
    <Code lang="javascript">{`class InAppExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <div>
        <div className="app" aria-hidden={this.state.isOpen}>
          <Button onClick={this.handleClick}>Open Modal</Button>
        </div>
        {this.state.isOpen && (
          <Dialog modal onClose={this.handleClick}>Dialog stuff</Dialog>
        )}
      </div>
    )
  }
}`}</Code>
    <style jsx>{`
      .iframe {
        height: 400px;
        width: 100%;
        border: 1px solid ${core.colors.gray04};
      }
    `}</style>
  </div>
)

export default _ => (
  <Chrome>
    <Content title="Dialog">
      <PageHeading packageName="dialog">Dialog</PageHeading>

      <Intro>
        The purpose of a Dialog is to provide actionable messaging and may
        appear contextually or as a <Link href="#modal">modal</Link>. The Dialog
        adapts to various amounts and types of content. For contextual,
        non-actionable messaging, consider the{' '}
        <Link href="/components/tooltip">Dialog</Link> instead.
      </Intro>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-dialog
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Dialog from '@pluralsight/ps-design-system-dialog'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'aria-label',
            'string',
            true,
            null,
            <span>description of dialog purpose</span>
          ]),
          PropTypes.row([
            'disableCloseButton',
            'boolean',
            null,
            <code>false</code>,
            <span>removes close button UI</span>
          ]),
          PropTypes.row([
            'disableCloseOnEscape',
            'boolean',
            null,
            <code>false</code>,
            <span>prevents closing Dialog with escape key</span>
          ]),
          PropTypes.row([
            'disableCloseOnOverlayClick',
            'boolean',
            null,
            <code>false</code>,
            <span>prevents clicking modal overlay to close Dialog</span>
          ]),
          PropTypes.row([
            'disableFocusOnMount',
            'boolean',
            null,
            <code>false</code>,
            'prevents focus the Dialog on render'
          ]),
          PropTypes.row([
            'innerRef',
            'DOM element => ()',
            null,
            null,
            'react ref callback'
          ]),
          PropTypes.row([
            'modal',
            'boolean',
            null,
            <code>false</code>,
            <span>makes Dialog modal</span>
          ]),
          PropTypes.row([
            'onClose',
            'Event => ()',
            null,
            null,
            'callback to be called by various close methods'
          ]),
          PropTypes.row([
            'tailPosition',
            PropTypes.union(Dialog.tailPositions),
            null,
            null,
            <span>
              positions a tail pointer (from <code>Dialog.tailPositions</code>)
            </span>
          ])
        ]}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        Dialogs can appear automatically, or be triggered by hover, focus, tap
        or click.
      </P>
      <InAppExample />

      <SectionHeading>Tail</SectionHeading>
      <P>
        Dialogs can be shown with or without a tail (a directional indicator).
        To make the tail appear, use a{' '}
        <Text.Code>Dialog.tailPositions</Text.Code> option.
      </P>
      <Example.React
        includes={{ Dialog, ExampleContent }}
        outputStyle={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: core.layout.spacingMedium
        }}
        outputChildStyle={{ margin: 0 }}
        codes={[
          `<Dialog disableFocusOnMount><ExampleContent /></Dialog>`,
          `<Dialog tailPosition={Dialog.tailPositions.topCenter} disableFocusOnMount><ExampleContent /></Dialog>`
        ]}
      />

      <SectionHeading>Closing</SectionHeading>
      <P>
        Dialogs may be closed using one of a number of methods: clicking the
        close button, clicking the overlay (in the case of a{' '}
        <Text.Code>modal</Text.Code> Dialog), and pressing the escape key. One
        or all of these methods, if available, will call the{' '}
        <Text.Code>onClose</Text.Code> function when triggered.
      </P>
      <Example.React
        includes={{ Dialog, ExampleContent }}
        outputStyle={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: core.layout.spacingMedium
        }}
        outputChildStyle={{ margin: 0 }}
        codes={[
          `<Dialog disableFocusOnMount><ExampleContent /></Dialog>`,
          `<Dialog onClose={_ => alert('Closing')} disableFocusOnMount><ExampleContent /></Dialog>`
        ]}
      />

      <SectionHeading>Modal</SectionHeading>
      <P>
        A modal Dialog will be shown fullscreen with an overlay behind and
        positioned in the center of the viewport.
      </P>
      <P>
        When a modal Dialog (or non-modal Dialog) are shown on the screen, it
        will take browser focus. In the case of a modal Dialog, the rest of the
        body of the application will continue to be visible through the
        translucent overlay. But it should be hidden. To hide it from
        screenreaders, add an <Text.Code>aria-hidden=true</Text.Code> attribute
        to your application's containing node, and make sure Dialog is mounted
        outside of that node. To hide it from keyboard users, add a{' '}
        <Text.Code>tabindex="-1"</Text.Code> to that same application node.
      </P>
      <ModalIframe />

      <SectionHeading>Guidelines</SectionHeading>
      <P>
        In most cases, dialogs can assume the user to digest the content
        following a Z-Pattern. Readers will start in the top/left, move
        horizontally to the top/right and then diagonally to the bottom/left
        before finishing with another horizontal movement to the bottom/right.
        By that measure, place your actions at the bottom/right, with the
        primary action on the right.{' '}
      </P>

      <Guideline
        do={
          <Dialog disableFocusOnMount>
            <Text.Heading>
              <h3>Title</h3>
            </Text.Heading>
            <Text.P>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation
            </Text.P>
            <div style={{ textAlign: 'right' }}>
              <Button
                appearance={Button.appearances.stroke}
                style={{ marginRight: core.layout.spacingMedium }}
              >
                Secondary
              </Button>
              <Button>Primary</Button>
            </div>
          </Dialog>
        }
        dont={
          <Dialog disableFocusOnMount>
            <Text.Heading>
              <h3>Title</h3>
            </Text.Heading>
            <Text.P>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation
            </Text.P>
            <div>
              <Button style={{ marginRight: core.layout.spacingMedium }}>
                Primary
              </Button>
              <Button appearance={Button.appearances.stroke}>Secondary</Button>
            </div>
          </Dialog>
        }
      />

      <P>
        Don’t use <Link href="#modal">modal</Link> dialogs when displaying
        non-critical information that doesn’t need to interrupt a workflow.
        Consider a dialog interaction which would be less intrusive.{' '}
      </P>
      <Guideline
        do={
          <ModalGuidelineExample>
            <div className="dialog">
              <Dialog disableFocusOnMount>
                Bookmark added. <Link href="">Undo?</Link>
              </Dialog>
            </div>
            <style jsx>{`
              .dialog {
                position: absolute;
                bottom: ${core.layout.spacingSmall};
                left: 50%;
                transform: translateX(-50%);
                white-space: nowrap;
              }
            `}</style>
          </ModalGuidelineExample>
        }
        dont={
          <div className="example">
            <div className="background">
              <ContentGridVisual />
            </div>
            <div className="fakeOverlay">
              <Dialog disableFocusOnMount style={{ maxWidth: '70%' }}>
                <Text.Heading>
                  <h3>Bookmark added</h3>
                </Text.Heading>
                <Text.P>
                  Oh joy! You have successfully added a new bookmark.
                </Text.P>
                <div style={{ textAlign: 'right' }}>
                  <Button>Ok, got it</Button>
                </div>
              </Dialog>
            </div>
            <style jsx>{`
              .example {
                position: relative;
                height: 100%;
                width: 100%;
                min-height: 400px;
              }
              .fakeOverlay {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: ${transparentize(0.5, core.colors.black)};
                border-radius: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .background {
                position: relative;
                height: 100%;
                width: 100%;
                padding: ${core.layout.spacingXLarge};
              }
            `}</style>
          </div>
        }
        dontStyle={{ padding: 0 }}
      />

      <P>
        Be explicit as possible when writing dialog buttons. Use affirmative
        action text to clearly indicate the outcome of the decision. [
        <Link
          appearance={Link.appearances.subtle}
          href="https://material.io/guidelines/components/dialogs.html#dialogs-alerts"
        >
          Material Design
        </Link>
        ]
      </P>
      <Guideline
        do={
          <Dialog disableFocusOnMount>
            <Text.Heading>
              <h3>Delete record?</h3>
            </Text.Heading>
            <Text.P>
              This action cannot be reversed. Are you sure you want to delete
              this record?
            </Text.P>
            <div style={{ textAlign: 'right' }}>
              <Button
                appearance={Button.appearances.stroke}
                style={{ marginRight: core.layout.spacingMedium }}
              >
                Delete
              </Button>
              <Button>Cancel</Button>
            </div>
          </Dialog>
        }
        dont={
          <Dialog disableFocusOnMount>
            <Text.Heading>
              <h3>Delete record?</h3>
            </Text.Heading>
            <Text.P>
              This action cannot be reversed. Are you sure you want to delete
              this record?
            </Text.P>
            <div style={{ textAlign: 'right' }}>
              <Button
                appearance={Button.appearances.stroke}
                style={{ marginRight: core.layout.spacingMedium }}
              >
                Yes
              </Button>
              <Button>No</Button>
            </div>
          </Dialog>
        }
      />
    </Content>
  </Chrome>
)
