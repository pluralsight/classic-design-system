import { render } from '@testing-library/react'
import React from 'react'

import TextInput from '..'

describe('TextInput', () => {
  it('renders', () => {
    const { getByTestId } = render(<TextInput data-testid="undertest" />)
    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  describe('with a single ref', () => {
    it('forwards a single ref to the input element', () => {
      const ref = React.createRef<HTMLInputElement>()

      const { container } = render(<TextInput ref={ref} />)
      const inputEl = container.querySelector('input') as HTMLInputElement

      expect(ref.current).not.toBeNull()
      expect(inputEl).toEqual(ref.current)
    })
  })

  describe('with multiple refs', () => {
    it('forwards the input ref to the input element', () => {
      const inputRef = React.createRef<HTMLInputElement>()

      const { container } = render(<TextInput ref={inputRef} />)

      const inputEl = container.querySelector('input') as HTMLInputElement
      expect(inputEl).toEqual(inputRef.current)
    })
  })
})
