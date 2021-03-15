import { render } from '@testing-library/react'
import React from 'react'

import Banner from '../index.js'

describe('Banner', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Banner data-testid="undertest">text</Banner>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()
    const buttonRef = React.createRef<HTMLButtonElement>()

    render(
      <Banner ref={ref}>
        text <Banner.Button ref={buttonRef}>button</Banner.Button>
      </Banner>
    )

    expect(ref.current).not.toBeNull()
    expect(buttonRef.current).not.toBeNull()
  })
})
