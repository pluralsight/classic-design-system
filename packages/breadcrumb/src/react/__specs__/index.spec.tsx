import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Breadcrumb from '../index.js'

describe('Breadcrumb', () => {
  it('forwards refs', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(
      <Breadcrumb onClick={jest.fn()} ref={ref}>
        Clicks once
      </Breadcrumb>
    )

    expect(ref.current).not.toBeNull()
  })

  describe('when disabled', () => {
    it('does not allow clicks', () => {
      const handleClick = jest.fn()
      const { container } = render(
        <Breadcrumb disabled onClick={handleClick}>
          Clicks once
        </Breadcrumb>
      )
      const button = container.querySelector('button')

      fireEvent.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })
  })
})
