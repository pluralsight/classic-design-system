import { storiesOf } from '@storybook/react'
import React from 'react'

import Tab from '../../index'

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
  .add('default', () => <NavigableExample />)
  .add('no items', () => <Tab.List />)
  .add('as links', () => (
    <Tab.List>
      <Tab.ListItem href="https://duckduckgo.com" id={1} key={1}>
        External link
      </Tab.ListItem>
    </Tab.List>
  ))
  .add('super long item', () => (
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
  .add('active item offscreen', () => (
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
  .add('active item preceded by null', () => {
    function PrecedingNullExample() {
      const [activeTab, setActiveTab] = React.useState(2)
      const conditionallyRenderedTabListItem = null

      return (
        <>
          <Tab.List>
            {conditionallyRenderedTabListItem}
            <Tab.ListItem
              id={2}
              onClick={() => setActiveTab(2)}
              active={activeTab === 2}
            >
              Tab 2
            </Tab.ListItem>
          </Tab.List>

          {activeTab === 1 ? (
            <Tab.Panel labelledBy={1}>Panel 1</Tab.Panel>
          ) : null}
          {activeTab === 2 ? (
            <Tab.Panel labelledBy={2}>Panel 2</Tab.Panel>
          ) : null}
        </>
      )
    }
    return <PrecedingNullExample />
  })

storiesOf('scrolling', module)
  .add('10 count', () => <NavigableExample count={10} />)
  .add('20 count', () => <NavigableExample count={20} />)
  .add('30 count', () => <NavigableExample count={30} />)
  .add('35 count', () => <NavigableExample count={35} />)
  .add('thinner container', () => (
    <div style={{ outline: '1px solid red', width: '50%' }}>
      <NavigableExample count={35} />
    </div>
  ))
  .add('short list, resizing container', () => (
    <NavigableExample count={7} resizeEvery={3000} />
  ))
  .add('long list, resizing container', () => (
    <NavigableExample count={35} resizeEvery={3000} />
  ))

storiesOf('style overrides', module)
  .add('list no borderBottom (style)', () => (
    <Tab.List style={{ borderBottom: 'none' }}>
      <Tab.ListItem id="wow">Wow</Tab.ListItem>
    </Tab.List>
  ))
  .add('listItem disabled opacity (style)', () => (
    <Tab.List>
      <Tab.ListItem style={{ opacity: 0.5 }} id="wow">
        Disabled look
      </Tab.ListItem>
    </Tab.List>
  ))
  .add('panel disabled opacity (style)', () => (
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
