import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import Collapsible from '@pluralsight/ps-design-system-collapsible'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  list: _ => css(stylesheet['.psds-verticaltabs__list']),
  listCollapsible: _ => css(stylesheet['.psds-verticaltabs__list--collapsible'])
}

export const List = props => {
  return (
    <ul {...filterReactProps(props, { tagName: 'ul' })} {...styles.list()} />
  )
}

export const CollapsibleList = props => {
  const [open, setOpen] = React.useState(!props.collapsed)

  React.useEffect(() => {
    setOpen(!props.collapsed)
  }, [props.collapsed])

  return (
    <Collapsible
      isOpen={open}
      tagName="ul"
      {...filterReactProps(props, { tagName: 'ul' })}
      {...styles.list()}
      {...styles.listCollapsible()}
    />
  )
}

CollapsibleList.propTypes = {
  collapsed: PropTypes.bool
}
