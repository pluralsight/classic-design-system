import React from 'react'
import { shallow } from 'enzyme'

import LinearProgress from '../index'

describe('LinearProgress', () => {
  it('renders', () => expect(() => shallow(<LinearProgress />)).not.toThrow())
})
