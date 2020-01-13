import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import { useFeatureFlags } from '@pluralsight/ps-design-system-featureflags'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../../css/index.js'
import * as vars from '../../vars/index.js'

const styles = {
  list: props => {
    const flag = props.psds2020Colors ? '.psds-button--2020-colors' : ''
    return compose(
      css(stylesheet[`.psds-text__list.psds-theme--${props.themeName}${flag}`]),
      css(stylesheet[`.psds-text__list`]),
      css(stylesheet[`.psds-text__list--type-${props.type}`])
    )
  }
}

export default function List({ type, ...props }) {
  const themeName = useTheme()
  const {
    flags: { psds2020Colors }
  } = useFeatureFlags()
  const TagName = type === 'numbered' ? 'ol' : 'ul'

  return (
    <TagName
      {...styles.list({ themeName, type, psds2020Colors })}
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
