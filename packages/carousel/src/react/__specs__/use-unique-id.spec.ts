import { renderHook } from '@testing-library/react-hooks'

import useUniqueId from '../use-unique-id'


const uniqueId = jest.fn().mockImplementation(prefix => prefix + '12345')

describe('useUniqueId', () => {

  beforeEach(() => {
    uniqueId.mockClear()
  })

  it('should provide a stable id across renders', () => {
    const { rerender, result } = renderHook(() => useUniqueId('', uniqueId))

    expect(result.current).toEqual('12345')

    rerender()
    expect(result.current).toEqual('12345')

    rerender()
    expect(result.current).toEqual('12345')

    rerender()
    expect(result.current).toEqual('12345')

    rerender()
    expect(result.current).toEqual('12345')

    expect(uniqueId).toHaveBeenCalledTimes(1)
  })

  it('supports prefixing', () => {
    const { rerender, result } = renderHook(() => useUniqueId('the_prefix_', uniqueId))

    expect(result.current).toEqual('the_prefix_12345')

    rerender()
    expect(result.current).toEqual('the_prefix_12345')

    rerender()
    expect(result.current).toEqual('the_prefix_12345')

    rerender()
    expect(result.current).toEqual('the_prefix_12345')

    rerender()
    expect(result.current).toEqual('the_prefix_12345')

    expect(uniqueId).toHaveBeenCalledTimes(1)
  })
})
