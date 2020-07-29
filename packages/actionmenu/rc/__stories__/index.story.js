import React, { useEffect } from 'react'
import { css } from 'glamor'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { useMenuKeyEvents } from '@pluralsight/ps-design-system-util'

const MockComponent = () => {
  const rootList = [...Array(10).keys()]
  const nestedList = [...Array(5).keys()]
  const [ref, removeListener] = useMenuKeyEvents()
  useEffect(() => {
    return removeListener
  }, [removeListener])
  return (
    <ul
      data-testid="root-menu"
      style={{ color: 'white' }}
      ref={ref}
      {...css({ '& :focus': { outline: '1px solid violet' } })}
    >
      {rootList.map((el, i) => {
        return i === 4 || i === 7 ? (
          <li
            onFocus={action(`root-list-item-${el}`)}
            data-testid={`root-list-item-${el}`}
            key={`root-list-item-${el}`}
            tabIndex="-1"
          >
            {el} root list item
            <ul data-testid="sub-menu">
              {nestedList.map(sub => (
                <li
                  onFocus={action(`root-list-item-${el}`)}
                  tabIndex="-1"
                  key={
                    i === 4
                      ? `first-sub-menu-list-item-${sub}`
                      : `second-sub-menu-list-item-${sub}`
                  }
                  data-testid={
                    i === 4
                      ? `first-sub-menu-list-item-${sub}`
                      : `second-sub-menu-list-item-${sub}`
                  }
                >
                  {sub} sub menu list item
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li
            onFocus={action(`root-list-item-${el}`)}
            data-testid={`root-list-item-${el}`}
            key={`root-list-item-${el}`}
            tabIndex="-1"
          >
            {el} root list item
          </li>
        )
      })}
    </ul>
  )
}
storiesOf('actionmenu:rc', module).add('default', () => <MockComponent />)
