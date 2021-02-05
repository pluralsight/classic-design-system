import { Story } from '@storybook/react/types-6-0'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import * as stories from '../__stories__/index.story'

jest.mock('@pluralsight/ps-design-system-position', () => {
  return {
    esModule: true,
    BelowLeft: jest.fn().mockImplementation(props => {
      const { children, show, ...rest } = props
      return (
        <div {...rest}>
          <div data-testid="position-show">{show}</div>
          <div data-testid="position-children">{children}</div>
        </div>
      )
    })
  }
})

describe('MultiSelectField', () => {
  const cases = generateCasesFromStories(stories)

  describe.each(cases)('%s story', (_name, Story) => {
    it('should pass an basic axe a11y audit', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })

  describe('Basic story', () => {
    const { Basic } = stories

    it.skip('should focus input when label clicked', () => {
      render(<Basic {...(Basic.args as any)} />)
      const label = screen.getByLabelText('The label')
      const input = screen.getByRole('textbox')

      userEvent.click(label)

      expect(input).toHaveFocus()
    })

    it.todo('test more interactions')
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
