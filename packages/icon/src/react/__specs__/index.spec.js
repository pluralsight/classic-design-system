import { render } from '@testing-library/react'
import React from 'react'

import * as vars from '../../vars/index.js'

import Icon from '../index.js'

describe('Icon', () => {
  describe('.colors', () => {
    it('should be exposed', () => expect(Icon.colors).toEqual(vars.colors))
  })

  describe('.sizes', () => {
    it('should be exposed', () => expect(Icon.sizes).toEqual(vars.sizes))
  })

  describe('.ids', () => {
    it('should be exposed', () => expect(Icon.ids).toEqual(vars.ids))
  })

  it.todo('forwards refs')

  describe.each(Object.values(Icon.ids))('with id "%s"', id => {
    it('should render', () => {
      const { getByTestId } = render(<Icon data-testid={id} id={id} />)
      expect(getByTestId(id)).not.toBeNull()
    })
  })

  it('should allow overriding the aria-label of the svg', () => {
    const { container } = render(
      <Icon id={Icon.ids.search} aria-label="test label" />
    )
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-label', 'test label')
  })
})
