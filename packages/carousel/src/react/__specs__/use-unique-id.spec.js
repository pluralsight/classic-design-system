import { renderHook } from '@testing-library/react-hooks'

import { uniqueId } from '../../js/utils'
import useUniqueId from '../use-unique-id'

describe('useUniqueId', () => {
  beforeEach(() => {
    uniqueId.reset()
  })

  it('should provide a stable id across renders', () => {
    const { rerender, result } = renderHook(() => useUniqueId())

    expect(result.current).toEqual('1')

    rerender()
    expect(result.current).toEqual('1')

    rerender()
    expect(result.current).toEqual('1')

    rerender()
    expect(result.current).toEqual('1')

    rerender()
    expect(result.current).toEqual('1')
  })

  it('supports prefixing', () => {
    const { rerender, result } = renderHook(() => useUniqueId('the_prefix_'))

    expect(result.current).toEqual('the_prefix_1')

    rerender()
    expect(result.current).toEqual('the_prefix_1')

    rerender()
    expect(result.current).toEqual('the_prefix_1')

    rerender()
    expect(result.current).toEqual('the_prefix_1')

    rerender()
    expect(result.current).toEqual('the_prefix_1')
  })
})
