import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { fireEvent, screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import React from 'react'

import Dropdown from '..'

import * as stories from '../__stories__/index.story'

const pressArrowDown = (el = document?.activeElement) => {
  fireEvent.keyDown(el as HTMLElement, { key: 'ArrowDown', code: 'ArrowDown' })
}
const pressArrowUp = (el = document?.activeElement) => {
  fireEvent.keyDown(el as HTMLElement, { key: 'ArrowUp', code: 'ArrowUp' })
}
const pressEnter = (el = document?.activeElement) => {
  fireEvent.keyDown(el as HTMLElement, { key: 'Enter', code: 'Enter' })
}
const pressEscape = (el = document?.activeElement) => {
  fireEvent.keyDown(el as HTMLElement, { key: 'Escape', code: 'Escape' })
}
const pressSpace = (el = document?.activeElement) => {
  fireEvent.keyDown(el as HTMLElement, { key: ' ', code: 'Space' })
}

describe('Dropdown', () => {
  const cases = convertStoriesToJestCases(stories)

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Dropdown ref={ref} />)
    expect(ref).not.toBeNull()
  })

  describe.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })

  describe('Basic story', () => {
    const { Basic } = stories

    it.todo('button is targettable by accessible label')

    it('button click opens the menu', () => {
      // NOTE: placeholder is not recommend for a11y label
      render(<Basic {...Basic.args} placeholder="Select" />)

      const button = screen.getByRole('button', { name: /Select/ })
      userEvent.click(button)

      const menu = screen.getByRole('listbox')
      expect(menu).toBeInTheDocument()
    })

    it('caret down click opens the menu', () => {
      render(<Basic {...Basic.args} />)

      // TODO: caret down icon isn't a great a11y label
      //       we should come up with a better one
      const caretDown = screen.getByRole('img', { name: 'caret down icon' })
      userEvent.click(caretDown)

      const menu = screen.getByRole('listbox')
      expect(menu).toBeInTheDocument()
    })

    it('items are selectable by mouse click', () => {
      // NOTE: placeholder is not recommend for a11y label
      render(<Basic {...Basic.args} placeholder="Select" />)

      const button = screen.getByRole('button', { name: /Select/ })
      userEvent.click(button)

      const item = screen.getByRole('option', { name: /Item 2/ })
      userEvent.click(item)

      expect(button).toHaveTextContent('Item 2')
    })

    it('items are navigable by keyboard', () => {
      // NOTE: placeholder is not recommend for a11y label
      render(<Basic {...Basic.args} placeholder="Select" />)

      const btn = screen.getByRole('button', { name: /Select/ })
      btn.focus()
      pressEnter()

      pressArrowDown()
      pressArrowDown()
      pressArrowUp()
      pressEnter()

      expect(btn).toHaveTextContent('Item 2')

      pressEnter()

      pressArrowUp()
      pressArrowDown()
      pressArrowDown()
      pressEnter()

      expect(btn).toHaveTextContent('Item 3')
    })

    it('calls onChange when an item is clicked', () => {
      const onChange = jest.fn()

      // NOTE: placeholder is not recommend for a11y label
      render(<Basic {...Basic.args} onChange={onChange} placeholder="Select" />)

      const button = screen.getByRole('button', { name: /Select/ })
      userEvent.click(button)

      const item = screen.getByRole('option', { name: /Item 1/ })
      userEvent.click(item)

      expect(onChange).toHaveBeenCalledWith(expect.anything(), 1)
    })

    it('calls onChange when an item is selected by keyboard', () => {
      const onChange = jest.fn()

      // NOTE: placeholder is not recommend for a11y label
      render(<Basic {...Basic.args} onChange={onChange} placeholder="Select" />)

      const btn = screen.getByRole('button', { name: /Select/ })
      btn.focus()
      pressEnter()

      pressArrowDown()
      pressArrowDown()
      pressEnter()

      expect(onChange).toHaveBeenCalledWith(expect.anything(), 3)
    })

    it('calls Item#onClick when an item is clicked', () => {
      const onClick = jest.fn()

      // NOTE: placeholder is not recommend for a11y label
      render(
        <Basic
          {...Basic.args}
          menu={
            <>
              <Dropdown.Item onClick={onClick}>Avoid Me</Dropdown.Item>
              <Dropdown.Item onClick={onClick}>Undertest</Dropdown.Item>
            </>
          }
          placeholder="Select"
        />
      )

      const button = screen.getByRole('button', { name: /Select/ })
      userEvent.click(button)

      const item = screen.getByRole('option', { name: /Undertest/ })
      userEvent.click(item)

      expect(onClick).toHaveBeenCalledWith(expect.anything(), 'Undertest')
    })

    describe('when button is focused', () => {
      beforeEach(() => {
        // NOTE: placeholder is not recommend for a11y label
        render(<Basic {...Basic.args} placeholder="Select" />)

        const btn = screen.getByRole('button', { name: /Select/ })
        btn.focus()
      })

      it('space key opens the menu', () => {
        pressSpace()

        const menu = screen.getByRole('listbox')
        expect(menu).toBeInTheDocument()
      })

      it('pressing enter key on focused button opens the menu', () => {
        pressEnter()

        const menu = screen.getByRole('listbox')
        expect(menu).toBeInTheDocument()
      })

      it('pressing downArrow on focused button opens the menu', () => {
        pressArrowDown()

        const menu = screen.getByRole('listbox')
        expect(menu).toBeInTheDocument()
      })
    })

    describe('when menu is open', () => {
      beforeEach(() => {
        // NOTE: placeholder is not recommend for a11y label
        render(<Basic {...Basic.args} placeholder="Select" />)

        const btn = screen.getByRole('button', { name: /Select/ })
        btn.focus()
        pressArrowDown()
      })

      it('esc key closes the menu', () => {
        let menu: HTMLElement | null = screen.getByRole('listbox')
        expect(menu).toBeInTheDocument()

        pressEscape()

        menu = screen.queryByRole('listbox')
        expect(menu).not.toBeInTheDocument()
      })
    })
  })

  describe('Disabled story', () => {
    const { Disabled } = stories

    it('button click does NOT open the menu', () => {
      // NOTE: placeholder is not a recommend a11y label
      render(<Disabled {...Disabled.args} placeholder="Select" />)

      const button = screen.getByRole('button', { name: /Select/ })
      userEvent.click(button)

      const menu = screen.queryByRole('listbox')
      expect(menu).not.toBeInTheDocument()
    })
  })

  describe('SubLabelOnly story', () => {
    const { SubLabelOnly } = stories

    it('button is targettable by accessible aria-label', () => {
      render(<SubLabelOnly {...SubLabelOnly.args} aria-label="choose me" />)

      const btn = screen.getByRole('button', { name: /choose me/ })
      expect(btn).toBeInTheDocument()
    })
  })

  describe('NoLabels story', () => {
    const { NoLabels } = stories

    it('button is targettable by accessible aria-label', () => {
      render(<NoLabels {...NoLabels.args} aria-label="choose me" />)

      const btn = screen.getByRole('button', { name: /choose me/ })
      expect(btn).toBeInTheDocument()
    })
  })
})
