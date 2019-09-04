import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Icon from '@pluralsight/ps-design-system-icon/react'

import Button from '../index.js'

describe('Button', () => {
  it('forwards refs', () => {
    const ref = React.createRef()
    render(<Button ref={ref}>with ref</Button>)

    expect(ref.current).not.toBeNull()
  })

  describe('when disabled', () => {
    const handleClick = jest.fn()
    let container

    beforeEach(() => {
      ;({ container } = render(
        <Button
          disabled
          onClick={handleClick}
          icon={<Icon id={Icon.ids.check} data-testid="icon" />}
        >
          Can't Be Clicked
        </Button>
      ))
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
