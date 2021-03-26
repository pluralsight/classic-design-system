import React from 'react'
import { css } from 'glamor'
import { action } from '@storybook/addon-actions'

import {
  handleMenuKeyDownEvents,
  handleMenuKeyUpEvents,
  useMenuRef
} from '../index'

export default {
  title: 'Utils/useMenuKeyEvents'
}

export const basic = () => <MockStory />

const MockStory: React.FC = () => {
  const ref = useMenuRef()

  const rootList = Array.from(Array(10).keys())
  const nestedList = Array.from(Array(5).keys())

  return (
    <ul
      data-testid="root-menu"
      onKeyDown={handleMenuKeyDownEvents}
      onKeyUp={handleMenuKeyUpEvents}
      ref={ref}
      {...css({ '& :focus': { outline: '1px solid violet' } })}
    >
      {rootList.map((el, i) => {
        return i === 4 || i === 7 ? (
          <li
            onFocus={action(`root-list-item-${el}`)}
            data-testid={`root-list-item-${el}`}
            key={`root-list-item-${el}`}
            tabIndex={-1}
          >
            {el} root list item
            <ul data-testid="sub-menu">
              {nestedList.map(sub => (
                <li
                  onFocus={action(`root-list-item-${el}`)}
                  tabIndex={-1}
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
            tabIndex={-1}
          >
            {el} root list item
          </li>
        )
      })}
    </ul>
  )
}
