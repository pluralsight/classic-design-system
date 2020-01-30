import { render } from '@testing-library/react'
import React from 'react'

import DataWell from '../index.js'

describe('DataWell', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <DataWell data-testid="undertest" label="Dog count">
        234,345
      </DataWell>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(
      <DataWell ref={ref} label="Dog count">
        234,345
      </DataWell>
    )

    expect(ref.current).not.toBeNull()
  })
})
