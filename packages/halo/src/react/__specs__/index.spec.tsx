import { render } from '@testing-library/react'
import React from 'react'

import Halo from '../index'
import * as vars from '../../vars/index'

describe('Halo', () => {
  describe('.gapSizes', () => {
    it('exists', () => {
      expect(Halo.gapSizes).toEqual(vars.gapSizes)
    })
  })

  describe('.shapes', () => {
    it('exists', () => {
      expect(Halo.shapes).toEqual(vars.shapes)
    })
  })

  it('renders children', () => {
    const { container } = render(<Halo>child</Halo>)
    expect(container).toHaveTextContent('child')
  })
})
