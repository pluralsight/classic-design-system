import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { PageHeadingLayout } from '../index'
import * as stories from '../__stories__/page-heading-layout.story'

describe('PageHeadingLayout', () => {
  const cases = convertStoriesToJestCases(stories)

  it('renders', () => {
    const { getByTestId } = render(
      <PageHeadingLayout
        heading={<h2>wow</h2>}
        data-testid="undertest"
      ></PageHeadingLayout>
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
