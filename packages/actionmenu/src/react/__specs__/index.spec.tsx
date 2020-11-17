import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import ActionMenu from '..'

describe('ActionMenu', () => {
  it('forwards ref', () => {
    const refToForward = React.createRef<HTMLUListElement>()

    const { getByTestId } = render(
      <ActionMenu data-testid="undertest" ref={refToForward}>
        <ActionMenu.Item>One item</ActionMenu.Item>
      </ActionMenu>
    )

    const el = getByTestId('undertest')
    expect(el).toBe(refToForward.current)
  })

  it('fires onClick on option click', () => {
    const handleClick = jest.fn()

    const { getByTestId } = render(
      <ActionMenu>
        <ActionMenu.Item value="one" onClick={handleClick}>
          One item
        </ActionMenu.Item>

        <ActionMenu.Item
          value="two"
          data-testid="undertest"
          onClick={handleClick}
        >
          Two item
        </ActionMenu.Item>

        <ActionMenu.Item value="three" onClick={handleClick}>
          Three item
        </ActionMenu.Item>
      </ActionMenu>
    )

    const opt = getByTestId('undertest')
    fireEvent.click(opt)

    expect(handleClick).toHaveBeenCalledWith(expect.anything(), 'two')
  })

  it('fires onClick on option keyDown', () => {
    const handleClick = jest.fn()

    const { getByTestId } = render(
      <ActionMenu>
        <ActionMenu.Item value="one" onClick={handleClick}>
          One item
        </ActionMenu.Item>

        <ActionMenu.Item
          value="two"
          data-testid="undertest"
          onClick={handleClick}
        >
          Two item
        </ActionMenu.Item>

        <ActionMenu.Item value="three" onClick={handleClick}>
          Three item
        </ActionMenu.Item>
      </ActionMenu>
    )

    const opt = getByTestId('undertest')
    fireEvent.keyDown(opt, { key: 'Enter', code: 13 })

    expect(handleClick).toHaveBeenCalledWith(expect.anything(), 'two')
  })

  describe('ActionMenu.Item', () => {
    it('should render an anchor by default', () => {
      const ref = React.createRef<HTMLLIElement>()

      const { getByTestId } = render(
        <ActionMenu>
          <ActionMenu.Item data-testid="undertest" ref={ref}>
            test
          </ActionMenu.Item>
        </ActionMenu>
      )
      const el = getByTestId('undertest')

      expect(el.tagName.toLowerCase()).toEqual('a')
      expect(ref.current).not.toBeNull()
    })

    it('should render a button when `tagName` is `button`', () => {
      const ref = React.createRef<HTMLLIElement>()

      const { getByTestId } = render(
        <ActionMenu>
          <ActionMenu.Item data-testid="undertest" ref={ref} tagName="button">
            test
          </ActionMenu.Item>
        </ActionMenu>
      )
      const el = getByTestId('undertest')

      expect(el.tagName.toLowerCase()).toEqual('button')
      expect(ref.current).not.toBeNull()
    })

    it('should render a hyperlink when `tagName` is `a`', () => {
      const ref = React.createRef<HTMLLIElement>()

      const { getByTestId } = render(
        <ActionMenu>
          <ActionMenu.Item
            data-testid="undertest"
            href="/"
            ref={ref}
            tagName="a"
          >
            test
          </ActionMenu.Item>
        </ActionMenu>
      )
      const el = getByTestId('undertest')

      expect(el.tagName.toLowerCase()).toEqual('a')
      expect(ref.current).not.toBeNull()
    })
  })
})
