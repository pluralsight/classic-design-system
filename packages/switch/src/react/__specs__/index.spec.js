import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Switch from '../index.js'

describe('Switch', () => {
  it('forwards refs', () => {
    const ref = React.createRef()
    render(<Switch ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  it('clicking the button calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const button = container.querySelector('button')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })

  it('clicking the input calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const input = container.querySelector('input')
    fireEvent.click(input)

    expect(handleClick).toHaveBeenCalled()
  })

  it('clicking the label calls the onClick handler', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Switch onClick={handleClick}>Clicks once</Switch>
    )

    const label = container.querySelector('label')
    fireEvent.click(label)

    expect(handleClick).toHaveBeenCalled()
  })
})

// test('onClick calls handler', () => {
//   let callCount = 0
//   const onClick = _ => {
//     callCount += 1
//   }
//   const s = mount(<Switch onClick={onClick}>Clicks once</Switch>)
//   s.simulate('click')
//   expect(callCount).toBe(1)
// })

// test('click not called when disabled', () => {
//   let callCount = 0
//   const onClick = _ => {
//     callCount += 1
//   }
//   const s = mount(
//     <Switch onClick={onClick} disabled>
//       Clicks once
//     </Switch>
//   )
//   s.simulate('click')
//   expect(callCount).toBe(0)
// })
