import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Card } from '../index'
import * as stories from '../__stories__/index.story'

describe('Card', () => {
  const cases = convertStoriesToJestCases(stories)

  it('renders', () => {
    const { getByTestId } = render(<Card data-testid="undertest"></Card>)

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
