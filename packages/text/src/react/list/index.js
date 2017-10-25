import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'

import ListItem from './list-item'

const types = { default: 'default', bulleted: 'bulleted', numbered: 'numbered' }

const styleType = ({ type }) =>
  ({
    bulleted: {
      listStyle: 'inherit'
    },
    numbered: {
      listStyle: 'inherit',
      listStyleType: 'decimal'
    }
  }[type])

const formatClassName = props =>
  glamor.css(
    {
      listStyle: 'none',
      marginLeft: 0,
      color: core.colors.bone,
      fontSize: core.type.fontSizeSmall,
      lineHeight: core.type.lineHeightExtra
    },
    styleType(props)
  )

const getTagName = props => (props.type === 'numbered' ? 'ol' : 'ul')

const rmNonHtmlProps = props => {
  const { type, ...rest } = props
  return rest
}

const List = props =>
  React.createElement(
    getTagName(props),
    { ...rmNonHtmlProps(props), className: formatClassName(props) },
    props.children
  )

import PropTypes from 'prop-types'
List.propTypes = {
  type: PropTypes.oneOf(Object.keys(types))
}
List.defaultProps = {
  type: types.default
}
List.types = types

// TODO: how to do this with es6 exports?!
module.exports = List
module.exports.Item = ListItem
