import { compose, css } from 'glamor'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import FrameContext from './context.js'

const styles = {
  frame: (themeName, _props) =>
    compose(
      css(stylesheet['.psds-frame']),
      css(stylesheet[`.psds-frame.psds-theme--${themeName}`])
    ),

  main: () => css(stylesheet['.psds-frame__main']),
  sidenav: () => css(stylesheet['.psds-frame__sidenav']),
  topnav: () => css(stylesheet['.psds-frame__topnav'])
}

const Frame = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const themeName = useTheme()
  const contextValue = {}

  return (
    <FrameContext.Provider value={contextValue}>
      <div
        ref={ref}
        {...styles.frame(themeName, props)}
        {...filterReactProps(props)}
      >
        {props.topnav}
        {props.sidenav}
        {props.children}
      </div>
    </FrameContext.Provider>
  )
})

const Main = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return <main ref={ref} {...styles.main(props)} {...props} />
})
Main.displayName = 'Frame.Main'

const Sidenav = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return <nav ref={ref} {...styles.sidenav(props)} {...props} />
})
Sidenav.displayName = 'Frame.Sidenav'

const Topnav = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return <nav ref={ref} {...styles.topnav(props)} {...props} />
})
Topnav.displayName = 'Frame.Topnav'

Frame.displayName = 'Frame'
Frame.propTypes = {
  children: elementOfType(Main).isRequired,
  sidenav: elementOfType(Sidenav),
  topnav: elementOfType(Topnav).isRequired
}

Frame.Main = Main
Frame.Sidenav = Sidenav
Frame.Topnav = Topnav

export default Frame
