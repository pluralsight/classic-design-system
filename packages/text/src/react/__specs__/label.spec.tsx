import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import * as stories from '../__stories__/label.story'

describe('Text', () => {
  describe('Label', () => {
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
