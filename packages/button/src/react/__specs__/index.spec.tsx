import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Button from '../index.js'

describe('Button', () => {
  it('should render a button', () => {
    const { getByTestId } = render(
      <Button data-testid="undertest" type="submit">
        test
      </Button>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('button')
  })

  it('should render a hyperlink when an `href` is present', () => {
    const { getByTestId } = render(
      <Button data-testid="undertest" href="/">
        test
      </Button>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('a')
  })

  it('renders a name attribute onto button', () => {
    const { getByTestId } = render(
      <Button data-testid="undertest" name="someVal">
        test
      </Button>
    )
    const el = getByTestId('undertest')

    expect(el.getAttribute('name')).toEqual('someVal')
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>with ref</Button>)
    expect(ref.current).not.toBeNull()
  })

  describe('when disabled', () => {
    const handleClick = jest.fn()
    let container: HTMLElement

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
