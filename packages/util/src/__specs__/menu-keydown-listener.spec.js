import React, { useEffect } from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useMenuKeyEvents } from '../index.js'

const TestComponent = props => {
  const rootList = [...Array(10).keys()]
  const nestedList = [...Array(5).keys()]
  const [ref, removeListener] = useMenuKeyEvents()
  useEffect(() => {
    return removeListener
  })
  return (
    <ul data-testid="root-menu" ref={ref}>
      {rootList.map((el, i) => {
        return i === 4 || i === 7 ? (
          <li
            data-testid={`root-list-item-${el}`}
            key={`root-list-item-${el}`}
            tabIndex="-1"
          >
            {el} root list item
            <ul data-testid="sub-menu">
              {nestedList.map(sub => (
                <li
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

describe('useMenuKeyEvents()', () => {
  it('TestComponent Snapshot', () => {
    const { getByTestId } = render(<TestComponent />)
    const root = getByTestId('root-menu')
    expect(root).toMatchSnapshot()
  })
  it('Keydown to ', () => {
    const { getByTestId } = render(<TestComponent />)
    let focused = getByTestId('root-list-item-0')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: 'ArrowDown' })
    focused = getByTestId('root-list-item-1')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: 'ArrowUp' })
    focused = getByTestId('root-list-item-0')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: 'ArrowDown' })
    focused = getByTestId('root-list-item-1')
    fireEvent.keyDown(focused, { key: 'ArrowDown' })
    focused = getByTestId('root-list-item-2')
    fireEvent.keyDown(focused, { key: 'ArrowDown' })
    focused = getByTestId('root-list-item-3')
    fireEvent.keyDown(focused, { key: 'ArrowDown' })
    focused = getByTestId('root-list-item-4')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: 'ArrowRight' })
    focused = getByTestId('first-sub-menu-list-item-0')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: 'End' })
    focused = getByTestId('first-sub-menu-list-item-4')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: 'ArrowLeft' })
    focused = getByTestId('root-list-item-4')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: 'Home' })
    focused = getByTestId('root-list-item-0')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: 'Home' })
    focused = getByTestId('root-list-item-0')
    expect(document.activeElement).toBe(focused)

    fireEvent.keyDown(focused, { key: '7' })
    focused = getByTestId('root-list-item-7')
    expect(document.activeElement).toBe(focused)
  })
})
