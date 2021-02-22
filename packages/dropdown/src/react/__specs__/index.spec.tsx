/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { fireEvent, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import React from 'react'

import Dropdown from '..'

it('button click opens the menu', () => {
  render(
    <Dropdown
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)

  const menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('disabled click doesnt open menu', () => {
  render(
    <Dropdown
      disabled
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)

  const menu = screen.queryByRole('listbox')
  expect(menu).not.toBeInTheDocument()
})

it('caret down click opens the menu', () => {
  render(
    <Dropdown
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )
  const caretDown = screen.getByRole('img', { name: 'caret down icon' })
  userEvent.click(caretDown)

  const menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('opens the menu with space key', () => {
  render(
    <Dropdown
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )

  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  spaceKey()

  const menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('opens the menu with enter key', () => {
  render(
    <Dropdown
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )

  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  enterKey()

  const menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('opens the menu with down arrow', () => {
  render(
    <Dropdown
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )

  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  arrowDownKey()

  const menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('closes the menu with escape', () => {
  render(
    <Dropdown
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )

  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  arrowDownKey()

  let menu
  menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()

  escapeKey()
  menu = screen.queryByRole('listbox')
  expect(menu).not.toBeInTheDocument()
})

it('selects by click', () => {
  render(
    <Dropdown
      placeholder="Select"
      value="w"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )
  const button = screen.getByRole('button', { name: /Two/ })
  userEvent.click(button)

  const item = screen.getByRole('option', { name: /Three/ })
  userEvent.click(item)

  expect(button).toHaveTextContent('Three')
})

it('selects a value of 0', () => {
  render(
    <Dropdown
      placeholder="Select"
      value={1}
      menu={[
        <Dropdown.Item key="1" value={0}>
          Zero
        </Dropdown.Item>,
        <Dropdown.Item key="2" value={1}>
          One
        </Dropdown.Item>,
        <Dropdown.Item key="3" value={2}>
          Two
        </Dropdown.Item>
      ]}
    />
  )
  const button = screen.getByRole('button', { name: /One/ })
  userEvent.click(button)

  const item = screen.getByRole('option', { name: /Zero/ })
  userEvent.click(item)

  expect(button).toHaveTextContent('Zero')
})

it('navigates by arrows, selects by enter', () => {
  render(
    <Dropdown
      placeholder="Select"
      value="w"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )
  const button = screen.getByRole('button', { name: /Two/ })
  button.focus()
  enterKey()

  arrowDownKey()
  arrowUpKey()
  arrowUpKey()
  enterKey()

  expect(button).toHaveTextContent('One')
})

it('navigates value-less items by arrows/enter', () => {
  render(
    <Dropdown
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1">One</Dropdown.Item>,
        <Dropdown.Item key="2">Two</Dropdown.Item>,
        <Dropdown.Item key="3">Three</Dropdown.Item>
      ]}
    />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  enterKey()

  arrowDownKey()
  enterKey()

  expect(button).toHaveTextContent('Two')
})

it('re-navigates, active index is maintained on selection', () => {
  render(
    <Dropdown
      placeholder="Select"
      value="w"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  )
  const button = screen.getByRole('button', { name: /Two/ })
  button.focus()
  enterKey()
  arrowDownKey()
  arrowUpKey()
  arrowUpKey()
  enterKey()

  expect(button).toHaveTextContent('One')

  enterKey()
  arrowDownKey()
  enterKey()

  expect(button).toHaveTextContent('Two')
})

it('label set as value if option has no value', () => {
  render(
    <Dropdown
      placeholder="Select"
      value="Two"
      menu={[
        <Dropdown.Item key="1">One</Dropdown.Item>,
        <Dropdown.Item key="2">Two</Dropdown.Item>,
        <Dropdown.Item key="3">Three</Dropdown.Item>
      ]}
    />
  )
  const button = screen.getByRole('button', { name: /Two/ })
  userEvent.click(button)

  const item = screen.getByRole('option', { name: /Three/ })
  userEvent.click(item)

  expect(button).toHaveTextContent('Three')
})

it('item onClick is triggered', () => {
  const onClick = jest.fn()
  render(
    <Dropdown
      placeholder="Select"
      menu={
        <>
          <Dropdown.Item onClick={onClick}>One</Dropdown.Item>
        </>
      }
    />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)

  const item = screen.getByRole('option', { name: /One/ })
  userEvent.click(item)

  expect(onClick).toHaveBeenCalledWith(expect.any(Object), 'One')
})

it('calls on change with click on label text', () => {
  const onChange = jest.fn()
  render(
    <Dropdown
      placeholder="Select"
      onChange={onChange}
      menu={
        <>
          <Dropdown.Item>One</Dropdown.Item>
          <Dropdown.Item>Two</Dropdown.Item>
          <Dropdown.Item>Three</Dropdown.Item>
        </>
      }
    />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)

  const item = screen.getByRole('option', { name: /Three/ })
  userEvent.click(item)

  expect(onChange).toHaveBeenCalledWith(expect.any(Object), 'Three')
})

it('calls on change with keydown on value', () => {
  const onChange = jest.fn()
  render(
    <Dropdown
      placeholder="Select"
      onChange={onChange}
      menu={
        <>
          <Dropdown.Item value="o">One</Dropdown.Item>
          <Dropdown.Item value="w">Two</Dropdown.Item>
          <Dropdown.Item value="h">Three</Dropdown.Item>
        </>
      }
    />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  enterKey()
  arrowDownKey()
  enterKey()

  expect(onChange).toHaveBeenCalledWith(expect.any(Object), 'w')
})

function enterKey() {
  fireEvent.keyDown(document.activeElement!, {
    key: 'Enter',
    code: 'Enter'
  })
}

function spaceKey() {
  fireEvent.keyDown(document.activeElement!, { key: ' ', code: 'Space' })
}

function arrowDownKey() {
  fireEvent.keyDown(document.activeElement!, {
    key: 'ArrowDown',
    code: 'ArrowDown'
  })
}

function arrowUpKey() {
  fireEvent.keyDown(document.activeElement!, {
    key: 'ArrowUp',
    code: 'ArrowUp'
  })
}

function escapeKey() {
  fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
}
