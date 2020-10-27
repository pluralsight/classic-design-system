import { renderHook } from '@testing-library/react-hooks'

import { useUniqueId } from '../use-unique-id'

jest.mock('../unique-id', () => ({
  uniqueId: jest.fn().mockImplementation(prefix => prefix + '12345')
}))

describe('useUniqueId', () => {
  const { uniqueId } = require('../unique-id')

  beforeEach(() => {
    uniqueId.mockClear()
  })

  it('should provide a stable id across renders', () => {
    const { rerender, result } = renderHook(() => useUniqueId())

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
    const { rerender, result } = renderHook(() => useUniqueId('the_prefix_'))

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
