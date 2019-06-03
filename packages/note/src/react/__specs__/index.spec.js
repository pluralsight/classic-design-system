// import React from 'react'
// import { render } from 'react-testing-library'

import Note from '../index.js'

describe('Note', () => {
  it('exposes a List Component', () => {
    expect(Note).toHaveProperty('List')
  })
})
