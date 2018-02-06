import core from '@pluralsight/ps-design-system-core'
import Button from '@pluralsight/ps-design-system-button/react'
import Dialog from '@pluralsight/ps-design-system-dialog/react'
import * as Text from '@pluralsight/ps-design-system-text/react'

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

export default withServerProps(_ => (
  <Chrome>
    <Content title="Dialog">
      <PageHeading packageName="dialog">Dialog</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-dialog
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Dialog from '@pluralsight/ps-design-system-dialog/react'
      </Code>

      <PropTypes
        props={[
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

      <SectionHeading>Tail</SectionHeading>
      <P>
        Dialogs can be shown with or without a tail (a directional indicator).
        To make the tail appear, use a <code>Dialog.tailPositions</code> option.
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
        close button, clicking the overlay (in the case of a <code>modal</code>{' '}
        Dialog), and pressing the escape key. One or all of these methods, if
        available, will call the <code>onClose</code> function when triggered.
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
        translucent overlay. But it should be hidden from screenreaders. To do
        this, add an <code>aria-hidden=true</code> attribute to your
        application's containing node, and make sure Dialog is mounted outside
        of that node.
      </P>
      <ModalIframe />
    </Content>
  </Chrome>
))
