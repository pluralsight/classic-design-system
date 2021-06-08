import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import Tab from '../index'
import * as stories from '../__stories__/index.story'

describe('Tab', () => {
  const cases = convertStoriesToJestCases(stories)

  it('renders', () => {
    const { getByTestId } = render(
      <Tab.List data-testid="undertest"></Tab.List>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  describe.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
