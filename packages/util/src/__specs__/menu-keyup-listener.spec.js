import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {
  handleMenuKeyDownEvents,
  handleMenuKeyUpEvents,
  useMenuRef
} from '../index.js'

const TestComponent = () => {
  const rootList = [...Array(10).keys()]
  const nestedList = [...Array(5).keys()]
  const ref = useMenuRef(true)
  return (
    <ul
      data-testid="root-menu"
      ref={ref}
      onKeyDown={handleMenuKeyDownEvents}
      onKeyUp={handleMenuKeyUpEvents}
    >
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
  beforeAll(() => {
    Object.defineProperty(global.Element.prototype, 'innerText', {
      get() {
        this.querySelectorAll('script,style').forEach(s => s.remove())
        return this.textContent
      }
    })
  })
  it('ArrowUp', () => {
    const { getByTestId } = render(<TestComponent />)
    let focused = getByTestId('root-list-item-0')

    // ArrowUp
    fireEvent.keyDown(focused, { key: 'ArrowUp' })
    focused = getByTestId('root-list-item-9')
    expect(document.activeElement).toBe(focused)

    // ArrowUp
    fireEvent.keyDown(focused, { key: 'ArrowUp' })
    focused = getByTestId('root-list-item-8')
    expect(document.activeElement).toBe(focused)
  })
  it('ArrowDown + End', () => {
    const { getByTestId } = render(<TestComponent />)
    let focused = getByTestId('root-list-item-0')
    expect(document.activeElement).toBe(focused)

    // ArrowDown
    fireEvent.keyDown(focused, { key: 'ArrowDown' })
    focused = getByTestId('root-list-item-1')
    expect(document.activeElement).toBe(focused)

    // End
    fireEvent.keyDown(focused, { key: 'End' })
    focused = getByTestId('root-list-item-9')
    expect(document.activeElement).toBe(focused)

    // ArrowDown
    fireEvent.keyDown(focused, { key: 'ArrowDown' })
    focused = getByTestId('root-list-item-0')
    expect(document.activeElement).toBe(focused)
  })

  it('Character + ArrowRight', () => {
    const { getByTestId } = render(<TestComponent />)
    let focused = getByTestId('root-list-item-0')

    // Character
    fireEvent.keyDown(focused, { key: '4' })
    focused = getByTestId('root-list-item-4')
    expect(document.activeElement).toBe(focused)

    // ArrowRight
    fireEvent.keyUp(focused, { key: 'ArrowRight' })
    focused = getByTestId('first-sub-menu-list-item-0')
    expect(document.activeElement).toBe(focused)
  })
  it('Home + ArrowLeft', () => {
    const { getByTestId } = render(<TestComponent />)
    let focused = getByTestId('root-list-item-0')
    fireEvent.keyDown(focused, { key: '7' })
    focused = getByTestId('root-list-item-7')
    fireEvent.keyUp(focused, { key: 'ArrowRight' })
    focused = getByTestId('second-sub-menu-list-item-0')
    fireEvent.keyDown(focused, { key: 'ArrowUp' })
    focused = getByTestId('second-sub-menu-list-item-4')

    // Home
    fireEvent.keyDown(focused, { key: 'Home' })
    focused = getByTestId('second-sub-menu-list-item-0')
    expect(document.activeElement).toBe(focused)

    // ArrowLeft
    fireEvent.keyUp(focused, { key: 'ArrowLeft' })
    focused = getByTestId('root-list-item-7')
    expect(document.activeElement).toBe(focused)
  })
})
