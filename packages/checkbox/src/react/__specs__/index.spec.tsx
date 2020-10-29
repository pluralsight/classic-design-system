import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Checkbox from '..'

describe('Checkbox', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Checkbox
        label="test label"
        value="test value"
        data-testid="mock-component"
      />
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLInputElement>()

    render(<Checkbox label="test label" value="test value" ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  it('is accessible by role', () => {
    const { getAllByRole, getByRole } = render(
      <>
        <Checkbox label="First" name="first" value="first" />
        <Checkbox label="Second" name="second" value="second" />
      </>
    )

    expect(getByRole('checkbox', { name: /first/i })).toBeInTheDocument()
    expect(getByRole('checkbox', { name: /second/i })).toBeInTheDocument()

    expect(getAllByRole('checkbox')).toHaveLength(2)
  })

  it('should render an unchecked checkbox by default', () => {
    const { getByRole } = render(<Checkbox />)

    expect(getByRole('checkbox')).toHaveProperty('checked', false)
  })

  it('should render a checked checkbox when prop `checked={true}`', () => {
    const { getByRole } = render(<Checkbox checked />)
    expect(getByRole('checkbox')).toHaveProperty('checked', true)
  })

  it('should render a indeterminate checkbox when prop `indeterminate={true}`', () => {
    const { getByRole } = render(<Checkbox indeterminate />)
    const input = getByRole('checkbox') as HTMLInputElement

    expect(input.indeterminate).toBeTruthy()
  })

  it('should call `onCheck` with new `checked` state when clicked', () => {
    const checked = true
    const name = 'the-name'
    const onCheck = jest.fn()
    const value = 'the-value'

    const { getByRole } = render(
      <Checkbox checked={checked} name={name} onCheck={onCheck} value={value} />
    )
    const input = getByRole('checkbox')
    fireEvent.click(input, { button: 1 })

    expect(onCheck).toHaveBeenCalledWith(
      expect.anything(),
      !checked,
      value,
      name
    )
  })

  describe('when props `disabled={true}`', () => {
    it('should be disabled', () => {
      const { getByRole } = render(<Checkbox disabled />)
      expect(getByRole('checkbox')).toHaveProperty('disabled', true)
    })

    it('should NOT call `onCheck` when clicked', () => {
      const onCheck = jest.fn()

      const { getByRole } = render(<Checkbox disabled onCheck={onCheck} />)
      const input = getByRole('checkbox')
      fireEvent.click(input, { button: 1 })

      expect(onCheck).not.toHaveBeenCalled()
    })
  })
})
