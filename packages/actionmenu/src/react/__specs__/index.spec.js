import { cleanup, fireEvent, render } from '@testing-library/react'
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

  it('fires onSelect on option click', done => {
    function handleSelect(evt, value, label) {
      expect(value).toEqual('two')
      expect(label).toEqual('Two item')
      done()
    }

    const { getByTestId } = render(
      <ActionMenu data-testid="under-test" onSelect={handleSelect}>
        <ActionMenu.Item value="one">One item</ActionMenu.Item>
        <ActionMenu.Item value="two" data-testid="testtwo">
          Two item
        </ActionMenu.Item>
        <ActionMenu.Item value="three">Three item</ActionMenu.Item>
      </ActionMenu>
    )
    const opt = getByTestId('testtwo')
    fireEvent.click(opt)
  })

  it('fires onSelect on option keyPress', done => {
    function handleSelect(evt, value, label) {
      expect(value).toEqual('two')
      expect(label).toEqual('Two item')
      done()
    }

    const { getByTestId } = render(
      <ActionMenu data-testid="under-test" onSelect={handleSelect}>
        <ActionMenu.Item value="one">One item</ActionMenu.Item>
        <ActionMenu.Item value="two" data-testid="testtwo">
          Two item
        </ActionMenu.Item>
        <ActionMenu.Item value="three">Three item</ActionMenu.Item>
      </ActionMenu>
    )
    const opt = getByTestId('testtwo')
    fireEvent.keyDown(opt, { key: 'Enter', code: 13 })
  })
})

afterEach(cleanup)
