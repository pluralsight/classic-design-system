import reactHTMLAttributes from 'react-html-attributes'

import REACT_PROPS from '../react-props.js'
import filterReactProps from '../index.js'

describe('filterReactProps', () => {
  it('should filter out an unknown prop', () => {
    const result = filterReactProps({ unknown: true })
    expect(result).not.toHaveProperty('unknown')
  })

  it('should allow "data-*" attr', () => {
    const result = filterReactProps({ 'data-test': true })
    expect(result).toHaveProperty('data-test', true)
  })

  it('should allow "aria-*" attr', () => {
    const result = filterReactProps({ 'aria-test': true })
    expect(result).toHaveProperty('aria-test', true)
  })

  Object.keys(reactHTMLAttributes).forEach(tagName => {
    if (['elements', 'font'].includes(tagName)) return

    let attrs = reactHTMLAttributes[tagName]

    // svg tags have a few special props
    if (tagName === 'svg') attrs = attrs.concat(['color', 'height', 'width'])

    it.each(attrs)(`should allow "%s" on "${tagName}" tag`, propName => {
      const result = filterReactProps({ [propName]: null }, { tagName })
      expect(result).toHaveProperty(propName)
    })
  })

  it.each(REACT_PROPS)('should allow "%s"', propName => {
    const result = filterReactProps({ [propName]: null })
    expect(result).toHaveProperty(propName)
  })
})
