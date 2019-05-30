import React from 'react'

import { fireEvent, render } from 'react-testing-library'
import SearchInput from '../index.js'

describe('SearchInput', () => {
  it('ignores the label prop', async () => {
    const { container } = render(<SearchInput label="unsupported" />)
    expect(container).not.toHaveTextContent(/unsupported/)
  })

  it('ignores the subLabel prop', async () => {
    const { container } = render(<SearchInput subLabel="unsupported" />)
    expect(container).not.toHaveTextContent(/unsupported/)
  })

  it('focuses input when clear button clicked', () => {
    const noop = () => {}
    const { container } = render(<SearchInput onClear={noop} />)
    const input = container.querySelector('input')
    const clearBtn = container.querySelector('button')

    fireEvent.click(clearBtn)
    expect(input).toHaveFocus()
  })
})
