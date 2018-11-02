import React from 'react'
import { mount } from 'enzyme'

import FocusLock from '../index'

describe('FocusLock', () => {
  let props

  beforeEach(() => {
    props = {
      children: 'children'
    }
  })

  it('renders', () =>
    expect(() => mount(<FocusLock {...props} />)).not.toThrow())
})
