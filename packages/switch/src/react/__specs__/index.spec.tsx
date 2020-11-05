import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Switch from '..'

describe('Switch', () => {
  it('forwards refs', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Switch ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  it('clicking the label calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const label = container.querySelector('label') as HTMLLabelElement
    fireEvent.click(label)

    expect(handleClick).toHaveBeenCalled()
  })

  it('clicking the input calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const input = container.querySelector('input') as HTMLInputElement
    fireEvent.click(input)

    expect(handleClick).toHaveBeenCalled()
  })

  it('clicking the span calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const span = container.querySelector('span') as HTMLSpanElement
    fireEvent.click(span)

    expect(handleClick).toHaveBeenCalled()
  })
})
