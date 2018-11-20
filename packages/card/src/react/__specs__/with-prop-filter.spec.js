import { mount } from 'enzyme'
import PropTypes from 'prop-types'
import React from 'react'
import reactHTMLAttributes from 'react-html-attributes'

import REACT_PROPS from '../react-props'
import withPropFilterFactory from '../with-prop-filter'

const MockComponent = props => <React.Fragment>{props.children}</React.Fragment>
MockComponent.displayName = 'MockComponent'
MockComponent.propTypes = { children: PropTypes.node }

describe('withPropFilter', () => {
  it('enhances the Component', () => {
    const EnhancedComponent = withPropFilterFactory()(MockComponent)
    expect(EnhancedComponent).not.toBeNull()
  })

  it('exposes the original Component', () => {
    const EnhancedComponent = withPropFilterFactory()(MockComponent)
    expect(EnhancedComponent.BaseComponent).toBe(MockComponent)
  })

  it('adds a new displayName', () => {
    const EnhancedComponent = withPropFilterFactory()(MockComponent)
    const expected = `withPropFilter(${MockComponent.displayName})`
    expect(EnhancedComponent.displayName).toEqual(expected)
  })

  it('should render without errors', () => {
    const EnhancedComponent = withPropFilterFactory()(MockComponent)
    expect(() => mount(<EnhancedComponent />)).not.toThrow()
  })

  it('should filter out an unknown prop', () => {
    const EnhancedComponent = withPropFilterFactory()(MockComponent)

    const wrapper = mount(<EnhancedComponent unknown />)
    expect(wrapper.find(MockComponent).prop('unknown')).not.toBeDefined()
  })

  it('should NOT filter a custom data attr', () => {
    const EnhancedComponent = withPropFilterFactory()(MockComponent)

    const wrapper = mount(<EnhancedComponent data-test />)
    expect(wrapper.find(MockComponent).prop('data-test')).toBeDefined()
  })

  it('should NOT filter an aria attr', () => {
    const EnhancedComponent = withPropFilterFactory()(MockComponent)

    const wrapper = mount(<EnhancedComponent aria-atomic />)
    expect(wrapper.find(MockComponent).prop('aria-atomic')).toBeDefined()
  })

  it('should allow whitelisting an unknown prop', () => {
    const whitelist = ['unknown']
    const EnhancedComponent = withPropFilterFactory({ whitelist })(
      MockComponent
    )

    const wrapper = mount(<EnhancedComponent unknown />)
    expect(wrapper.find(MockComponent).prop('unknown')).toBeDefined()
  })

  it('should allow whitelisting many unknown props', () => {
    const whitelist = ['unknown-1', 'unknown-2']
    const EnhancedComponent = withPropFilterFactory({ whitelist })(
      MockComponent
    )

    const wrapper = mount(<EnhancedComponent unknown-1 unknown-2 />)
    expect(wrapper.find(MockComponent).prop('unknown-1')).toBeDefined()
    expect(wrapper.find(MockComponent).prop('unknown-2')).toBeDefined()
  })

  it('should allow blacklisting a prop', () => {
    const blacklist = ['data-test']
    const EnhancedComponent = withPropFilterFactory({ blacklist })(
      MockComponent
    )

    const wrapper = mount(<EnhancedComponent data-test />)
    expect(wrapper.find(MockComponent).prop('data-test')).not.toBeDefined()
  })

  it('should allow blacklisting many props', () => {
    const blacklist = ['data-test-1', 'data-test-2']
    const EnhancedComponent = withPropFilterFactory({ blacklist })(
      MockComponent
    )

    const wrapper = mount(<EnhancedComponent data-test-1 data-test-2 />)
    expect(wrapper.find(MockComponent).prop('data-test-1')).not.toBeDefined()
    expect(wrapper.find(MockComponent).prop('data-test-1')).not.toBeDefined()
  })

  describe('supported html attrs', () => {
    const SUPPORTED_HTML_ATTRS = reactHTMLAttributes['*']

    let EnhancedComponent

    beforeAll(() => {
      EnhancedComponent = withPropFilterFactory()(MockComponent)
    })

    it.each(SUPPORTED_HTML_ATTRS)('should NOT filter out "%s"', propName => {
      const wrapper = mount(<EnhancedComponent {...{ [propName]: null }} />)
      expect(wrapper.find(MockComponent).prop(propName)).toBeDefined()
    })
  })

  describe('supported react props', () => {
    const REACT_PROPS_TO_TEST = REACT_PROPS.filter(
      s => !['key', 'ref'].includes(s)
    )

    let EnhancedComponent

    beforeAll(() => {
      EnhancedComponent = withPropFilterFactory()(MockComponent)
    })

    it.each(REACT_PROPS_TO_TEST)('should NOT filter out "%s"', propName => {
      const wrapper = mount(<EnhancedComponent {...{ [propName]: null }} />)
      expect(wrapper.find(MockComponent).prop(propName)).toBeDefined()
    })
  })

  describe('with an SVG element', () => {
    const SUPPORTED_CSS_PROPS = ['color', 'height', 'width']

    let EnhancedComponent

    beforeAll(() => {
      EnhancedComponent = withPropFilterFactory({ tagName: 'g' })(MockComponent)
    })

    it.each(SUPPORTED_CSS_PROPS)('should NOT filter out "%s"', propName => {
      const wrapper = mount(<EnhancedComponent {...{ [propName]: null }} />)
      expect(wrapper.find(MockComponent).prop(propName)).toBeDefined()
    })
  })
})
