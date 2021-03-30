/* eslint-disable  @typescript-eslint/no-unnecessary-type-assertion */
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Switch from '../index'

describe('Switch', () => {
  it('forwards refs', () => {
    const ref = React.createRef<HTMLLabelElement>()
    render(<Switch ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  it('clicking the label calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const label = container.querySelector('label')
    fireEvent.click(label as HTMLLabelElement)

    expect(handleClick).toHaveBeenCalled()
  })

  it('clicking the input calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const input = container.querySelector('input')
    fireEvent.click(input as HTMLInputElement)

    expect(handleClick).toHaveBeenCalled()
  })

  it('clicking the span calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const span = container.querySelector('span')
    fireEvent.click(span as HTMLSpanElement)

    expect(handleClick).toHaveBeenCalled()
  })
})
