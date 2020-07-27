import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import { compose, css, media } from 'glamor'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  banner: () =>
    compose(
      css(stylesheet['.psds-navcookiebanner']),
      media(
        '(min-width: 769px)',
        css(stylesheet['@media (min-width: 769px)']['.psds-navcookiebanner'])
      ),
      media('print', css(stylesheet['@media print']['.psds-navcookiebanner']))
    ),
  message: () => css(stylesheet['.psds-navcookiebanner__message']),
  dismiss: () => css(stylesheet['.psds-navcookiebanner__dismiss'])
}

const NavCookieBanner = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <div ref={ref} {...styles.banner()} {...filterReactProps(props)}>
      <p {...styles.message()}>
        <label>Pluralsight uses cookies.</label>
        {'  '}
        <a href="//www.pluralsight.com/privacy">
          Learn more about your privacy
        </a>
      </p>

      <button
        {...styles.dismiss()}
        aria-label="Accept privacy policy"
        onClick={evt => {
          // TODO: impl
        }}
      >
        <CloseIcon />
      </button>
    </div>
  )
})
NavCookieBanner.displayName = 'NavCookieBanner'
NavCookieBanner.propTypes = {}

export default NavCookieBanner
