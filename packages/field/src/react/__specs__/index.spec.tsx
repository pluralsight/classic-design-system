import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import * as textAreaStories from '../__stories__/text-area-field.story'
import * as textInputStories from '../__stories__/text-input-field.story'

describe('Field', () => {
  describe('TextAreaField', () => {
    const { Basic } = textAreaStories
    const cases = convertStoriesToJestCases(textAreaStories)

    describe.each(cases)('%s story', (_name, Story) => {
      it('has no axe-core violations', async () => {
        const { container } = render(<Story {...Story.args} />)
        const results = await axe(container)

        expect(results).toHaveNoViolations()
      })
    })

    describe('Basic story', () => {
      it('focuses input when label clicked', () => {
        render(<Basic {...Basic.args} />)
        const label = screen.getByLabelText('Text area label area')
        const input = screen.getByRole('textbox')

        userEvent.click(label)

        expect(input).toHaveFocus()
      })
    })
  })

  describe('TextInputField', () => {
    const { Basic } = textInputStories
    const cases = convertStoriesToJestCases(textInputStories)

    describe.each(cases)('%s story', (_name, Story) => {
      it('has no axe-core violations', async () => {
        const { container } = render(<Story {...Story.args} />)
        const results = await axe(container)

        expect(results).toHaveNoViolations()
      })
    })

    describe('Basic story', () => {
      it('focuses input when label clicked', () => {
        render(<Basic {...Basic.args} />)
        const label = screen.getByLabelText('Text input label area')
        const input = screen.getByRole('textbox')

        userEvent.click(label)

        expect(input).toHaveFocus()
      })

      it('supports the search type', () => {
        render(<Basic {...Basic.args} type="search" />)
        const input = screen.getByRole('searchbox')

        expect(input).toBeInTheDocument()
      })
    })
  })
})
