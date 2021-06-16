import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { axe } from 'jest-axe'
import React from 'react'
import { render } from '@testing-library/react'

import LinearProgress from '../index'
import * as stories from '../__stories__/index.story'

describe('LinearProgress', () => {
  const cases = convertStoriesToJestCases(stories)

  it('renders', () => {
    const { getByTestId } = render(
      <LinearProgress
        data-testid="mock-component"
        aria-label="download video"
      />
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  // TODO: make it forward ref quickly when you do the a11y update below
  // it('forwards refs', () => {
  //   const ref = React.createRef<HTMLDivElement>()

  //   render(<LinearProgress ref={ref} />)

  //   expect(ref.current).not.toBeNull()
  // })

  // TODO: fix the landmark unique id problem;
  // Likely use progressbar and aria-valuenow
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role
  describe.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
