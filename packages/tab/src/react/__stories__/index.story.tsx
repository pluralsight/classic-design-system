import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Tab from '../../index.js'

function randomIntBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function NavigableExample({
  count = 5,
  resizeEvery
}: {
  count?: number
  resizeEvery?: number
}) {
  const [activeIndex, setActiveIndex] = React.useState(2)
  const [width, setWidth] = React.useState(100)
  const menus = Array(count)
    .fill(null)
    .map((_, i) => ({
      id: `example${i}`,
      label: `Menu ${i}`,
      content: `Menu stuff ${i}`
    }))
  React.useEffect(() => {
    let timer: number | undefined
    if (resizeEvery) {
      timer = window.setInterval(() => {
        setWidth(randomIntBetween(25, 100))
      }, resizeEvery)
    }
    return () => {
      clearInterval(timer)
      timer = undefined
    }
  }, [resizeEvery])

  function handleTabClick(i: number, evt: React.MouseEvent) {
    setActiveIndex(i)
  }

  return (
    <div style={{ width: width + '%', outline: '1px solid red' }}>
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

storiesOf('default', module)
  .add('default', _ => <NavigableExample />)
  .add('no items', _ => <Tab.List />)
  .add('as links', _ => (
    <Tab.List>
      <Tab.ListItem href="https://duckduckgo.com" id={1} key={1}>
        External link
      </Tab.ListItem>
    </Tab.List>
  ))
  .add('super long item', _ => (
    <Tab.List>
      <Tab.ListItem id={1} key={1}>
        This is the song that doesn't end; yes, it goes on and on, my friend;
        some people started singing it, not knowing what it was; and they'll
        continue singing it forever just because
      </Tab.ListItem>
      <Tab.ListItem id={2} key={2}>
        Short
      </Tab.ListItem>
      <Tab.ListItem id={3} key={3}>
        A little less ridiculous but still long
      </Tab.ListItem>
    </Tab.List>
  ))
  .add('active item offscreen', _ => (
    <div style={{ width: '500px', outline: '1px solid red' }}>
      <Tab.List>
        <Tab.ListItem id={1} key={1}>
          One thing
        </Tab.ListItem>
        <Tab.ListItem id={2} key={2}>
          Two thing
        </Tab.ListItem>
        <Tab.ListItem id={3} key={3}>
          Three thing
        </Tab.ListItem>
        <Tab.ListItem id={4} key={4}>
          Four thing
        </Tab.ListItem>
        <Tab.ListItem id={5} key={5} active>
          ACTIVE thing
        </Tab.ListItem>
        <Tab.ListItem id={6} key={6}>
          Six thing
        </Tab.ListItem>
        <Tab.ListItem id={7} key={7}>
          Six thing
        </Tab.ListItem>
        <Tab.ListItem id={8} key={8}>
          Six thing
        </Tab.ListItem>
      </Tab.List>
    </div>
  ))

storiesOf('scrolling', module)
  .add('10 count', _ => <NavigableExample count={10} />)
  .add('20 count', _ => <NavigableExample count={20} />)
  .add('30 count', _ => <NavigableExample count={30} />)
  .add('35 count', _ => <NavigableExample count={35} />)
  .add('thinner container', _ => (
    <div style={{ outline: '1px solid red', width: '50%' }}>
      <NavigableExample count={35} />
    </div>
  ))
  .add('short list, resizing container', _ => (
    <NavigableExample count={7} resizeEvery={3000} />
  ))
  .add('long list, resizing container', _ => (
    <NavigableExample count={35} resizeEvery={3000} />
  ))

storiesOf('style overrides', module)
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
