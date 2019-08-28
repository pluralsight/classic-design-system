import React from 'react'

import elementOfType from '../element-of-type.js'

const Uno = () => null
const Dos = () => null

describe('elementOfType', () => {
  var COMPONENT_NAME = 'MockComponent'
  var PROP_LOCATION = 'prop'
  var PROP_NAME = 'testProp'

  it('should warn when expected element is a string', () => {
    const fn = elementOfType(Uno)

    const props = { [PROP_NAME]: 'string - not an element' }
    const result = fn(props, PROP_NAME, COMPONENT_NAME, PROP_LOCATION)

    expect(result).toBeInstanceOf(Error)
    expect(result.message).toMatchInlineSnapshot(
      `"Invalid prop \`testProp\` with value \`\\"string - not an element\\"\` supplied to MockComponent, expected element of type \`Uno\`"`
    )
  })

  it('should not throw error when expected element is a circular json', () => {
    const fn = elementOfType(Uno)

    const circularJSON = { outter: { inner: null } }
    circularJSON.outter.inner = circularJSON.outter

    const props = { [PROP_NAME]: circularJSON }

    expect(() => {
      fn(props, PROP_NAME, COMPONENT_NAME, PROP_LOCATION)
    }).not.toThrow()
  })

  it('should warn when expected element is of the wrong type', () => {
    const fn = elementOfType(Uno)

    const props = { [PROP_NAME]: <Dos /> }
    const result = fn(props, PROP_NAME, COMPONENT_NAME, PROP_LOCATION)

    expect(result).toBeInstanceOf(Error)
    expect(result.message).toMatchInlineSnapshot(
      `"Invalid prop \`testProp\` of element type \`Dos\` supplied to MockComponent, expected element of type \`Uno\`"`
    )
  })

  it('should NOT warn when expected element is of the right type', () => {
    const fn = elementOfType(Uno)

    const props = { [PROP_NAME]: <Uno /> }
    const result = fn(props, PROP_NAME, COMPONENT_NAME, PROP_LOCATION)

    expect(result).toBeNull()
  })

  it('should support .isRequired', () => {
    const fn = elementOfType(Uno).isRequired

    const props = { [PROP_NAME]: null }
    const result = fn(props, PROP_NAME, COMPONENT_NAME, PROP_LOCATION)

    expect(result).toBeInstanceOf(Error)
    expect(result.message).toMatchInlineSnapshot(
      `"The prop \`testProp\` is marked as required in MockComponent, but it's value is \`null\`"`
    )
  })
})
