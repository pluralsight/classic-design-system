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
        {`<AppFrame
  sidenav={<NavBar />}
  topnav={<CustomTopNav />}
>
  {/* page content here */}
</AppFrame>`}
      </Code>

      <P>If needed, you can controlled the the sidenav open state.</P>
      <Code language="html">
        {`const [open, setOpen] = useState(false)
const toggle = () => setOpen(!open)

<AppFrame
  sidenav={<CustomSideNav />}
  topnav={<NavBar onMobileMenuClick={toggle} />}
>
  {/* page content here */}
</AppFrame>`}
      </Code>
    </Content>
  </Chrome>
)
