import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Radio from '../index.js'

describe('Radio', () => {
  it('forwards refs', () => {
    const group = React.createRef()
    const button = React.createRef()

    render(
      <Radio.Group ref={group} name="forwards refs">
        <Radio.Button value="red" label="Red" />
        <Radio.Button ref={button} value="green" label="Green" />
        <Radio.Button value="blue" label="Blue" />
      </Radio.Group>
    )

    expect(group.current).not.toBeNull()
    expect(button.current).not.toBeNull()
  })
  it('controlled: fires event once', () => {
    const spy = jest.fn()
    const { container } = render(
      <Radio.Group onChange={spy} value="green" name="fires event once">
        <Radio.Button value="red" label="Red" />
        <Radio.Button value="green" label="Green" />
        <Radio.Button value="blue" label="Blue" />
      </Radio.Group>
    )
    const radio = container.querySelector('input')
    fireEvent.click(radio)
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
