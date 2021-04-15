import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { useCombinedRefs } from '../index'

describe('useCombinedRefs', () => {
  test('multiple refs', () => {
    const { result } = renderHook(() => {
      const outer = React.useRef<HTMLElement>(null)
      const inner = React.useRef<HTMLElement>(null)
      const combinedRef = useCombinedRefs(inner, outer)

      React.useImperativeHandle<unknown, unknown>(combinedRef, () => ({
        value: 'ref'
      }))

      return { outer, inner }
    })
    expect(result.current.outer).toEqual({ current: { value: 'ref' } })
    expect(result.current.inner).toEqual({ current: { value: 'ref' } })
  })

  test('one ref', () => {
    const { result } = renderHook(() => {
      const outer = React.useRef<HTMLElement>(null)
      const inner = React.useRef<HTMLElement>(null)
      const combinedRef = useCombinedRefs(outer)

      React.useImperativeHandle<unknown, unknown>(combinedRef, () => ({
        value: 'ref'
      }))

      return { outer, inner }
    })
    expect(result.current.outer).toEqual({ current: { value: 'ref' } })
    expect(result.current.inner).toEqual({ current: null })
  })

  test('no refs', () => {
    const { result } = renderHook(() => {
      const outer = React.useRef<HTMLElement>(null)
      const inner = React.useRef<HTMLElement>(null)
      const combinedRef = useCombinedRefs()

      React.useImperativeHandle<unknown, unknown>(combinedRef, () => ({
        value: 'ref'
      }))

      return { outer, inner }
    })

    expect(result.current.outer).toEqual({ current: null })
    expect(result.current.inner).toEqual({ current: null })
  })

  test('with a callback ref', () => {
    const { result } = renderHook(() => {
      const [height, setHeight] = React.useState(0)
      const cbRef = React.useCallback(() => setHeight(5), [])

      useCombinedRefs(cbRef)

      return { height }
    })

    expect(result.current.height).toEqual(5)
  })
})
