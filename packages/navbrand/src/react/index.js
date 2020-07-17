import { css, media } from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  logo: props =>
    css(
      stylesheet['.psds-navbrand__logo'],
      props.wordmark &&
        media(
          '(min-width: 1200px)',
          stylesheet['@media (min-width: 1200px)'][
            '.psds-navbrand__logo--wordmark'
          ]
        )
    ),
  navBrand: props =>
    css(
      stylesheet['.psds-navbrand'],
      (props.href || props.onClick) && stylesheet['.psds-navbrand--clickable']
    ),
  wordmark: () =>
    css(
      stylesheet['.psds-navbrand__wordmark'],
      media(
        '(min-width: 1200px)',
        stylesheet['@media (min-width: 1200px)']['.psds-navbrand__wordmark']
      )
    )
}

const NavBrand = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const tagName = props.href ? 'a' : props.onClick ? 'button' : 'div'

  return (
    <Halo inline gapSize={Halo.gapSizes.small}>
      {React.createElement(
        tagName,
        {
          ...styles.navBrand(props),
          ...filterReactProps(props, { tagName }),
          ref
        },
        <>
          <Logo {...props} />
          <Wordmark {...props} />
        </>
      )}
    </Halo>
  )
})

NavBrand.displayName = 'NavBrand'
NavBrand.propTypes = {
  href: PropTypes.string,
  logo: PropTypes.node,
  onClick: PropTypes.func,
  wordmark: PropTypes.node
}

export default NavBrand

function Logo(props) {
  return <div {...styles.logo(props)}>{props.logo}</div>
}
Logo.displayName = 'NavBrand.Logo'
Logo.propTypes = {
  logo: PropTypes.node
}

function Wordmark(props) {
  return <div {...styles.wordmark()}>{props.wordmark}</div>
}
Wordmark.displayName = 'NavBrand.Wordmark'
Wordmark.propTypes = {
  wordmark: PropTypes.node
}
