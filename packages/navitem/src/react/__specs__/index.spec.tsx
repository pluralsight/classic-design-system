import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import NavItem from '..'
import * as vars from '../../vars'

import * as stories from '../__stories__/index.story'

describe('NavItem', () => {
  const cases = convertStoriesToJestCases(stories)

  describe('.alignments', () => {
    it('exists', () => {
      expect(NavItem.alignments).toEqual(vars.alignments)
    })
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<NavItem ref={ref} />)
    expect(ref).not.toBeNull()
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

    it('renders a button el', () => {
      render(<Basic {...Basic.args} />)
      const el = screen.getByRole('button')

      expect(el).toBeInTheDocument()
      expect(el.tagName.toLowerCase()).toEqual('button')
    })

    it('forwards className', () => {
      render(
        <Basic data-testid="undertest" className="testclass" {...Basic.args} />
      )

      const el = screen.getByTestId('undertest')
      expect(el).toHaveClass('testclass')
    })
  })

  describe('AsLink story', () => {
    const { AsLink } = stories

    it('renders an anchor el', () => {
      render(<AsLink {...AsLink.args} />)
      const el = screen.getByRole('link')

      expect(el).toBeInTheDocument()
      expect(el.tagName.toLowerCase()).toEqual('a')
    })
  })
})
