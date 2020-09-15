import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import EmptyState from '../index.js'
import * as vars from '../../vars/index.js'

expect.extend(toHaveNoViolations)

async function renderWithAxeResults(...args) {
  const { container, ...rest } = render(...args)
  const axeResults = await axe(container.innerHTML)

  return { axeResults, container, ...rest }
}

describe('EmptyState', () => {
  it('exports sizes', () => {
    expect(EmptyState.sizes).toEqual(vars.sizes)
  })

  it('exports compound components', () => {
    expect(EmptyState).toHaveProperty('Actions')
    expect(EmptyState).toHaveProperty('Caption')
    expect(EmptyState).toHaveProperty('Heading')
    expect(EmptyState).toHaveProperty('Illustration')
  })

  describe('when rendered with compound components', () => {
    const Compound = () => (
      <EmptyState
        role="main"
        actions={<EmptyState.Actions>[ Actions ]</EmptyState.Actions>}
        caption={<EmptyState.Caption>Caption</EmptyState.Caption>}
        heading={<EmptyState.Heading>Heading</EmptyState.Heading>}
        illustration={
          <EmptyState.Illustration
            name={EmptyState.Illustration.names.search}
          />
        }
      />
    )

    it('should have no violations', async () => {
      const { axeResults } = await renderWithAxeResults(<Compound />)
      expect(axeResults).toHaveNoViolations()
    })
  })
})
