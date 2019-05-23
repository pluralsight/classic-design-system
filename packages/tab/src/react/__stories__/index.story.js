import addons from '@storybook/addons'
import PropTypes from 'prop-types'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Tab from '../index.js'

function NavigableExample({ count = 5 }) {
  const [activeIndex, setActiveIndex] = React.useState(2)
  const menus = Array(count)
    .fill(null)
    .map((_, i) => ({
      id: `example${i}`,
      label: `Menu ${i}`,
      content: `Menu stuff ${i}`
    }))

  function handleTabClick(i) {
    setActiveIndex(i)
  }

  return (
    <div>
      <Tab.List>
        {menus.map((menu, i) => (
          <Tab.ListItem id={menu.id} key={menu.id} onClick={handleTabClick}>
            {menu.label}
          </Tab.ListItem>
        ))}
      </Tab.List>
      {menus.map((menu, i) =>
        i === activeIndex ? (
          <Tab.Panel labelledBy={menu.id} key={menu.id}>
            <div className="content">{menu.content}</div>
          </Tab.Panel>
        ) : null
      )}
    </div>
  )
}
NavigableExample.propTypes = {
  count: PropTypes.number
}

storiesOf('default', module)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => <NavigableExample />)
  .add('no items', _ => <Tab.List />)
  .add('as links', _ => (
    <Tab.List>
      <Tab.ListItem href="https://duckduckgo.com" id={1} key={1}>
        External link
      </Tab.ListItem>
    </Tab.List>
  ))

storiesOf('scrolling', module)
  .addDecorator(themeDecorator(addons))
  .add('10 count', _ => <NavigableExample count={10} />)
  .add('20 count', _ => <NavigableExample count={20} />)
  .add('30 count', _ => <NavigableExample count={30} />)
  .add('35 count', _ => <NavigableExample count={35} />)
  .add('thinner container', _ => (
    <div style={{ outline: '1px solid red', width: '50%' }}>
      <NavigableExample count={35} />
    </div>
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
