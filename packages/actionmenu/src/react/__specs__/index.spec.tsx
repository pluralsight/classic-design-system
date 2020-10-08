import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import ActionMenu from '..'

describe('ActionMenu', () => {
  it('forwards ref', () => {
    const refToForward = React.createRef<HTMLUListElement>()

    const { getByTestId } = render(
      <ActionMenu data-testid="under-test" ref={refToForward}>
        <ActionMenu.Item>One item</ActionMenu.Item>
      </ActionMenu>
    )

    const el = getByTestId('under-test')
    expect(el).toBe(refToForward.current)
  })

  it('fires onClick on option click', () => {
    return new Promise(resolve => {
      const handleClick = (_evt: React.MouseEvent, value: React.ReactText) => {
        expect(value).toEqual('two')
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

  it('fires onClick on option keyDown', () => {
    return new Promise(resolve => {
      const handleClick = (_evt: unknown, value: unknown) => {
        expect(value).toEqual('two')
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
      fireEvent.keyDown(opt, { key: 'Enter', code: 13 })
    })
  })
})
