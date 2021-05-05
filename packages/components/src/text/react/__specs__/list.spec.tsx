import { convertStoriesToJestCases } from '../../../util'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import * as stories from '../__stories__/list.story'

describe('Text', () => {
  describe('List', () => {
    const cases = convertStoriesToJestCases(stories)

    it.todo('forwards the ref')

    it.todo('supports polymorphism')

    describe.each(cases)('%s story', (_name, Story) => {
      it('has no axe-core violations', async () => {
        const { container } = render(<Story {...Story.args} />)
        const results = await axe(container)

        expect(results).toHaveNoViolations()
      })
    })
  })
})
