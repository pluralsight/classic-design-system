import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../../css/index.js'
import * as vars from '../../vars/index.js'

const styles = {
  list: props =>
    compose(
      css(stylesheet[`.psds-text__list.psds-theme--${props.themeName}`]),
      css(stylesheet[`.psds-text__list`]),
      css(stylesheet[`.psds-text__list--type-${props.type}`])
    )
}

export default function List({ type, ...props }) {
  const themeName = useTheme()
  const TagName = type === 'numbered' ? 'ol' : 'ul'

  return (
    <TagName
      {...styles.list({ themeName, type })}
      {...filterReactProps(props, { tagName: TagName })}
    />
  )
}

List.propTypes = {
  type: PropTypes.oneOf(Object.keys(vars.listTypes))
}

List.defaultProps = {
  type: vars.listTypes.default
}

function ListItem(props) {
  return <li {...props} />
}

List.types = vars.listTypes
List.Item = ListItem
