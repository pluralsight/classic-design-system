import { render } from '@testing-library/react'
import React from 'react'

import Icon from '../index'
import * as Icons from '../icons/index'
import * as vars from '../../vars/index'

describe('Icon', () => {
  describe('.colors', () => {
    it('should be exposed', () => expect(Icon.colors).toEqual(vars.colors))
  })

  describe('.sizes', () => {
    it('should be exposed', () => expect(Icon.sizes).toEqual(vars.sizes))
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Icon ref={ref} />)
    expect(ref.current).not.toBeNull()
  })

  it('should allow overriding the aria-label of the svg', () => {
    const { container } = render(<Icons.SearchIcon aria-label="test label" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-label', 'test label')
  })
})
