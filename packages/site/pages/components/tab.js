import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import Tab from '@pluralsight/ps-design-system-tab/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

class InAppExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { activeIndex: 2 }
    this.menus = [1, 2, 3, 4, 5].map(i => ({
      id: `example${i}`,
      label: `Menu ${i}`,
      content: `Menu stuff ${i}`
    }))
    this.handleTabClick = this.handleTabClick.bind(this)
  }

  handleTabClick(i) {
    this.setState({ activeIndex: i })
  }

  render() {
    return (
      <div>
        <SectionHeading>In-app example</SectionHeading>
        <P>
          The Tab component provides the look and feel and accessibility
          standards for the UI. You control the hiding and showing of content or
          other interaction specific to your application.
        </P>
        <Theme>
          <div className="app">
            <Tab.List>
              {this.menus.map((menu, i) => (
                <Tab.ListItem
                  id={menu.id}
                  key={menu.id}
                  onClick={this.handleTabClick}
                  {...(i === this.state.activeIndex ? { active: true } : null)}
                >
                  {menu.label}
                </Tab.ListItem>
              ))}
            </Tab.List>
            {this.menus.map((menu, i) =>
              i === this.state.activeIndex ? (
                <Tab.Panel labelledBy={menu.id} key={menu.id}>
                  <div className="content">{menu.content}</div>
                </Tab.Panel>
              ) : null
            )}
          </div>
        </Theme>
        <style jsx>{`
          .app {
            background: ${core.colors.gray06};
            padding: ${core.layout.spacingSmall} ${core.layout.spacingLarge};
          }
          .content {
            color: ${core.colors.white};
            padding: ${core.layout.spacingLarge} 0;
          }
        `}</style>
      </div>
    )
  }
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Tab">
      <PageHeading packageName="tab">Tab</PageHeading>

      <PropTypes
        props={{
          'Tab.ListItem': [
            PropTypes.row([
              'active',
              'boolean',
              null,
              null,
              'styled active (automatically set)'
            ]),
            PropTypes.row([
              'id',
              <code>string|number</code>,
              true,
              null,
              'id tying list item to panel'
            ]),
            PropTypes.row([
              'onClick',
              <code>Event => ()</code>,
              null,
              null,
              'callback when list item clicked'
            ])
          ],
          'Tab.Panel': [
            PropTypes.row([
              'labelledBy',
              <code>string|number</code>,
              true,
              null,
              'id tying panel to list item'
            ])
          ]
        }}
      />

      <SectionHeading>Tab List</SectionHeading>
      <P>
        Tabs are a navigational element used to show and pivot between related
        subsections of an interface.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Tab }}
        codes={[
          `
<Tab.List>
  <Tab.ListItem id="menu1">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu2">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu3">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu4">Menu Item</Tab.ListItem>
  <Tab.ListItem id="menu5">Menu Item</Tab.ListItem>
</Tab.List>
`
        ]}
      />

      <SectionHeading>Tab Panel</SectionHeading>
      <P>
        Panels are wrappers that provide an accessibility link between the
        Tab.ListItem and your content. Ensure your ids match to make the link.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Tab }}
        codes={[
          `
<Tab.List>
  <Tab.ListItem id="menu1">Menu Item</Tab.ListItem>
</Tab.List>
<Tab.Panel labelledBy="menu1">
  <div style={{ marginTop: 24 }}>Content stuff</div>
</Tab.Panel>
`
        ]}
      />

      <SectionHeading>Light theme</SectionHeading>
      <P>
        To specify the light theme, wrap your components in a <code>Theme</code>{' '}
        componet.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Tab, Theme }}
        codes={[
          `
<Theme name={Theme.names.light}>
  <Tab.List>
    <Tab.ListItem id="menu1">Menu Item</Tab.ListItem>
    <Tab.ListItem id="menu2">Menu Item</Tab.ListItem>
    <Tab.ListItem id="menu3">Menu Item</Tab.ListItem>
    <Tab.ListItem id="menu4">Menu Item</Tab.ListItem>
    <Tab.ListItem id="menu5">Menu Item</Tab.ListItem>
  </Tab.List>
</Theme>
`
        ]}
        themeName={Theme.names.light}
      />

      <InAppExample />
    </Content>
  </Chrome>
))
