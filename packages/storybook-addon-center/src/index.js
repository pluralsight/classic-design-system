import React from 'react'
import { css } from 'glamor'

const styles = {
  outer: css({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'auto'
  }),
  inner: css({
    margin: 'auto',
    maxHeight: '100%' // IE Hack
  })
}

const Center = props => (
  <div {...styles.outer}>
    <div {...styles.inner}>{props.children}</div>
  </div>
)

const centerDecorator = storyFn => <Center>{storyFn()}</Center>

export default centerDecorator
