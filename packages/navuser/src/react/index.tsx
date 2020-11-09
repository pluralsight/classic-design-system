import Avatar from '@pluralsight/ps-design-system-avatar'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import stylesheet from '../css/index.js'

const styles = {
  navUser: props =>
    css(
      stylesheet['.psds-navuser'],
      (props.href || props.onClick) && stylesheet['.psds-navuser--clickable']
    ),
  meta: () => css(stylesheet['.psds-navuser__plan-name']),
  name: () => css(stylesheet['.psds-navuser__name']),
  words: () => css(stylesheet['.psds-navuser__words'])
}

const NavUser = React.forwardRef((props, forwardedRef) => {
  const tagName = props.href ? 'a' : props.onClick ? 'button' : 'div'

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <Halo inline gapSize={Halo.gapSizes.small}>
      {React.createElement(
        tagName,
        {
          ...filterReactProps(props, { tagName }),
          ...styles.navUser(props),
          ref
        },
        <>
          <Avatar
            src={props.src}
            size={Avatar.sizes.xSmall}
            name={props.name}
          />
          <Words {...props} />
        </>
      )}
    </Halo>
  )
})
NavUser.displayName = 'NavUser'
NavUser.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  meta: PropTypes.node,
  name: PropTypes.node,
  src: PropTypes.string
}

export default NavUser

function Words(props) {
  return props.name || props.meta ? (
    <div {...styles.words()}>
      <div {...styles.name()}>{props.name}</div>
      <div {...styles.meta()}>{props.meta}</div>
    </div>
  ) : null
}
NavUser.displayName = 'NavUser.Words'
Words.propTypes = {
  meta: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string
}
