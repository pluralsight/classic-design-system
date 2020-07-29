import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import { compose, css, media } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useCookies } from 'react-cookie'

import stylesheet from '../css/index.js'

const DISMISS_COOKIE_NAME = 'prism-cookienotify'
const DEFAULT_PRIVACY_UPDATED_DATE = new Date('2018-05-24T00:00:00')

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
  const [cookies, setCookie] = useCookies([DISMISS_COOKIE_NAME])
  const cookieDateAccepted = parseCookie(cookies[DISMISS_COOKIE_NAME])
  const dismissed =
    cookieDateAccepted && cookieDateAccepted > props.privacyUpdatedDate

  if (dismissed) return null

  function dismiss() {
    const oneYear = new Date()
    oneYear.setFullYear(oneYear.getFullYear() + 1)

    setCookie(DISMISS_COOKIE_NAME, Date.now(), {
      domain: '.pluralsight.com',
      expires: oneYear,
      secure: true,
      sameSite: 'strict',
      ...props.cookieOptions
    })
  }

  return (
    <div ref={ref} {...styles.banner()} {...filterReactProps(props)}>
      <p {...styles.message()}>
        {props.message || (
          <>
            <label>Pluralsight uses cookies.</label>
            {'  '}
            <a href="//www.pluralsight.com/privacy">
              Learn more about your privacy
            </a>
          </>
        )}
      </p>

      <button
        {...styles.dismiss()}
        aria-label="Accept privacy policy"
        onClick={dismiss}
      >
        <CloseIcon />
      </button>
    </div>
  )
})
NavCookieBanner.displayName = 'NavCookieBanner'
NavCookieBanner.defaultProps = {
  privacyUpdatedDate: DEFAULT_PRIVACY_UPDATED_DATE
}
NavCookieBanner.propTypes = {
  cookieOptions: PropTypes.shape({
    domain: PropTypes.string,
    expires: PropTypes.date,
    secure: PropTypes.bool,
    sameSite: PropTypes.string
  }),
  message: PropTypes.node,
  privacyUpdatedDate: PropTypes.instanceOf(Date)
}
export default NavCookieBanner

function parseCookie(numberStr) {
  return numberStr ? new Date(parseInt(numberStr, 10)) : undefined
}
