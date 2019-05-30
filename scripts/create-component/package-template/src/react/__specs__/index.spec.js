import React from 'react'
import { shallow } from 'enzyme'

import * as vars from '../../vars/index.js'

import {{componentName}} from '../index.js'

describe('{{componentName}}', () => {
  it('renders', () => expect(() => shallow(<{{componentName}} />)).not.toThrow())
})
