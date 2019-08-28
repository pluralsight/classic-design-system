import PropTypes from 'prop-types'

import arrayOfMaxLength from '../array-of-max-length.js'

describe('arrayOfMaxLength', () => {
  var COMPONENT_NAME = 'MockComponent'
  var PROP_LOCATION = 'prop-location'
  var PROP_NAME = 'testProp'

  it('should warn when prop is a string', () => {
    const fn = arrayOfMaxLength(2)
    const props = { [PROP_NAME]: 'string - not an array' }
    const result = fn(props, PROP_NAME, COMPONENT_NAME, PROP_LOCATION)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toMatchInlineSnapshot(
      `"Invalid prop-location \`testProp\` with value \`\\"string - not an array\\"\` supplied to MockComponent, expected an array"`
    )
  })

  it("should warn when prop doesn't match taype", () => {
    const fn = arrayOfMaxLength(2, PropTypes.string)
    const props = { [PROP_NAME]: [true] }
    const result = fn(props, PROP_NAME, COMPONENT_NAME, PROP_LOCATION)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toMatchInlineSnapshot(
      `"Invalid prop: \`prop-location\` supplied to \`testProp[0]\`."`
    )
  })

  it('should warn when prop array length is more than max length', () => {
    const maxLength = 1
    const fn = arrayOfMaxLength(maxLength)
    const props = { [PROP_NAME]: ['asdf', 'asdf'] }
    const result = fn(props, PROP_NAME, COMPONENT_NAME, PROP_LOCATION)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toMatchInlineSnapshot(
      `"Invalid prop-location \`testProp\` with length 2 supplied to MockComponent, expected max length of 1"`
    )
  })
})
