import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import AppFrame from '..'

import * as stories from '../__stories__/index.story'

describe('AppFrame', () => {
  const cases = convertStoriesToJestCases(stories)

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<AppFrame ref={ref} />)
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

    it('forwards className', () => {
      render(
        <Basic data-testid="undertest" className="testclass" {...Basic.args} />
      )

      const el = screen.getByTestId('undertest')
      expect(el).toHaveClass('testclass')
    })

    it('renders the sidenav with a function render prop', () => {
      const sidenav = () => <div data-testid="undertest">sidenav</div>
      render(<Basic {...Basic.args} sidenav={sidenav} />)

      const el = screen.getByTestId('undertest')
      expect(el).toBeInTheDocument()
    })
    it('renders the topnav with a function render prop', () => {
      const topnav = () => <div data-testid="undertest">topnav</div>
      render(<Basic {...Basic.args} topnav={topnav} />)

      const el = screen.getByTestId('undertest')
      expect(el).toBeInTheDocument()
    })
  })
})
