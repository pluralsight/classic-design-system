import core from '@pluralsight/ps-design-system-core'
import Drawer from '@pluralsight/ps-design-system-drawer/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Row from '@pluralsight/ps-design-system-row/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

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

const ExampleDrawerBase = () => (
  <div>
    <Row title="Building a Web App with ASP.NET Core"
         progress={18}
         metadata1={['Joe Eames', 'Intermediate', 'Jul 21, 2016']}
         image={<div className="image-placeholder"/>}/>
    <style jsx>{`
      .image-placeholder {
        width: 100%;
        height: 100%;
        background: ${core.colors.gray03};
      }
    `}</style>
  </div>
)

const ExampleDrawerPanel = () => (
  <div className="drawer-panel-example">
    <Row title="Course Overview" metadata1={['1m 46s']} actionBar={[<Row.Action icon={<Icon id="bookmark" />} key="bookmark" />]} size={Row.sizes.small} actionBarVisible />
    <Row title="What is ASP.NET Core?" metadata1={['39m 28s']} actionBar={[<Row.Action icon={<Icon id="bookmark" />} key="bookmark" />]} size={Row.sizes.small} actionBarVisible />
    <style jsx>{`
      .drawer-panel-example {
        padding: ${core.layout.spacingXLarge} ${core.layout.spacingXLarge} ${core.layout.spacingMedium} ${core.layout.spacingXLarge};
      }
    `}</style>
  </div>
)

const DrawerExamples = () => (
  <div className="drawer-example">
    <Theme name={Theme.names.dark}>
      <div>
        <Drawer base={<ExampleDrawerBase />}>
          <ExampleDrawerPanel />
        </Drawer>
        <Drawer startOpen base={<ExampleDrawerBase />}>
          <ExampleDrawerPanel />
        </Drawer>
      </div>
    </Theme>
    <style jsx>{`
      .drawer-example {
        padding: ${core.layout.spacingXLarge};
        background: ${core.colors.gray06};
        color: ${core.colors.bone};
      }
    `}</style>
  </div>
)

const PinkBox = props => (
  <div className="pink-box" style={{ height: props.children === 'DrawerBase' ? 100 : 128 }}>
    <span>{`<${props.children}>`}</span>
    <style jsx>{`
      .pink-box {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed ${core.colors.pink};
        color: ${core.colors.pink};
        font-size: 16px;
        font-family: monospace;
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Drawer">
      <PageHeading packageName="drawer">Drawer</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">npm install @pluralsight/ps-design-system-drawer</Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Button from '@pluralsight/ps-design-system-drawer/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'base',
            'React element',
            true,
            null,
            'content the drawer slides out from'
          ]),
          PropTypes.row([
            'children',
            'React element',
            true,
            null,
            'content inside the drawer'
          ]),
          PropTypes.row([
            'isOpen',
            'boolean',
            null,
            null,
            `overrides the drawer's internal state to control whether the drawer is open or not`
          ]),
          PropTypes.row([
            'onToggle',
            'function',
            null,
            null,
            'called when the drawer opens/closes with new isOpen status'
          ]),
          PropTypes.row([
            'startOpen',
            'boolean',
            null,
            <code>false</code>,
            'if true, the drawer will be open when first mounted'
          ])
        ]}
      />

      <SectionHeading>Example</SectionHeading>
      <P>
        A drawer as well as its expanded region can be wrapped around other components and adapt to their size.
      </P>
      <DrawerExamples />

      <SectionHeading>Drawer Base</SectionHeading>
      <P>
        The DrawerBase may expand to fit any elements, and includes the mechanism to expose the DrawerPanel.
      </P>
      <Example.React
        includes={{ Drawer, PinkBox }}
        orient="vertical"
        codes={[
`<Drawer startOpen base={<PinkBox>DrawerBase</PinkBox>}>
  <div style={{ height: 128 }} />
</Drawer>`
        ]}
      />

      <SectionHeading>Drawer Panel</SectionHeading>
      <P>
        The DrawerPanel may expand to fit any elements. No default spacing is built in.
      </P>
      <Example.React
        includes={{ Drawer }}
        orient="vertical"
        codes={[
`<Drawer startOpen base={<div style={{ height: 100 }} />}>
  <PinkBox>DrawerPanel</PinkBox>
</Drawer>`
        ]}
      />

      <SectionHeading>Light Theme</SectionHeading>
      <P>
        To specify the light theme, wrap your components in a <code>Theme</code> component.
      </P>
      <Example.React
        includes={{ Drawer, Theme }}
        themeName={Theme.names.light}
        orient="vertical"
        codes={[
`<Theme name={Theme.names.light}>
  <Drawer startOpen base={<div style={{ height: 100 }} />}>
    <div style={{ height: 128 }} />
  </Drawer>
</Theme>`
        ]}
      />
    </Content>
  </Chrome>
))
