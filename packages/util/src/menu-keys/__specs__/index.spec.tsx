import { fireEvent, render } from '@testing-library/react'

import { basic } from '../__stories__/index.story'

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
    const { getByTestId } = render(basic())
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
    const { getByTestId } = render(basic())
    let focused = getByTestId('root-list-item-0')

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
    const { getByTestId } = render(basic())
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
    const { getByTestId } = render(basic())
    let focused = getByTestId('root-list-item-0')

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
