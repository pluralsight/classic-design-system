/**
 * NOTE: largely inspired from glamourous
 *       https://github.com/paypal/glamorous/blob/75495fd4bd1083d8fc0d12fa805188da759ac03b/src/should-forward-property.js
 */

import hoistNonReactStatics from 'hoist-non-react-statics'
import memoize from 'fast-memoize'
import React from 'react'
import reactHTMLAttributes from 'react-html-attributes'

import REACT_PROPS from './react-props'

const SUPPORTED_HTML_ATTRS = reactHTMLAttributes['*']
const SUPPORTED_CSS_PROPS = ['color', 'height', 'width']

const VALID_HTML_TAG_NAMES = reactHTMLAttributes.elements.html
const VALID_SVG_TAG_NAMES = reactHTMLAttributes.elements.svg

const getDisplayName = Component => {
  if (typeof Component === 'string') return Component

  if (!Component) return undefined

  return Component.displayName || Component.name || 'Component'
}

const getAttrListForTag = tagName =>
  isSVGTag(tagName)
    ? reactHTMLAttributes.svg // NOTE: all SVG attributes are grouped under 'svg'
    : reactHTMLAttributes[tagName] || []

const isCustomAttr = propName => RegExp('^(data|aria)-').test(propName)

const isCSSProp = propName => SUPPORTED_CSS_PROPS.indexOf(propName) !== -1

const isHTMLProp = (tagName, propName) =>
  SUPPORTED_HTML_ATTRS.indexOf(propName) !== -1 ||
  getAttrListForTag(tagName).indexOf(propName) !== -1

const isReactProp = propName => REACT_PROPS.indexOf(propName) !== -1

const isString = str => typeof str === 'string'

const isSVGTag = tagName =>
  tagName === 'svg' ||
  // NOTE: tags are SVG if they are also NOT HTML
  (VALID_HTML_TAG_NAMES.indexOf(tagName) === -1 &&
    VALID_SVG_TAG_NAMES.indexOf(tagName) !== -1)

const shouldForwardProperty = memoize((tagName, propName) => {
  if (!isString(tagName)) return false

  return (
    isHTMLProp(tagName, propName) ||
    isReactProp(propName) ||
    (isCustomAttr(propName.toLowerCase()) &&
      (!isCSSProp(propName) || isSVGTag(tagName)))
  )
})

export default function withPropFilterFactory(_config) {
  const config = { blacklist: [], tagName: 'div', whitelist: [], ..._config }

  const isAllowedProp = propName =>
    config.blacklist.indexOf(propName) === -1 &&
    (config.whitelist.indexOf(propName) !== -1 ||
      shouldForwardProperty(config.tagName, propName))

  return function withPropFilter(BaseComponent) {
    const name = getDisplayName(BaseComponent)

    const EnhancedComponent = (props, context = {}) => {
      const filteredProps = Object.keys(props).reduce((acc, propName) => {
        return isAllowedProp(propName)
          ? { ...acc, [propName]: props[propName] }
          : acc
      }, {})

      return <BaseComponent {...filteredProps} />
    }

    EnhancedComponent.BaseComponent = BaseComponent
    EnhancedComponent.displayName = `withPropFilter(${name})`

    return hoistNonReactStatics(EnhancedComponent, BaseComponent)
  }
}
