/* eslint-disable react/prop-types */
import { renderHook } from '@testing-library/react-hooks'
import { createRef, useImperativeHandle, useCallback, useState } from 'react'

import { useCombinedRefs } from '..'

describe('useCombinedRefs', () => {
  test('multiple refs', () => {
    const { result } = renderHook(() => {
      const outer = createRef()
      const inner = createRef()
      const combinedRef = useCombinedRefs(outer, inner)
      useImperativeHandle(combinedRef, () => ({
        value: 'ref'
      }))
      return { outer, inner }
    })
    expect(result.current.outer).toEqual({ current: { value: 'ref' } })
    expect(result.current.inner).toEqual({ current: { value: 'ref' } })
  })
  test('one ref', () => {
    const { result } = renderHook(() => {
      const outer = createRef()
      const inner = createRef()
      const combinedRef = useCombinedRefs(outer)
      useImperativeHandle(combinedRef, () => ({
        value: 'ref'
      }))
      return { outer, inner }
    })
    expect(result.current.outer).toEqual({ current: { value: 'ref' } })
    expect(result.current.inner).toEqual({ current: null })
  })
  test('no refs', () => {
    const { result } = renderHook(() => {
      const outer = createRef()
      const inner = createRef()
      const combinedRef = useCombinedRefs()
      useImperativeHandle(combinedRef, () => ({
        value: 'ref'
      }))
      return { outer, inner }
    })
    expect(result.current.outer).toEqual({ current: null })
    expect(result.current.inner).toEqual({ current: null })
  })
  test('callbackRef', () => {
    const { result } = renderHook(() => {
      const [height, setHeight] = useState(0)
      const outer = createRef()
      const inner = useCallback(node => {
        if (node !== null) {
          setHeight(5)
        }
      }, [])
      useCombinedRefs(inner, outer)
      return { height, outer }
    })
    expect(result.current.height).toEqual(5)
    expect(result.current.outer).toEqual({ current: null })
  })
})
