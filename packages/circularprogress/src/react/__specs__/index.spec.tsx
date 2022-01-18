import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { axe } from 'jest-axe'
import React from 'react'
import { render, screen } from '@testing-library/react'

import CircularProgress, { circumference } from '../index'
import * as stories from '../__stories__/index.story'

describe('CircularProgress', () => {
  const cases = convertStoriesToJestCases(stories)

  it('renders', () => {
    const { getByTestId } = render(
      <CircularProgress
        data-testid="mock-component"
        aria-label="course loading"
      />
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<CircularProgress ref={ref} aria-label="course loading" />)

    expect(ref.current).not.toBeNull()
  })

  it('composes className', () => {
    const { container } = render(
      <CircularProgress className="compose-classname" aria-label="someLabel" />
    )

    expect(container.firstChild).toHaveClass(
      'psds-circularprogress--size-medium compose-classname'
    )
  })

  it('displays zero correctly', () => {
    render(
      <CircularProgress
        value={0}
        aria-label="0% complete"
        data-testid="zero-test"
      />
    )

    // Get the SVG path to test
    const el = screen
      .getByTestId('zero-test')
      .querySelector('.psds-circularprogress__fg')

    // Get the attribute value to test
    const dashoffset = el?.getAttribute('stroke-dashoffset') ?? ''

    // Test the values after type conversion
    expect(parseFloat(dashoffset)).toEqual(circumference)
  })

  describe.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
