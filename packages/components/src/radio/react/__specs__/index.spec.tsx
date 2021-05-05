import { convertStoriesToJestCases } from '../../../util'
import { fireEvent, screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Radio } from '../index'

import * as stories from '../__stories__/index.story'

describe('Radio', () => {
  const cases = convertStoriesToJestCases(stories)

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Radio.Group name="undertest" ref={ref} />)
    expect(ref).not.toBeNull()
  })

  describe('.Button component', () => {
    it('exists', () => expect(Radio.Button).toBeDefined())

    it('forwards ref', () => {
      const ref = React.createRef<HTMLInputElement>()
      render(<Radio.Button label="label" value="value" ref={ref} />)
      expect(ref).not.toBeNull()
    })
  })

  describe.skip.each(cases)('%s story', (_name, Story) => {
    it('has no axe-core violations', async () => {
      const { container } = render(<Story {...Story.args} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })

  describe('Controlled story', () => {
    const { Controlled } = stories

    it('fires change event only once', () => {
      const onChange = jest.fn()
      render(
        <Controlled
          {...(Controlled.args as any)}
          name="undertest"
          onChange={onChange}
          value="green"
        />
      )

      const radio = screen.getByRole('radio', { name: /Red/ })
      fireEvent.click(radio)

      expect(onChange).toHaveBeenCalledTimes(1)
    })
  })
})
