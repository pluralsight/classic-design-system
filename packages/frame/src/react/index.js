import { compose, css } from 'glamor'
import polyfillFocusWithin from 'focus-within'
import React, { useCallback, useImperativeHandle, useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '@pluralsight/ps-design-system-button'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Theme, {
  names as themes,
  useTheme
} from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

if (typeof window !== 'undefined') polyfillFocusWithin(document)

const styles = {
  frame: (themeName, _props) =>
    compose(
      css(stylesheet['.psds-frame']),
      css(stylesheet[`.psds-frame.psds-theme--${themeName}`])
    ),

  skipBanner: () => css(stylesheet['.psds-frame__skip-banner']),

  container: () => css(stylesheet['.psds-frame__container']),
  content: () => css(stylesheet['.psds-frame__content']),
  sidenav: state =>
    compose(
      css(stylesheet['.psds-frame__sidenav']),
      state && css(stylesheet[`.psds-frame__sidenav--${state}`])
    ),
  sidenavInner: () => css(stylesheet['.psds-frame__sidenav__inner']),
  topnav: () => css(stylesheet['.psds-frame__topnav'])
}

const Frame = React.forwardRef((props, forwardedRef) => {
  const { sidenavState } = props

  const ref = React.useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  const themeName = useTheme()

  const skipTargetId = 'TODO'
  const skipTargetRef = useRef()

  const focusSkipTarget = useCallback(() => {
    if (!skipTargetRef.current) return

    skipTargetRef.current.focus()
  }, [])

  return (
    <>
      <Theme name={themes.dark}>
        <SkipBanner href={'#' + skipTargetId} />
      </Theme>

      <div
        ref={ref}
        {...styles.frame(themeName, props)}
        {...filterReactProps(props)}
      >
        <Theme name={themes.dark}>
          <div {...styles.topnav()}>{props.topnav}</div>
        </Theme>

        <div {...styles.container()}>
          {props.sidenav && (
            <SideNav state={sidenavState}>{props.sidenav}</SideNav>
          )}

          <main {...styles.content()}>
            <SkipTarget
              id={skipTargetId}
              onClick={focusSkipTarget}
              ref={skipTargetRef}
            />

            {props.children}
          </main>
        </div>
      </div>
    </>
  )
})

Frame.displayName = 'Frame'

Frame.sidenavStates = vars.sidenavStates
Frame.widthConstraints = vars.widthConstraints

Frame.defaultProps = {
  widthConstraint: Frame.widthConstraints.medium
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  sidenav: PropTypes.node,
  sidenavState: PropTypes.oneOf(Object.keys(Frame.sidenavStates)),
  topnav: PropTypes.node,
  widthConstraint: PropTypes.oneOf(Object.keys(Frame.widthConstraints))
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

function SideNav(props) {
  const { children, state, ...rest } = props

  return (
    <Theme name={themes.dark}>
      <div {...styles.sidenav(state)} {...rest}>
        <div {...styles.sidenavInner()}>{children}</div>
      </div>
    </Theme>
  )
}
SideNav.propTypes = {
  children: PropTypes.node,
  state: PropTypes.oneOf(Object.keys(Frame.sidenavStates))
}

export default Frame
