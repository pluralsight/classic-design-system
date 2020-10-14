import { renderHook } from '@testing-library/react-hooks'
import { createRef, useImperativeHandle, useCallback, useState } from 'react'

import { useCombinedRefs } from '..'

describe('useCombinedRefs', () => {
  test('multiple refs', () => {
    const { result } = renderHook(() => {
      const outer = createRef<HTMLElement>()
      const inner = createRef<HTMLElement>()
      const combinedRef = useCombinedRefs(inner, outer)

      useImperativeHandle<unknown, unknown>(combinedRef, () => ({
        value: 'ref'
      }))

      return { outer, inner }
    })
    expect(result.current.outer).toEqual({ current: { value: 'ref' } })
    expect(result.current.inner).toEqual({ current: { value: 'ref' } })
  })

  test('one ref', () => {
    const { result } = renderHook(() => {
      const outer = createRef<HTMLElement>()
      const inner = createRef<HTMLElement>()
      const combinedRef = useCombinedRefs(outer)

      useImperativeHandle<unknown, unknown>(combinedRef, () => ({
        value: 'ref'
      }))

      return { outer, inner }
    })
    expect(result.current.outer).toEqual({ current: { value: 'ref' } })
    expect(result.current.inner).toEqual({ current: null })
  })

  test('no refs', () => {
    const { result } = renderHook(() => {
      const outer = createRef<HTMLElement>()
      const inner = createRef<HTMLElement>()
      const combinedRef = useCombinedRefs()

      useImperativeHandle<unknown, unknown>(combinedRef, () => ({
        value: 'ref'
      }))

      return { outer, inner }
    })

    expect(result.current.outer).toEqual({ current: null })
    expect(result.current.inner).toEqual({ current: null })
  })

  test('with a callback ref', () => {
    const { result } = renderHook(() => {
      const [height, setHeight] = useState(0)
      const cbRef = useCallback(() => setHeight(5), [])

      useCombinedRefs(cbRef)

      return { height }
    })

    expect(result.current.height).toEqual(5)
  })
})
