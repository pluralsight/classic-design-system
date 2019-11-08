import { css } from 'glamor'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  list: _ => css(stylesheet['.psds-verticaltabs__list'])
}

const List = props => (
  <ul {...filterReactProps(props, { tagName: 'ul' })} {...styles.list()} />
)

export default List
