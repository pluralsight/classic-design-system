import { Story } from '@storybook/react/types-6-0'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import React from 'react'

import * as stories from '../__stories__/index.story'

describe('TagsInput', () => {
  const { Basic } = stories
  const cases = generateCasesFromStories(stories)

  describe.each(cases)('%s story', (_name, Story) => {
    it('should pass an basic axe a11y audit', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })

  it('should focus input when label clicked', () => {
    render(<Basic {...(Basic.args as any)} />)
    const label = screen.getByLabelText('Tags input label')
    const input = screen.getByRole('textbox')

    userEvent.click(label)

    expect(input).toHaveFocus()
  })

  it.todo('test more interactions')
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
