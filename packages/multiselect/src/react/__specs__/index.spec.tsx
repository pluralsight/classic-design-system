import { Story } from '@storybook/react/types-6-0'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import * as stories from '../__stories__/index.story'

describe('MultiSelectField', () => {
  const { Basic } = stories
  const cases = generateCasesFromStories(stories)

  describe.each(cases)('%s story', (_name, Story) => {
    it('should pass an basic axe a11y audit', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })

  describe('Basic story', () => {
    it('should focus input when label clicked', () => {
      const onChange = jest.fn()
      render(
        <Basic {...Basic.args} onChange={onChange} options={[]} value="" />
      )
      const label = screen.getByLabelText('TODO')
      const input = screen.getByRole('textbox')

      userEvent.click(label)

      expect(input).toHaveFocus()
    })
  })
})

function generateCasesFromStories(
  obj: Record<string, unknown>
): [string, Story][] {
  const keys = Object.keys(obj)

  return keys.reduce<any>((acc, key) => {
    if (key === 'default') return acc
    return [...acc, [key, obj[key]]]
  }, [])
}
