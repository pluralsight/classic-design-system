import { debounce } from '..'

describe('#debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('debounces the fn', () => {
    const fn = jest.fn()

    const debounced = debounce(100, fn)
    debounced()

    expect(fn).not.toHaveBeenCalled()
    jest.advanceTimersByTime(50)

    expect(fn).not.toHaveBeenCalled()
    jest.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalled()
    expect(fn.mock.calls.length).toBe(1)
  })
})
