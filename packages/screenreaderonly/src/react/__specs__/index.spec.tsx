import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import ScreenReaderOnly from '../index'

import * as stories from '../__stories__/index.story'

describe('ScreenReaderOnly', () => {
  const cases = convertStoriesToJestCases(stories)

  it('forwards the ref', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<ScreenReaderOnly ref={ref} />)
    expect(ref).not.toBeNull()
  })

  it('supports polymorphism', () => {
    render(
      <>
        <ScreenReaderOnly as="span" data-testid="as-span" />
        <ScreenReaderOnly as="div" data-testid="as-div" />
        <ScreenReaderOnly as="button" data-testid="as-button" />
      </>
    )

    expect(screen.getByTestId('as-span')).toBeInTheDocument()
    expect(screen.getByTestId('as-div')).toBeInTheDocument()
    expect(screen.getByTestId('as-button')).toBeInTheDocument()
  })

  describe.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
})
