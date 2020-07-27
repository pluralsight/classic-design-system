import { render } from '@testing-library/react'
import React from 'react'

import Frame from '../index.js'

describe('Frame', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Frame
        data-testid="undertest"
        topnav={<Frame.Topnav />}
        sidenav={<Frame.Sidenav />}
      >
        <Frame.Main />
      </Frame>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    const mainRef = React.createRef()
    const sidenavRef = React.createRef()
    const topnavRef = React.createRef()

    render(
      <Frame
        data-testid="undertest"
        ref={ref}
        topnav={<Frame.Topnav ref={topnavRef} />}
        sidenav={<Frame.Sidenav ref={sidenavRef} />}
      >
        <Frame.Main ref={mainRef} />
      </Frame>
    )

    expect(ref.current).not.toBeNull()
    expect(mainRef.current).not.toBeNull()
    expect(sidenavRef.current).not.toBeNull()
    expect(topnavRef.current).not.toBeNull()
  })
})
