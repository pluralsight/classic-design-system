import React from 'react'
import { render } from '@testing-library/react'
import { useCloseOn, domEvents } from '../index.js'

const Element = props => {
  useCloseOn(props)
  return <div />
}

describe('usClosOn', () => {
  test(domEvents.resize, () => {
    const callback = jest.fn()
    render(<Element {...{ event: domEvents.resize, callback, isOpen: true }} />)
    global.dispatchEvent(new Event(domEvents.resize))
    expect(callback.mock.calls.length).toBe(1)
  })
})
