import React from 'react'
import { shallow } from 'enzyme'

import * as vars from '../../vars'

import {{componentName}} from '../index'

describe('{{componentName}}', () => {
  it('renders', () => expect(() => shallow(<{{componentName}} />)).not.toThrow())
})
