import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Tab from '../../index'
import { act } from 'react-dom/test-utils'

export default {
  title: 'Components/Tab'
} as Meta

export const Default: Story = () => <NavigableExample />

export const NoItems: Story = () => <Tab.List />

export const AsLinks: Story = () => (
  <Tab.List>
    <Tab.ListItem href="https://duckduckgo.com" id={1} key={1}>
      External link
    </Tab.ListItem>
  </Tab.List>
)

export const SuperLongItem: Story = () => (
  <Tab.List>
    <Tab.ListItem id={1} key={1}>
      This is the song that doesn't end; yes, it goes on and on, my friend; some
      people started singing it, not knowing what it was; and they'll continue
      singing it forever just because
    </Tab.ListItem>
    <Tab.ListItem id={2} key={2}>
      Short
    </Tab.ListItem>
    <Tab.ListItem id={3} key={3}>
      A little less ridiculous but still long
    </Tab.ListItem>
  </Tab.List>
)

export const ActiveItemOffscreen: Story = () => (
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
)

export const ActiveItemPrecededByNull: Story = () => {
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

        {activeTab === 1 ? <Tab.Panel labelledBy={1}>Panel 1</Tab.Panel> : null}
        {activeTab === 2 ? <Tab.Panel labelledBy={2}>Panel 2</Tab.Panel> : null}
      </>
    )
  }
  return <PrecedingNullExample />
}

export const Scrolling: Story = () => (
  <StoryGrid cols={1}>
    <div>10</div>
    <NavigableExample count={10} />
    <div>20</div>
    <NavigableExample count={20} />
    <div>30</div>
    <NavigableExample count={30} />
    <div>40</div>
    <NavigableExample count={40} />
    <div>thinner container</div>
    <div style={{ outline: '1px solid red', width: '50%' }}>
      <NavigableExample count={35} />
    </div>
    <div>short list, resizing container</div>
    <NavigableExample count={7} resizeEvery={3000} />
    <div>long list, resizing container</div>
    <NavigableExample count={45} resizeEvery={3000} />
  </StoryGrid>
)

export const StyleOverrides: Story = () => (
  <StoryGrid cols={1}>
    <div>list no borderBottom (style)</div>
    <Tab.List style={{ borderBottom: 'none' }}>
      <Tab.ListItem id="1">Wow</Tab.ListItem>
    </Tab.List>
    <div>listItem disabled opacity (style)</div>
    <Tab.List>
      <Tab.ListItem style={{ opacity: 0.5 }} id="2">
        Disabled look
      </Tab.ListItem>
    </Tab.List>
    <div>panel disabled opacity (style)</div>
    <div>
      <Tab.List>
        <Tab.ListItem style={{ opacity: 0.5 }} id="3">
          Disabled look
        </Tab.ListItem>
      </Tab.List>
      <Tab.Panel style={{ border: '1px solid red' }} labelledBy="3">
        This is the content
      </Tab.Panel>
    </div>
  </StoryGrid>
)

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
      id: `example-${count}-${i}`,
      label: `Menu ${i}`,
      content: `Menu stuff ${i}`
    }))
  React.useEffect(() => {
    let timer: number | undefined
    if (resizeEvery) {
      timer = window.setInterval(() => {
        act(() => {
          setWidth(randomIntBetween(25, 100))
        })
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

const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' '),
        justifyItems: 'left'
      }}
      {...rest}
    />
  )
}
