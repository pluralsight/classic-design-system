/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { fireEvent, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import React from 'react'

import { DrodpdownLeft, items } from '../__stories__/index.story'

it('button click opens the menu', async () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} />)
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)
  const menu = await screen.findByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('disabled click doesnt open menu', () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} disabled />)
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)
  const menu = screen.queryByRole('listbox')
  expect(menu).not.toBeInTheDocument()
})

it('opens the menu with space key', async () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} />)

  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  spaceKey()

  const menu = await screen.findByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('opens the menu with enter key', async () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} />)

  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  enterKey()

  const menu = await screen.findByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('opens the menu with down arrow', async () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} />)

  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  arrowDownKey()

  const menu = await screen.findByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('closes the menu with escape', async () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} />)

  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  arrowDownKey()

  let menu
  menu = await screen.findByRole('listbox')
  expect(menu).toBeInTheDocument()

  escapeKey()
  menu = screen.queryByRole('listbox')
  expect(menu).not.toBeInTheDocument()
})

it('selects by click', async () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} />)
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)

  const item = await screen.findByRole('option', { name: /Two item/ })
  userEvent.click(item)

  expect(button).toHaveTextContent('Two item')
})

it('navigates by arrows, selects by enter', async () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} />)
  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  enterKey()
  await screen.findByRole('listbox')
  arrowDownKey()
  arrowUpKey()
  arrowUpKey()
  enterKey()

  expect(button).toHaveTextContent('Three item')
})

it('re-navigates, active index is maintained on selection', async () => {
  render(<DrodpdownLeft options={items} placeholder={'Select'} />)
  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  enterKey()
  await screen.findByRole('listbox')
  arrowDownKey()
  arrowUpKey()
  arrowUpKey()
  enterKey()

  expect(button).toHaveTextContent('Three item')

  enterKey()
  await screen.findByRole('listbox')
  arrowDownKey()
  enterKey()

  expect(button).toHaveTextContent('One item')
})

it('select button onClick is triggered', async () => {
  const onClick = jest.fn()
  render(
    <DrodpdownLeft options={items} placeholder={'Select'} onClick={onClick} />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)

  expect(onClick).toHaveBeenCalledTimes(1)

  const item = await screen.findByRole('option', { name: /One item/ })
  userEvent.click(item)

  expect(onClick).toHaveBeenCalledTimes(1)
})

it('calls on change with click on label text', async () => {
  const onChange = jest.fn()
  render(
    <DrodpdownLeft options={items} placeholder={'Select'} onChange={onChange} />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  userEvent.click(button)

  const item = await screen.findByRole('option', { name: /Three/ })
  userEvent.click(item)

  expect(onChange).toHaveBeenCalledWith(expect.any(Object), {
    value: 'Three item',
    option: 'Three item'
  })
})

it('calls on change with keydown on value', async () => {
  const onChange = jest.fn()
  render(
    <DrodpdownLeft options={items} placeholder={'Select'} onChange={onChange} />
  )
  const button = screen.getByRole('button', { name: /Select/ })
  button.focus()
  enterKey()
  await screen.findByRole('listbox')
  arrowDownKey()
  enterKey()

  expect(onChange).toHaveBeenCalledWith(expect.any(Object), {
    value: 'Two item',
    option: 'Two item'
  })
})

it('should have a pre-selected value', async () => {
  render(
    <DrodpdownLeft
      options={items}
      value={{
        value: 'Two item',
        option: 'Two item'
      }}
    />
  )
  const button = screen.getByRole('button', { name: /Two item/ })
  button.focus()
  enterKey()
  const item = await screen.findByRole('option', { selected: true })
  expect(item).toHaveTextContent(/Two item/)
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
