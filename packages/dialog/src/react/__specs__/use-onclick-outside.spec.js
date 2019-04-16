import React, { createRef } from 'react'
import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from 'react-testing-library'

import useOnClickOutside from '../use-onclick-outside'

function renderTestHook(handler, ref = createRef()) {
  const TestHook = React.forwardRef((props, _ref) => {
    useOnClickOutside(ref, handler)

    return (
      <div ref={_ref} {...props}>
        <button>Click Me</button>
      </div>
    )
  })

  return render(<TestHook ref={ref} />)
}

describe('useOnClickOutside', () => {
  afterEach(cleanup)

  it('calls the handler when a click event happens somewhere else', () => {
    const handler = jest.fn()

    renderTestHook(handler)
    fireEvent.click(document.body)

    expect(handler).toHaveBeenCalled()
  })

  it('does NOT call the handler if a click happens on the ref element', () => {
    const handler = jest.fn()
    const ref = createRef()

    renderTestHook(handler, ref)
    fireEvent.click(ref.current)

    expect(handler).not.toHaveBeenCalled()
  })

  it('does NOT call the handler if a click happens inside the ref element', async () => {
    const handler = jest.fn()

    const { getByText } = renderTestHook(handler)
    const childBtn = await waitForElement(() => getByText('Click Me'))
    fireEvent.click(childBtn)

    expect(handler).not.toHaveBeenCalled()
  })
})
