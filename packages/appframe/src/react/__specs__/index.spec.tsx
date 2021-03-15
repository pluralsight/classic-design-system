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
    const ref = React.createRef<HTMLDivElement>()

    render(
      <AppFrame data-testid="undertest" ref={ref} topnav={<div>topnav</div>}>
        hello world
      </AppFrame>
    )

    expect(ref.current).not.toBeNull()
  })

  it('renders the sidenav with a function render prop', () => {
    const sidenav = () => <div data-testid="undertest">sidenav</div>

    const { getByTestId } = render(
      <AppFrame topnav={sidenav}>hello world</AppFrame>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('renders the topnav with a function render prop', () => {
    const topnav = () => <div data-testid="undertest">topnav</div>

    const { getByTestId } = render(
      <AppFrame topnav={topnav}>hello world</AppFrame>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })
})
