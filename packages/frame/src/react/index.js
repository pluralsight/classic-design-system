import { compose, css } from 'glamor'
import polyfillFocusWithin from 'focus-within'
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'

import Button from '@pluralsight/ps-design-system-button'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Theme, {
  names as themes,
  useTheme
} from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import FrameContext, { initialValue as initialContextValue } from './context.js'

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
  sidenav: () => css(stylesheet['.psds-frame__sidenav']),
  topnav: () => css(stylesheet['.psds-frame__topnav'])
}

const Frame = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  const themeName = useTheme()
  const [contextValue] = useState(initialContextValue)

  const skipTargetId = 'TODO'
  const skipTargetRef = useRef()

  const focusSkipTarget = useCallback(() => {
    if (!skipTargetRef.current) return

    skipTargetRef.current.focus()
  }, [])

  return (
    <FrameContext.Provider value={contextValue}>
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
          <Theme name={themes.dark}>
            {props.sidenav && <div {...styles.sidenav()}>{props.sidenav}</div>}
          </Theme>

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
    </FrameContext.Provider>
  )
})

Frame.displayName = 'Frame'

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  sidenav: PropTypes.node,
  topnav: PropTypes.node
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

export default Frame
