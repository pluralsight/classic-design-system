import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const styles = {
  outer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    overflow: 'auto'
  }),
  inner: css({
    margin: 'auto',
    height: '100%' // IE Hack
  })
}

const Center = props => <div {...styles.outer}>{props.children}</div>
Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

const centerDecorator = storyFn => <Center>{storyFn()}</Center>

export default centerDecorator
