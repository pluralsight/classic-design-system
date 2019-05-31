import React from 'react'
import { shallow } from 'enzyme'

import DataWell from '../index.js'

describe('DataWell', () => {
  it('renders', () =>
    expect(() =>
      shallow(<DataWell label="Not throwing">Up</DataWell>)
    ).not.toThrow())
})
