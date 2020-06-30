import PropTypes from 'prop-types'

import { generateDefaultProps, generatePropTypes } from '..'

describe('#generatePropTypes', () => {
  test('empty', () => {
    expect(generatePropTypes({})).toEqual({})
  })

  test('single string, no value', () => {
    const input = {
      size: {
        type: 'string'
      }
    }
    const expected = {
      size: PropTypes.string
    }
    expect(generatePropTypes(input)).toEqual(expected)
  })

  test('multiple string, no value', () => {
    const input = {
      size: { type: 'string' },
      style: { type: 'string' }
    }
    const expected = {
      size: PropTypes.string,
      style: PropTypes.string
    }
    expect(generatePropTypes(input)).toEqual(expected)
  })

  test('oneOf with value', () => {
    const input = {
      size: {
        type: 'oneOf',
        value: ['small', 'medium', 'large']
      }
    }
    // note: dunno how to assert values on real PropTypes
    expect(generatePropTypes(input)).toHaveProperty('size')
  })
})

describe('#generateDefaultProps', () => {
  test('empty', () => {
    expect(generateDefaultProps({})).toEqual({})
  })

  test('prop with no default', () => {
    const input = {
      size: {
        type: 'string'
      }
    }
    expect(generateDefaultProps(input)).toEqual({})
  })

  test('multiple props, no defaults', () => {
    const input = {
      size: { type: 'string' },
      style: { type: 'string' }
    }
    expect(generateDefaultProps(input)).toEqual({})
  })

  test('has default', () => {
    const input = {
      literally: {
        type: 'string',
        default: 'amaze'
      }
    }
    const expected = {
      literally: 'amaze'
    }
    expect(generateDefaultProps(input)).toEqual(expected)
  })
})
