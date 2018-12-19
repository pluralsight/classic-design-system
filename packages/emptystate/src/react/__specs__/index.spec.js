import React from 'react'
import { render } from 'react-testing-library'
import { axe, toHaveNoViolations } from 'jest-axe'

import EmptyState from '..'
import * as vars from '../../vars'

expect.extend(toHaveNoViolations)

async function renderWithAxeResults(...args) {
  const { container, ...rest } = await render(...args)
  const axeResults = await axe(container.innerHTML)

  return { axeResults, container, ...rest }
}

describe('EmptyState', () => {
  it('exports sizes', () => {
    expect(EmptyState.sizes).toEqual(vars.sizes)
  })

  it('exports compound components', () => {
    expect(EmptyState.Actions).toExist()
    expect(EmptyState.Caption).toExist()
    expect(EmptyState.Heading).toExist()
    expect(EmptyState.Illustration).toExist()
  })

  describe('when rendered with compound components', () => {
    const Compound = () => (
      <EmptyState
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
