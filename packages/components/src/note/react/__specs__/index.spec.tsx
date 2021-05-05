import { convertStoriesToJestCases } from '../../../util'
import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Note } from '../index'
import * as stories from '../__stories__/index.story'

describe('Note', () => {
  const cases = convertStoriesToJestCases(stories)

  it.todo('forwards ref')

  it.todo('supports polymorphism')

  it('exposes an Action Component', () => {
    expect(Note).toHaveProperty('Action')
  })

  it('exposes a List Component', () => {
    expect(Note).toHaveProperty('List')
  })

  describe.each(cases)('%s story', (_name, Story) => {
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
        <Basic
          {...(Basic.args as any)}
          data-testid="undertest"
          className="testclass"
        />
      )

      const el = screen.getByTestId('undertest')
      expect(el).toHaveClass('testclass')
    })

    it('supports onMouseOver prop', () => {
      const onMouseOver = jest.fn()

      render(
        <Basic
          {...(Basic.args as any)}
          data-testid="undertest"
          className="testclass"
          onMouseOver={onMouseOver}
        />
      )

      const el = screen.getByTestId('undertest')
      fireEvent.mouseOver(el)

      expect(onMouseOver).toHaveBeenCalled()
    })

    it('supports onMouseOut prop', () => {
      const onMouseOut = jest.fn()

      render(
        <Basic
          {...(Basic.args as any)}
          data-testid="undertest"
          className="testclass"
          onMouseOut={onMouseOut}
        />
      )

      const el = screen.getByTestId('undertest')
      fireEvent.mouseOut(el)

      expect(onMouseOut).toHaveBeenCalled()
    })
  })
})
