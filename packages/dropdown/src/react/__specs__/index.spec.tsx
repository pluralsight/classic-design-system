import { waitFor, fireEvent, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import React from 'react'

import Dropdown from '..'

it('has an input queryable by label', async () => {
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
  const input = await screen.findByLabelText('Level')
  expect(input).toHaveValue('w')
})

it('button click opens the menu', async () => {
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
  const button = await screen.findByRole('button', { name: 'Select' })
  userEvent.click(button)

  const menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('opens the menu with space key', async () => {
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
  fireEvent.keyDown(button, { key: ' ', code: 'Space' })

  const menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('opens the menu with enter key', async () => {
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
  fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' })

  const menu = await waitFor(() => screen.getByRole('listbox'))
  expect(menu).toBeInTheDocument()
})

it('opens the menu with down arrow', async () => {
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
  fireEvent.keyDown(button, { key: 'ArrowDown', code: 'ArrowDown' })

  const menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('closes the menu with escape', async () => {
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
  fireEvent.keyDown(button, { key: 'ArrowDown', code: 'ArrowDown' })

  let menu = screen.getByRole('listbox')
  expect(menu).toBeInTheDocument()

  fireEvent.keyDown(document.activeElement, { key: 'Escape', code: 'Escape' })
  menu = screen.queryByRole('listbox')
  expect(menu).not.toBeInTheDocument()
})

it('selects by click', async () => {
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

  const input = await screen.findByRole('combobox')
  expect(input).toHaveValue('h')
})

it('navigates by arrows, selects by enter', async () => {
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
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })

  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowDown',
    code: 'ArrowDown'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowUp',
    code: 'ArrowUp'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowUp',
    code: 'ArrowUp'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })

  const input = await screen.findByRole('combobox')
  expect(input).toHaveValue('o')
})

it('navigates value-less items by arrows/enter', async () => {
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
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })

  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowDown',
    code: 'ArrowDown'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })

  const input = await screen.findByRole('combobox')
  expect(input).toHaveValue('Two')
})

it('re-navigates, active index is maintained on selection', async () => {
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
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })

  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowDown',
    code: 'ArrowDown'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowUp',
    code: 'ArrowUp'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowUp',
    code: 'ArrowUp'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })

  let input = screen.getByRole('combobox')
  expect(input).toHaveValue('o')

  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowDown',
    code: 'ArrowDown'
  })
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter'
  })

  input = screen.getByRole('combobox')
  expect(input).toHaveValue('w')
})

it('label set as value if option has no value', async () => {
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

  const input = await screen.findByRole('combobox')
  expect(input).toHaveValue('Three')
})

it('item onClick is triggered', async () => {
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

it.todo('calls onchange')
