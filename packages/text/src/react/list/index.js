import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import ListItem from './list-item'

import css from '../../css'
import * as vars from '../../vars'

const formatClassName = props =>
  glamor.css({
    ...css[`.psds-text__list.psds-theme--${props.themeName}`],
    ...css[`.psds-text__list`],
    ...css[`.psds-text__list--type-${props.type}`]
  })

const getTagName = props => (props.type === 'numbered' ? 'ol' : 'ul')

const rmNonHtmlProps = props => {
  const { type, ...rest } = props
  return rest
}

const List = (props, context) => {
  const themeName = useTheme()
  return React.createElement(
    getTagName(props),
    {
      ...rmNonHtmlProps(props),
      className: formatClassName({ ...props, themeName })
    },
    props.children
  )
}

/* eslint-disable react/no-unused-prop-types */
List.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(vars.listTypes))
}
/* eslint-enable react/no-unused-prop-types */

List.defaultProps = {
  type: vars.listTypes.default
}

List.types = vars.listTypes

// TODO: how to do this with es6 exports?!
module.exports = List
module.exports.Item = ListItem
