import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { CheckIcon } from '@pluralsight/ps-design-system-icon'

import Button from '..'

describe('Button', () => {
  it('forwards refs', () => {
    const ref = React.createRef<HTMLAnchorElement | HTMLButtonElement>()
    render(<Button ref={ref}>with ref</Button>)

    expect(ref.current).not.toBeNull()
  })

  describe('when disabled', () => {
    const handleClick = jest.fn()
    let container

    beforeEach(() => {
      const { container: _container } = render(
        <Button
          disabled
          onClick={handleClick}
          icon={<CheckIcon data-testid="icon" />}
        >
          Can't Be Clicked
        </Button>
      )

      container = _container
    })

    afterEach(() => {
      handleClick.mockClear()
    })

    it('does not allow clicks on the button', () => {
      const button = container.querySelector('button')

      fireEvent.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })

    it('does not allow clicks on the icon', () => {
      const icon = container.querySelector('[data-testid="icon"]')

      fireEvent.click(icon)

      expect(handleClick).not.toHaveBeenCalled()
    })
  })
})
