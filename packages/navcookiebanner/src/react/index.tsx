import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import { useCookies } from 'react-cookie'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports
const DISMISS_COOKIE_NAME = 'prism-cookienotify'
const DEFAULT_PRIVACY_UPDATED_DATE = new Date('2018-05-24T00:00:00')

const styles = {
  banner: () =>
    glamor.compose(
      glamor.css(stylesheet['.psds-navcookiebanner']),
      glamor.media(
        '(min-width: 769px)',
        glamor.css(
          stylesheet['@media (min-width: 769px)']['.psds-navcookiebanner']
        )
      ),
      glamor.media(
        'print',
        glamor.css(stylesheet['@media print']['.psds-navcookiebanner'])
      )
    ),
  message: () => glamor.css(stylesheet['.psds-navcookiebanner__message']),
  dismiss: () => glamor.css(stylesheet['.psds-navcookiebanner__dismiss'])
}

interface NavCookieBannerProps extends HTMLPropsFor<'div'> {
  cookieOptions?: CookieSetOptions
  message?: React.ReactNode
  privacyUpdatedDate?: typeof Date
}
interface CookieSetOptions {
  path?: string
  expires?: Date
  maxAge?: number
  domain?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: boolean | 'none' | 'lax' | 'strict'
  encode?: (value: string) => string
}

const NavCookieBanner = React.forwardRef<HTMLDivElement, NavCookieBannerProps>(
  (props, forwardedRef) => {
    const {
      cookieOptions,
      message,
      privacyUpdatedDate = DEFAULT_PRIVACY_UPDATED_DATE,
      ...rest
    } = props

    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLDivElement
    )

    const [cookies, setCookie] = useCookies([DISMISS_COOKIE_NAME])
    const cookieDateAccepted = parseCookie(cookies[DISMISS_COOKIE_NAME])
    const dismissed =
      cookieDateAccepted && cookieDateAccepted > privacyUpdatedDate

    if (dismissed) return null

    function dismiss() {
      const oneYear = new Date()
      oneYear.setFullYear(oneYear.getFullYear() + 1)

      setCookie(DISMISS_COOKIE_NAME, Date.now(), {
        domain: '.pluralsight.com',
        expires: oneYear,
        secure: true,
        sameSite: 'strict',
        ...cookieOptions
      })
    }

    return (
      <div ref={ref} {...styles.banner()} {...rest}>
        <p {...styles.message()}>
          {message || (
            <>
              <label>Pluralsight uses cookies.</label>
              {'  '}
              <a href="//www.pluralsight.com/privacy">
                Learn more about your privacy
              </a>
            </>
          )}
        </p>

        <button {...styles.dismiss()} aria-label="close" onClick={dismiss}>
          <CloseIcon />
        </button>
      </div>
    )
  }
)
NavCookieBanner.displayName = 'NavCookieBanner'
export default NavCookieBanner

function parseCookie(numberStr: string) {
  return numberStr ? new Date(parseInt(numberStr, 10)) : undefined
}
