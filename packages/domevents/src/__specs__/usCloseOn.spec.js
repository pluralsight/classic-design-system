import React from 'react'
import { render, wait, act } from '@testing-library/react'
import { useCloseOn, domEvents } from '../index.js'

const Element = props => {
  useCloseOn(props)
  return <div />
}

describe('usClosOn', () => {
  test(domEvents.click, async () => {
    const callback = jest.fn()
    act(() => {
      render(
        <Element {...{ event: domEvents.click, callback, isOpen: true }} />
      )
    })
    act(() => {
      global.dispatchEvent(new Event(domEvents.click))
    })
    await wait(() => expect(callback.mock.calls.length).toBe(1))
  })
})
