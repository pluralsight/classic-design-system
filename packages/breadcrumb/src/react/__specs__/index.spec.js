import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Breadcrumb from '../index.js'

describe('Breadcrumb', () => {
  it('forwards refs', () => {
    const ref = React.createRef()
    render(
      <Breadcrumb onClick={jest.fn()} ref={ref}>
        Clicks once
      </Breadcrumb>
    )

    expect(ref.current).not.toBeNull()
  })

  describe('when disabled', () => {
    const handleClick = jest.fn()
    let container, button

    beforeEach(() => {
      ;({ container } = render(
        <Breadcrumb disabled href="" onClick={handleClick}>
          Clicks once
        </Breadcrumb>
      ))
      button = container.querySelector('button')
    })

    afterEach(() => {
      handleClick.mockClear()
    })

    it('does not allow clicks', () => {
      fireEvent.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })
  })
})
