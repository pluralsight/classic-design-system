import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import ActionMenu from '../index.js'

describe('ActionMenu', () => {
  it('forwards ref', () => {
    const refToForward = React.createRef()

    const { getByTestId } = render(
      <ActionMenu data-testid="under-test" ref={refToForward}>
        <ActionMenu.Item>One item</ActionMenu.Item>
      </ActionMenu>
    )

    const el = getByTestId('under-test')
    expect(el).toBe(refToForward.current)
  })

  it('fires onChange on option click', () => {
    return new Promise(resolve => {
      function handleClick(evt) {
        expect(evt.currentTarget.value).toEqual('two')
        resolve()
      }

      const { getByTestId } = render(
        <ActionMenu data-testid="under-test">
          <ActionMenu.Item value="one" onClick={handleClick}>
            One item
          </ActionMenu.Item>
          <ActionMenu.Item
            value="two"
            data-testid="testtwo"
            onClick={handleClick}
          >
            Two item
          </ActionMenu.Item>
          <ActionMenu.Item value="three" onClick={handleClick}>
            Three item
          </ActionMenu.Item>
        </ActionMenu>
      )
      const opt = getByTestId('testtwo')
      fireEvent.click(opt)
    })
  })

  it('fires onChange on option keyPress', () => {
    return new Promise(resolve => {
      function handleClick(evt) {
        expect(evt.currentTarget.value).toEqual('two')
        resolve()
      }

      const { getByTestId } = render(
        <ActionMenu data-testid="under-test">
          <ActionMenu.Item value="one" onClick={handleClick}>
            One item
          </ActionMenu.Item>
          <ActionMenu.Item
            value="two"
            data-testid="testtwo"
            onClick={handleClick}
          >
            Two item
          </ActionMenu.Item>
          <ActionMenu.Item value="three" onClick={handleClick}>
            Three item
          </ActionMenu.Item>
        </ActionMenu>
      )
      const opt = getByTestId('testtwo')
      fireEvent.keyUp(opt, { key: 'Enter', code: 13 })
    })
  })
})
