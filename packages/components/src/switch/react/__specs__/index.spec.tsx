import { convertStoriesToJestCases } from '../../../util'
import { fireEvent, screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Switch } from '../index'

import * as stories from '../__stories__/index.story'

describe('Switch', () => {
  const cases = convertStoriesToJestCases(stories)

  it('forwards ref', () => {
    const ref = React.createRef<HTMLLabelElement>()
    render(<Switch ref={ref} />)
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

    it('clicking the label calls the onClick handler', () => {
      const handleClick = jest.fn()

      const { container } = render(
        <Basic {...Basic.args} onClick={handleClick} />
      )

      const label = container.querySelector('label')!
      fireEvent.click(label)

      expect(handleClick).toHaveBeenCalled()
    })

    it('clicking the input calls the onClick handler', () => {
      const handleClick = jest.fn()

      const { container } = render(
        <Basic {...Basic.args} onClick={handleClick} />
      )

      const input = container.querySelector('input')!
      fireEvent.click(input)

      expect(handleClick).toHaveBeenCalled()
    })
  })
})
