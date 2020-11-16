import { render } from '@testing-library/react'
import React from 'react'

import NavCookieBanner from '..'

describe('NavCookieBanner', () => {
  it('renders', () => {
    const { getByTestId } = render(<NavCookieBanner data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<NavCookieBanner ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
