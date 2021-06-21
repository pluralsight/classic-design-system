import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import * as stories from '../__stories__/index.story'

describe('Card', () => {
  const cases = convertStoriesToJestCases(stories)

  it('renders', () => {
    const { CardWithDefaults } = stories
    const { getByTestId } = render(<CardWithDefaults data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  // TODO: enable and fix
  // describe.each(cases)('%s story', (_name, Story) => {
  //   it('has no axe-core violations', async () => {
  //     const { container } = render(<Story {...Story.args} />)
  //     const results = await axe(container)
  //     expect(results).toHaveNoViolations()
  //   })
  // })
})
