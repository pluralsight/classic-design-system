/* eslint-disable react/prop-types */
import { renderHook } from '@testing-library/react-hooks'
import { createRef, useImperativeHandle } from 'react'
import { useCombinedRefs } from '../useCombinedRefs.js'

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
})
