import backgrounds from '@storybook/addon-backgrounds'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import Tab from '../react'

const bg = backgrounds([
  { name: 'product', value: core.colors.gray06, default: true }
])

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
              {...(i === this.state.activeIndex ? { active: true } : null)}
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

const themeStory = storiesOf('theme', module).addDecorator(bg)
const fontColors = ['white', 'black']
const bgColors = ['black', 'white']
Object.keys(Theme.names)
  .map((name, i) => [name, fontColors[i], bgColors[i]])
  .forEach(([name, color, backgroundColor]) =>
    themeStory.add(name, _ => (
      <div style={{ height: '100%', width: '100%', color, backgroundColor }}>
        <Theme name={name}>
          <InAppExample />
        </Theme>
      </div>
    ))
  )
