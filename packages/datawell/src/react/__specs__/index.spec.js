import React from 'react'
import { shallow } from 'enzyme'

import Datawell from '../index.js'

describe('Datawell', () => {
  it('renders', () =>
    expect(() =>
      shallow(<Datawell label="Not throwing">Up</Datawell>)
    ).not.toThrow())
})
