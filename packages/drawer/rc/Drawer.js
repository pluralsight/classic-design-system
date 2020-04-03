import { css } from 'glamor'
import PropTypes from 'prop-types'
import React, { forwardRef, useEffect, useImperativeHandle } from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { useCollapsible } from '@pluralsight/ps-design-system-collapsible/rc'

import stylesheet from './css/index.js'

import { DrawerContext, useDrawerContext } from './context.js'
import { actionTypes, useDrawer } from './use-drawer.js'
import { usePrevious } from './use-previous.js'
import { combineFns, isDefined, isFunction } from './utils.js'

const styles = {
  head: (themeName, { isOpen }) =>
    css(
      stylesheet[`.psds-drawer__head`],
      isOpen && stylesheet['.psds-drawer__head.psds-drawer--isOpen'],
      stylesheet[`.psds-drawer__head.psds-theme--${themeName}`]
    ),
  body: themeName =>
    css(
      stylesheet['.psds-drawer__body'],
      stylesheet[`.psds-drawer__body.psds-theme--${themeName}`]
    ),
  iconSlot: () => css(stylesheet['.psds-drawer__icon-slot']),
  rotatable: (themeName, { isOpen }) =>
    css(
      stylesheet['.psds-drawer__rotatable'],
      stylesheet[`.psds-drawer__rotatable.psds-theme--${themeName}`],
      isOpen && stylesheet['.psds-drawer__rotatable.psds-drawer--isOpen']
    ),
  collapsible: () => css(stylesheet['.psds-drawer__collapsible'])
}

const Drawer = forwardRef((props, ref) => {
  const { children, onChange, stateReducer, ...rest } = props

  const controlled = isDefined(props.isOpen)

  const initialState = {
    ...props.initialState,
    ...(controlled && { controlled, isOpen: props.isOpen })
  }

  const context = useDrawer({
    initialState,
    stateReducer,

    onRequestClose: props.onRequestClose,
    onRequestOpen: props.onRequestOpen
  })

  const { isOpen, reset } = context
  const prevOpen = usePrevious(isOpen)

  useEffect(() => {
    if (controlled === context.controlled) return

    reset({ controlled })
  }, [context.controlled, controlled, reset])

  useEffect(() => {
    if (!controlled || !isDefined(prevOpen)) return
    if (prevOpen === props.isOpen) return

    reset({ isOpen: props.isOpen })
  }, [controlled, reset, prevOpen, props.isOpen])

  useEffect(() => {
    if (!isFunction(onChange)) return
    if (!isDefined(prevOpen) || prevOpen === isOpen) return

    onChange({ isOpen })
  }, [onChange, prevOpen, isOpen])

  return (
    <div ref={ref} {...filterReactProps(rest)}>
      <DrawerContext.Provider value={context}>
        {isFunction(children) ? children(context) : children}
      </DrawerContext.Provider>
    </div>
  )
})

Drawer.displayName = 'Drawer'
Drawer.types = actionTypes

Drawer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  initialState: PropTypes.shape({ isOpen: PropTypes.bool }),
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onRequestClose: PropTypes.func,
  onRequestOpen: PropTypes.func,
  stateReducer: PropTypes.any
}

const Head = forwardRef(({ children, onClick, ...rest }, ref) => {
  const themeName = useTheme()
  const { isOpen, toggle } = useDrawerContext()

  const handleClick = combineFns(toggle, onClick)

  return (
    <div
      onClick={handleClick}
      ref={ref}
      {...styles.head(themeName, { isOpen })}
      {...rest}
    >
      {children}

      <div {...styles.iconSlot()}>
        <CaretDownIcon {...styles.rotatable(themeName, { isOpen })} />
      </div>
    </div>
  )
})
Head.displayName = 'Head'
Head.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

const Body = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()
  const { isOpen } = useDrawerContext()
  const { 'aria-hidden': ariaHidden, ref } = useCollapsible(isOpen)

  useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <div
      aria-hidden={ariaHidden}
      ref={ref}
      {...styles.body(themeName)}
      {...props}
    />
  )
})
Body.displayName = 'Body'
Body.propTypes = {
  children: PropTypes.node
}

Drawer.Head = Head
Drawer.Head.displayName = 'Drawer.Head'

Drawer.Body = Body
Drawer.Body.displayName = 'Drawer.Body'

export { Drawer }
