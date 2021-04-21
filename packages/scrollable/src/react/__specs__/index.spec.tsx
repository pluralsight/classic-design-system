import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import Scrollable from '../index'

import * as stories from '../__stories__/index.story'

describe('Scrollable', () => {
  const cases = convertStoriesToJestCases(stories)

  it('forwards className', () => {
    render(<Scrollable data-testid="undertest" className="testclass" />)

    const el = screen.getByTestId('undertest')
    expect(el).toHaveClass('testclass')
  })

  it('forwards the ref', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Scrollable ref={ref} />)
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
