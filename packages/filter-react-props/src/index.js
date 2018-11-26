import memoize from 'fast-memoize'
import reactHTMLAttributes from 'react-html-attributes'

import REACT_PROPS from './react-props'

const SUPPORTED_HTML_ATTRS = reactHTMLAttributes['*']
const SUPPORTED_CSS_PROPS = ['color', 'height', 'width']

const VALID_HTML_TAG_NAMES = reactHTMLAttributes.elements.html
const VALID_SVG_TAG_NAMES = reactHTMLAttributes.elements.svg

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

export default function filterReactProps(props, config = {}) {
  const { tagName = 'div' } = config

  return Object.keys(props)
    .filter(propName => shouldForwardProperty(tagName, propName))
    .reduce((acc, propName) => ({ ...acc, [propName]: props[propName] }), {})
}
