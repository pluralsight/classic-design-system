/* eslint-disable react/display-name */
import React from 'react'

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
    <Content title="AppFrame">
      <PageHeading packageName="appframe">App Frame</PageHeading>
      <Intro>
        The App Frame component provides page structure and integrates with
        other navigation components.
      </Intro>

      <br />

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-appframe
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import AppFrame from '@pluralsight/ps-design-system-appframe'
      </Code>

      <PropTypes
        props={[
          PropTypes.row(['children', <code>node</code>, false, null]),
          PropTypes.row([
            'sidenav',
            <>
              <code>node</code>
              <span> | </span>
              <code>{'({ visible  }) => node'}</code>
            </>,
            false,
            null,
            'Area to display secondary navigation'
          ]),
          PropTypes.row([
            'sidenavOpen',
            <code>boolean</code>,
            false,
            null,
            'Control if the sidenav container is opened'
          ]),
          PropTypes.row([
            'onRequestSideNavClose',
            'Event => ()',
            null,
            null,
            'Callback triggered when the sidenav should be closed. Use if controlling the open state'
          ]),
          PropTypes.row([
            'onRequestSideNavOpen',
            'Event => ()',
            null,
            null,
            'Callback triggered when the sidenav should be opened. Use if controlling the open state'
          ]),
          PropTypes.row([
            'topnav',
            <>
              <code>node</code>
              <span> | </span>
              <code>
                {'({ closeSidenav, openSidenav, sidenavOpen }) => node'}
              </code>
            </>,
            false,
            null,
            'Area to display primary navigation - such as a NavBar'
          ])
        ]}
      />

      <SectionHeading>Usage</SectionHeading>
      <br />

      <Code language="html">
        {`<AppFrame topnav={<TopNav />} sidenav={<CustomSideNav />}>
  {/* page content here */}
</AppFrame>`}
      </Code>

      <P>If needed, you can control the the sidenav open state.</P>
      <Code language="html">
        {`const [sidenavOpen, setOpen] = useState(false)

const close = () => setOpen(false)
const open = () => setOpen(true)
const toggle = sidenavOpen ? close : open

return (
  <AppFrame
    onRequestSideNavClose={close}
    onRequestSideNavOpen={open}
    topnav={<TopNav onMobileMenuClick={toggle} />}
    sidenav={<CustomSideNav />}
    sidenavOpen={sidenavOpen}
  >
    {/* page content here */}
  </AppFrame>
)`}
      </Code>

      <SectionHeading>Examples</SectionHeading>
      <P>
        This reference implementation of the Skills nav is available on{' '}
        <a href="https://codesandbox.io/s/crazy-carson-pe50v?fontsize=14&hidenavigation=1&theme=dark&view=preview">
          codesandbox
        </a>
        .
      </P>

      <br />
      <iframe
        src="https://codesandbox.io/embed/crazy-carson-pe50v?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{
          width: '100%',
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: 'hidden'
        }}
        title="psds-skills-nav-example"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </Content>
  </Chrome>
)
