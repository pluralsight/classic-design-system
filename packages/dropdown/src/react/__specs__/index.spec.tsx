import { fireEvent, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import React from 'react'

import Dropdown from '..'

it('has an input queryable by label', () => {
  render(
    <Dropdown
      label="Level"
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
      value="w"
    />
  )
  const input = screen.getByLabelText('Level')
  expect(input).toHaveValue('w')
})

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
  const button = screen.getByRole('button', { name: 'Select' })
  userEvent.click(button)

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

  const button = screen.getByRole('button', { name: 'Select' })
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

  const button = screen.getByRole('button', { name: 'Select' })
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

  const button = screen.getByRole('button', { name: 'Select' })
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

  const button = screen.getByRole('button', { name: 'Select' })
  button.focus()
  arrowDownKey()

  let menu = screen.getByRole('listbox')
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
  const button = screen.getByRole('button', { name: 'Two' })
  userEvent.click(button)

  const item = screen.getByRole('option', { name: /Three/ })
  userEvent.click(item)

  const input = screen.getByRole('combobox')
  expect(input).toHaveValue('h')
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
  const button = screen.getByRole('button', { name: 'Two' })
  button.focus()
  enterKey()

  arrowDownKey()
  arrowUpKey()
  arrowUpKey()
  enterKey()

  const input = screen.getByRole('combobox')
  expect(input).toHaveValue('o')
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
  const button = screen.getByRole('button', { name: 'Select' })
  button.focus()
  enterKey()

  arrowDownKey()
  enterKey()

  const input = screen.getByRole('combobox')
  expect(input).toHaveValue('Two')
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
  const button = screen.getByRole('button', { name: 'Two' })
  button.focus()
  enterKey()
  arrowDownKey()
  arrowUpKey()
  arrowUpKey()
  enterKey()

  let input = screen.getByRole('combobox')
  expect(input).toHaveValue('o')

  enterKey()
  arrowDownKey()
  enterKey()

  input = screen.getByRole('combobox')
  expect(input).toHaveValue('w')
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
  const button = screen.getByRole('button', { name: 'Two' })
  userEvent.click(button)

  const item = screen.getByRole('option', { name: /Three/ })
  userEvent.click(item)

  const input = screen.getByRole('combobox')
  expect(input).toHaveValue('Three')
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
  const button = screen.getByRole('button', { name: 'Select' })
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
  const button = screen.getByRole('button', { name: 'Select' })
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
  const button = screen.getByRole('button', { name: 'Select' })
  button.focus()
  enterKey()
  arrowDownKey()
  enterKey()

  expect(onChange).toHaveBeenCalledWith(expect.any(Object), 'w')
})

function enterKey() {
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })
}

function spaceKey() {
  fireEvent.keyDown(document.activeElement, { key: ' ', code: 'Space' })
}

function arrowDownKey() {
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowDown',
    code: 'ArrowDown'
  })
}

function arrowUpKey() {
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowUp',
    code: 'ArrowUp'
  })
}

function escapeKey() {
  fireEvent.keyDown(document.activeElement, { key: 'Escape', code: 'Escape' })
}
