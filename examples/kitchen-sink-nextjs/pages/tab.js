import Tab from '@pluralsight/ps-design-system-tab'
import { P } from '@pluralsight/ps-design-system-text'
import React from 'react'

function Example() {
  const [activeIndex, setActiveIndex] = React.useState(2)
  const menus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => ({
    id: `example${i}`,
    label: `Menu ${i}`,
    content: `Menu stuff ${i}`,
  }))
  return (
    <>
      <Tab.List>
        {menus.map((menu, i) => (
          <Tab.ListItem
            id={menu.id}
            key={menu.id}
            onClick={() => setActiveIndex(i)}
            {...(i === activeIndex ? { active: true } : null)}
          >
            {menu.label}
          </Tab.ListItem>
        ))}
      </Tab.List>
      {menus.map((menu, i) =>
        i === activeIndex ? (
          <Tab.Panel labelledBy={menu.id} key={menu.id}>
            <P>{menu.content}</P>
          </Tab.Panel>
        ) : null
      )}
    </>
  )
}

export default Example
