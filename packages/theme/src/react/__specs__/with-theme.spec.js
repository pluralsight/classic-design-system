import { mount } from 'enzyme'
import PropTypes from 'prop-types'
import React from 'react'

import Theme, { withTheme, defaultName } from '../index.js'

describe('withTheme', () => {
  function mountWithThemeProvider(child) {
    return mount(<Theme>{child}</Theme>)
  }

  const MockComponent = props => (
    <React.Fragment>{props.children}</React.Fragment>
  )
  MockComponent.displayName = 'MockComponent'
  MockComponent.propTypes = { children: PropTypes.node }

  let EnhancedComponent

  beforeAll(() => {
    EnhancedComponent = withTheme(MockComponent)
  })

  it('enhances the Component', () => {
    expect(EnhancedComponent).not.toBeNull()
  })

  it('exposes the original Component', () => {
    expect(EnhancedComponent.BaseComponent).toBe(MockComponent)
  })

  it('adds a new displayName', () => {
    const expected = `withTheme(${MockComponent.displayName})`
    expect(EnhancedComponent.displayName).toEqual(expected)
  })

  describe('when wrapped in a ThemeProvider', () => {
    it('injects the themeName from context', () => {
      const wrapper = mountWithThemeProvider(<EnhancedComponent />)
      const comp = wrapper.find(MockComponent)

      expect(comp.prop('themeName')).toEqual(defaultName)
    })
  })

  describe('when NOT wrapped in a ThemeProvider', () => {
    it('falls back to the default theme name', () => {
      const wrapper = mount(<EnhancedComponent />)
      const comp = wrapper.find(MockComponent)

      expect(comp.prop('themeName')).toEqual(defaultName)
    })
  })
})
