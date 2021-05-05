import { convertStoriesToJestCases } from '../../../util'
import { screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { VerticalTabs } from '../index'

import * as stories from '../__stories__/index.story'

describe('VerticalTabs', () => {
  const cases = convertStoriesToJestCases(stories)

  it('forwards ref', () => {
    const ref = React.createRef<HTMLUListElement>()
    render(<VerticalTabs ref={ref} />)
    expect(ref).not.toBeNull()
  })

  describe.skip.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })

  describe('Basic story', () => {
    const { Basic } = stories

    it('forwards className', () => {
      render(
        <Basic data-testid="undertest" className="testclass" {...Basic.args} />
      )

      const el = screen.getByTestId('undertest')
      expect(el).toHaveClass('testclass')
    })
  })
})
