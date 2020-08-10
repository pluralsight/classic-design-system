import { render } from '@testing-library/react'
import React from 'react'

import AppFrame from '../index.js'

describe('AppFrame', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <AppFrame data-testid="undertest" topnav={<div>topnav</div>}>
        hello world
      </AppFrame>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(
      <AppFrame data-testid="undertest" ref={ref} topnav={<div>topnav</div>}>
        hello world
      </AppFrame>
    )

    expect(ref.current).not.toBeNull()
  })
})
