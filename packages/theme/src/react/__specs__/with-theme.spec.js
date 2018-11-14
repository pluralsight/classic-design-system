import { mount } from 'enzyme'
import PropTypes from 'prop-types'
import React from 'react'

import { defaultName as themeDefaultName } from '..'
import withTheme from '../with-theme'

describe('withTheme', () => {
  const providerThemeName = 'provider-theme-name'

  class ThemeProvider extends React.Component {
    getChildContext() {
      return { themeName: providerThemeName }
    }

    render() {
      return <React.Fragment {...this.props} />
    }
  }

  ThemeProvider.childContextTypes = {
    themeName: PropTypes.string.isRequired
  }

  ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
  }

  function mountWithThemeProvider(child) {
    return mount(<ThemeProvider>{child}</ThemeProvider>)
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

      expect(comp.prop('themeName')).toEqual(providerThemeName)
    })
  })

  describe('when NOT wrapped in a ThemeProvider', () => {
    it('falls back to the default theme name', () => {
      const wrapper = mount(<EnhancedComponent />)
      const comp = wrapper.find(MockComponent)

      expect(comp.prop('themeName')).toEqual(themeDefaultName)
    })
  })
})
