import React from 'react'
import { render } from 'react-testing-library'
import ResizeObserver from '../resize-observer'

jest.mock('resize-observer-polyfill')

describe('ResizeObserver', () => {
  let props, ref, wrapper

  it('exists', () => expect(ResizeObserver).toBeTruthy())

  beforeEach(() => {
    ref = React.createRef()
    props = { children: jest.fn(), ref }
    wrapper = render(<ResizeObserver {...props} />)
  })

  it('creates an observer', () => {
    expect(ref.current.observer).toBeTruthy()
  })

  it('enables the observer on mount', () => {
    const { observer } = ref.current
    expect(observer.observe).toHaveBeenCalled()
  })

  it('disables the observer on unmount', () => {
    const { observer } = ref.current

    expect(observer.unobserve).not.toHaveBeenCalled()

    wrapper.unmount()

    expect(observer.unobserve).toHaveBeenCalled()
  })

  it('calls the render props', () => {
    expect(props.children).toHaveBeenCalled()
  })
})
