import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

import useOnKeyUp from '../use-onkeyup.js'

describe('useOnKeyUp', () => {
  afterEach(cleanup)

  const targetKey = 'A'

  let container, handler, unmount

  beforeEach(async () => {
    handler = jest.fn()

    const TestHook = props => {
      useOnKeyUp(targetKey, handler)
      return <div {...props} />
    }

    ;({ container, unmount } = render(<TestHook />))
  })

  it('calls handler when escape is pressed', async () => {
    fireEvent.keyUp(container, { key: targetKey })
    expect(handler).toHaveBeenCalled()
  })

  it('removes event listener when unmounted', async () => {
    unmount()

    fireEvent.keyUp(container, { key: targetKey })
    expect(handler).not.toHaveBeenCalled()
  })
})
