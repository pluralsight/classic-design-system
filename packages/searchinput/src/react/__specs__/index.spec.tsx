import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import SearchInput from '..'

describe('SearchInput', () => {
  it('focuses input when clear button clicked', () => {
    const noop = () => {}
    const { container } = render(<SearchInput onClear={noop} />)
    const input = container.querySelector('input')
    const clearBtn = container.querySelector('button')

    fireEvent.click(clearBtn)
    expect(input).toHaveFocus()
  })

  it('clears input when clear button clicked', () => {
    const noop = () => {}

    const { container } = render(<SearchInput onClear={noop} />)
    const input = container.querySelector('input')

    input.value = 'Kindergarten'
    const clearBtn = container.querySelector('button')

    fireEvent.click(clearBtn)

    expect(input.value).toEqual('')
  })
})
