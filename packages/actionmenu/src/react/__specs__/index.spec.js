import React from 'react'
import { render } from 'react-testing-library'

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
})
