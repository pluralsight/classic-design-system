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
    jest.runTimersToTime(50)

    expect(fn).not.toHaveBeenCalled()
    jest.runTimersToTime(100)

    expect(fn).toHaveBeenCalled()
    expect(fn.mock.calls.length).toBe(1)
  })
})
