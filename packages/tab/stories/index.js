import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Tab from '../react'

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
        {this.menus.map(
          (menu, i) =>
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

const defaultStory = storiesOf('default', module)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => <InAppExample />)
