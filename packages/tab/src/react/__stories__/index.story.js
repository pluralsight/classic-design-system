import addons from '@storybook/addons'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Tab from '../index.js'

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
        <Tab.List>
          {this.menus.map((menu, i) => (
            <Tab.ListItem
              id={menu.id}
              key={menu.id}
              onClick={this.handleTabClick}
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
    )
  }
}

storiesOf('default', module)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => <InAppExample />)
  .add('no items', _ => <Tab.List />)
  .add('as links', _ => (
    <Tab.List>
      <Tab.ListItem href="https://duckduckgo.com" id={1} key={1}>
        External link
      </Tab.ListItem>
    </Tab.List>
  ))

storiesOf('style overrides', module)
  .addDecorator(themeDecorator(addons))
  .add('list no borderBottom (style)', _ => (
    <Tab.List style={{ borderBottom: 'none' }}>
      <Tab.ListItem id="wow">Wow</Tab.ListItem>
    </Tab.List>
  ))
  .add('listItem disabled opacity (style)', _ => (
    <Tab.List>
      <Tab.ListItem style={{ opacity: 0.5 }} id="wow">
        Disabled look
      </Tab.ListItem>
    </Tab.List>
  ))
  .add('panel disabled opacity (style)', _ => (
    <div>
      <Tab.List>
        <Tab.ListItem style={{ opacity: 0.5 }} id="wow">
          Disabled look
        </Tab.ListItem>
      </Tab.List>
      <Tab.Panel style={{ border: '1px solid red' }} labelledBy="wow">
        This is the content
      </Tab.Panel>
    </div>
  ))
