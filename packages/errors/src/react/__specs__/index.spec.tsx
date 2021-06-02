import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import ErrorPage from '../index'
import * as stories from '../__stories__/index.story'

describe('ErrorPage', () => {
  const cases = convertStoriesToJestCases(stories)

  it('renders', () => {
    const { getByTestId } = render(
      <ErrorPage
        data-testid="undertest"
        heading={<ErrorPage.Heading>Wow</ErrorPage.Heading>}
      />
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <ErrorPage
        ref={ref}
        heading={<ErrorPage.Heading>Wow</ErrorPage.Heading>}
      />
    )
    expect(ref).not.toBeNull()
  })

  describe.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
