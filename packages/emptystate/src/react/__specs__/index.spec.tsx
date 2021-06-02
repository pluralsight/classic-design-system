import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import EmptyState from '../index'
import * as vars from '../../vars/index'
import * as stories from '../__stories__/index.story'

describe('EmptyState', () => {
  it('exports sizes', () => {
    expect(EmptyState.sizes).toEqual(vars.sizes)
  })

  it('exports compound components', () => {
    expect(EmptyState).toHaveProperty('Actions')
    expect(EmptyState).toHaveProperty('Caption')
    expect(EmptyState).toHaveProperty('Heading')
    expect(EmptyState).toHaveProperty('Illustration')
  })

  const cases = convertStoriesToJestCases(stories)
  describe.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
