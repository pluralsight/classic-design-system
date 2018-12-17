import React from 'react'
import { render } from 'react-testing-library'
import { axe, toHaveNoViolations } from 'jest-axe'

import InfoState from '../index'

expect.extend(toHaveNoViolations)

async function renderWithAxeResults(...args) {
  const { container, ...rest } = await render(...args)
  const axeResults = await axe(container.innerHTML)

  return { axeResults, container, ...rest }
}

describe('InfoState', () => {
  it('exports compound components', () => {
    expect(InfoState.Actions).toExist()
    expect(InfoState.Caption).toExist()
    expect(InfoState.Heading).toExist()
    expect(InfoState.Illustration).toExist()
  })

  describe('when rendered with compound components', () => {
    const Compound = () => (
      <InfoState
        actions={<InfoState.Actions>[ Actions ]</InfoState.Actions>}
        caption={<InfoState.Caption>Caption</InfoState.Caption>}
        heading={<InfoState.Heading>Heading</InfoState.Heading>}
        illustration={<InfoState.Illustration />}
      />
    )

    it('should have no violations', async () => {
      const { axeResults } = await renderWithAxeResults(<Compound />)
      expect(axeResults).toHaveNoViolations()
    })
  })
})
