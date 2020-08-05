import { compose, css } from 'glamor'
import polyfillFocusWithin from 'focus-within'
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import Button from '@pluralsight/ps-design-system-button'
import Scrollable from '@pluralsight/ps-design-system-scrollable'
import Theme, {
  names as themes,
  useTheme
} from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

import useBodyScrollLock from './use-body-scroll-lock.js'
import useMatchMedia from './use-match-media.js'

if (typeof window !== 'undefined') polyfillFocusWithin(document)

const styles = {
  appframe: (themeName, _props) =>
    compose(
      css(stylesheet['.psds-appframe']),
      css(stylesheet[`.psds-appframe.psds-theme--${themeName}`])
    ),

  skipBanner: () => css(stylesheet['.psds-appframe__skip-banner']),

  container: variant =>
    compose(
      css(stylesheet['.psds-appframe__container']),
      variant && css(stylesheet[`.psds-appframe__container--${variant}`])
    ),
  content: () => css(stylesheet['.psds-appframe__content']),
  sidenav: variant =>
    compose(
      css(stylesheet['.psds-appframe__sidenav']),
      variant && css(stylesheet[`.psds-appframe__sidenav--${variant}`])
    ),
  sidenavOverflowMask: () =>
    css(stylesheet['.psds-appframe__sidenav__overflow-mask']),
  sidenavInner: () => css(stylesheet['.psds-appframe__sidenav__inner']),
  topnav: () => css(stylesheet['.psds-appframe__topnav'])
}

const AppFrame = React.forwardRef((props, forwardedRef) => {
  const { children, sidenav, topnav } = props

  const ref = React.useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  const mediumMedia = useMatchMedia(`(min-width: ${vars.breakpoints.medium})`)
  const themeName = useTheme()

  const [sidenavOpen, setSidenavOpen] = useState(props.sidenavOpen)
  useEffect(() => {
    setSidenavOpen(props.sidenavOpen)
  }, [props.sidenavOpen])

  const [sidenavOverlayed, setSidenavOverlayed] = useState(
    props.sidenavOverlayed
  )
  useEffect(() => {
    setSidenavOverlayed(props.sidenavOverlayed)
  }, [props.sidenavOverlayed])

  const getVariant = useCallback(() => {
    const { sidenavVariants: variants } = vars

    if (!sidenav) return variants.closed

    if (sidenavOverlayed) return variants.overlay

    if (sidenavOpen) {
      return mediumMedia ? variants.open : variants.overlay
    } else {
      return mediumMedia ? variants.minimized : variants.closed
    }
  }, [sidenav, sidenavOpen, sidenavOverlayed, mediumMedia])

  const [variant, setVariant] = useState(getVariant)
  useEffect(() => {
    setVariant(getVariant)
  }, [getVariant])

  const skipTargetId = 'ps-frame-skip-target'
  const skipTargetRef = useRef()

  const focusSkipTarget = useCallback(() => {
    if (!skipTargetRef.current) return

    skipTargetRef.current.focus()
  }, [])

  return (
    <div
      ref={ref}
      {...styles.appframe(themeName, props)}
      {...filterReactProps(props)}
    >
      <Theme name={themes.dark}>
        <SkipBanner href={'#' + skipTargetId} />
      </Theme>

      <Theme name={themes.dark}>
        <div {...styles.topnav()}>{topnav}</div>
      </Theme>

      <Container variant={variant}>
        {sidenav && <SideNav variant={variant}>{sidenav}</SideNav>}

        <main {...styles.content()}>
          <SkipTarget
            id={skipTargetId}
            onClick={focusSkipTarget}
            ref={skipTargetRef}
          />

          {children}
        </main>
      </Container>
    </div>
  )
})

AppFrame.displayName = 'AppFrame'
AppFrame.defaultProps = {
  sidenavOpen: false,
  sidenavOverlayed: false
}

AppFrame.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  sidenav: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  sidenavOpen: PropTypes.bool,
  sidenavOverlayed: PropTypes.bool,
  topnav: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
}

function SkipBanner(props) {
  return (
    <div {...styles.skipBanner()} {...props}>
      <Button
        appearance={Button.appearances.secondary}
        size={Button.sizes.small}
        tabIndex={0}
      >
        skip to main content
      </Button>
    </div>
  )
}
SkipBanner.propTypes = {
  href: PropTypes.string.isRequired
}

const SkipTarget = React.forwardRef((props, ref) => {
  return <a ref={ref} tabIndex={-1} {...props} />
})
SkipTarget.displayName = 'SkipTarget'
SkipTarget.propTypes = {
  id: PropTypes.string.isRequired
}

function Container(props) {
  const { variant, ...rest } = props

  return <div {...styles.container(variant)} {...rest} />
}
Container.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(vars.sidenavVariants))
}

function SideNav(props) {
  const { children, variant, ...rest } = props

  const ref = React.useRef()

  const lockScroll = variant === vars.sidenavVariants.overlay
  useBodyScrollLock(ref, lockScroll)

  return (
    <Theme name={themes.dark}>
      <div ref={ref} {...styles.sidenav(variant)} {...rest}>
        <div {...styles.sidenavOverflowMask()}>
          <Scrollable {...styles.sidenavInner()}>{children}</Scrollable>
        </div>
      </div>
    </Theme>
  )
}
AppFrame.SideNav = SideNav
AppFrame.SideNav.displayName = 'AppFrame.SideNav'
SideNav.variants = vars.sidenavVariants

SideNav.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(SideNav.variants)).isRequired
}

export default AppFrame
