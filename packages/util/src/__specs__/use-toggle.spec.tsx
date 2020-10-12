/* eslint-disable react/prop-types */
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'

import { useToggle } from '..'

describe('useToggle', () => {
  test('uncontrolled', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current.isOpen).toBe(false)
    act(() => {
      result.current.onToggle()
    })

    expect(result.current.isOpen).toBe(true)
  })

  test('controlled', () => {
    let open = false
    const mockCallback = jest.fn(() => (open = !open))
    const { result } = renderHook(() =>
      useToggle({ isOpen: open, onToggle: mockCallback })
    )
    expect(result.current.isOpen).toBe(false)
    result.current.onToggle()
    expect(mockCallback.mock.calls.length).toBe(1)
    expect(open).toBe(true)
  })
})
