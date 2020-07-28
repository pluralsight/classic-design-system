import React, { createRef } from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useMenuKeyEvents } from '../index.js'

const TestComponent = props => {
  const rootList = [...Array(10).keys()]
  const nestedList = [...Array(5).keys()]
  const ref = createRef(null)
  useMenuKeyEvents(ref)
  return (
    <ul data-testid="root-menu">
      {rootList.map((el, i) => {
        return i === 4 || i === 7 ? (
          <ul data-testid="sub-menu" key={`root-list-item-${el}`}>
            {nestedList.map(sub => (
              <li
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
                sub menu list item
              </li>
            ))}
          </ul>
        ) : (
          <li data-testid={`root-list-item-${el}`} key={`root-list-item-${el}`}>
            root list item
          </li>
        )
      })}
    </ul>
  )
}

describe('useMenuKeyEvents()', () => {
  it('TestComponent Snapshot', () => {
    const { getByTestId } = render(<TestComponent />)
    const root = getByTestId('root-menu')
    expect(root).toMatchSnapshot()
  })
  it('Key navigation of menu', () => {
    const { getByTestId } = render(<TestComponent />)
    // const root = getByTestId('root-menu')
    expect(document.activeElement).toBe('root-list-item-0')
  })
})
