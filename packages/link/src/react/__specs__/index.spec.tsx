import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import Link from '../index'
import * as stories from '../__stories__/index.story'

describe('Link', () => {
  const cases = convertStoriesToJestCases(stories)

  it('renders', () => {
    const { getByTestId } = render(
      <Link data-testid="undertest">
        <a href="#">Render me</a>
      </Link>
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLAnchorElement>()
    render(
      <Link ref={ref}>
        <a href="#">A label</a>
      </Link>
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
