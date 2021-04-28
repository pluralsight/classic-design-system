import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import StarRating from '../index'
import * as stories from '../__stories__/index.story'

describe('StarRating', () => {
  const cases = convertStoriesToJestCases(stories)

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<StarRating ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  describe.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container, {
        rules: {
          'duplicate-id': { enabled: false }
        }
      })

      expect(results).toHaveNoViolations()
    })
  })

  describe('Basic story', () => {
    const { Basic } = stories

    it('forwards className', () => {
      render(
        <Basic
          {...(Basic.args as any)}
          data-testid="undertest"
          className="testclass"
        />
      )

      const el = screen.getByTestId('undertest')
      expect(el).toHaveClass('testclass')
    })
  })
})
