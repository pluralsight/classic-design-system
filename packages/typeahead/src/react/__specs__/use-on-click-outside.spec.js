import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import PropTypes from 'prop-types'

import useOnClickOutside from '../use-on-click-outside'

describe('useOnClickOutside', () => {
  const MockComponent = ({ onClickOutside, ...rest }) => {
    const ref = React.useRef()
    useOnClickOutside(ref, onClickOutside)

    return <div {...rest} ref={ref} />
  }
  MockComponent.propTypes = {
    onClickOutside: PropTypes.func.isRequired
  }

  describe('with a mouseDown inside the element', () => {
    it('does NOT call the handler', () => {
      const spy = jest.fn()

      const { getByTestId } = render(
        <div data-testid="outside">
          <MockComponent onClickOutside={spy}>
            <div data-testid="inside" />
          </MockComponent>
        </div>
      )

      fireEvent.mouseDown(getByTestId('inside'))

      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('with a mouseDown outside the element', () => {
    it('does call the handler', () => {
      const spy = jest.fn()

      const { getByTestId } = render(
        <div data-testid="outside">
          <MockComponent onClickOutside={spy}>
            <div data-testid="inside" />
          </MockComponent>
        </div>
      )

      fireEvent.mouseDown(getByTestId('outside'))

      expect(spy).toHaveBeenCalled()
    })
  })
})
