import { render } from '@testing-library/react'
import React from 'react'

import Frame from '../index.js'

describe('Frame', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Frame data-testid="undertest" topnav={<div>topnav</div>}>
        hello world
      </Frame>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(
      <Frame data-testid="undertest" ref={ref} topnav={<div>topnav</div>}>
        hello world
      </Frame>
    )

    expect(ref.current).not.toBeNull()
  })
})
