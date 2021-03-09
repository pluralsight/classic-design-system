/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React, { useState } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import SearchInput from '..'

describe('SearchInput', () => {
  it('focuses input when clear button clicked', () => {
    const noop = () => {}
    render(<SearchInput onClear={noop} />)
    const input = screen.getByRole('searchbox')
    const clearBtn = screen.getByRole('button') as HTMLButtonElement

    fireEvent.click(clearBtn)
    expect(input).toHaveFocus()
  })

  it('clears input when clear button clicked', () => {
    const SearchInputWithState = () => {
      const [value, setValue] = useState('')
      const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value)
      }
      const onClear = () => {
        setValue('')
      }
      return <SearchInput onChange={onChange} onClear={onClear} value={value} />
    }

    render(<SearchInputWithState />)
    const input = screen.getByRole('searchbox') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Kindergarten' } })
    const clearBtn = screen.getByRole('button') as HTMLButtonElement

    fireEvent.click(clearBtn)

    expect(input).toHaveValue('')
  })
})
