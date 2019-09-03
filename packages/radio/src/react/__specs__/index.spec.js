import React from 'react'
import { render } from '@testing-library/react'

import Radio from '../index.js'

describe('Radio', () => {
  it('forwards refs', () => {
    const group = React.createRef()
    const button = React.createRef()

    render(
      <Radio.Group ref={group}>
        <Radio.Button value="red" label="Red" />
        <Radio.Button ref={button} value="green" label="Green" />
        <Radio.Button value="blue" label="Blue" />
      </Radio.Group>
    )

    expect(group.current).not.toBeNull()
    expect(button.current).not.toBeNull()
  })
})
