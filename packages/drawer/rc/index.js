import { css } from 'glamor'
import PropTypes from 'prop-types'
import React, {
  createContext,
  useContext,
  useImperativeHandle,
  forwardRef
} from 'react'

import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useToggle } from '@pluralsight/ps-design-system-util'

import { useCollapsible } from '@pluralsight/ps-design-system-collapsible'
import stylesheet from './css/index.js'

const styles = {
  head: ({ themeName, isOpen }) =>
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
  rotatable: ({ isOpen, themeName }) =>
    css(
      stylesheet['.psds-drawer__rotatable'],
      stylesheet[`.psds-drawer__rotatable.psds-theme--${themeName}`],
      isOpen && stylesheet['.psds-drawer__rotatable.psds-drawer--isOpen']
    ),
  collapsible: () => css(stylesheet['.psds-drawer__collapsible'])
}
export const DrawerContext = createContext()

export const useDrawerContext = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error(
      `Drawer compound components cannot be rendered outside the Drawer component`
    )
  }
  return context
}

const Head = forwardRef(({ children, ...rest }, ref) => {
  const themeName = useTheme()
  const { isOpen, onToggle } = useDrawerContext()
  return (
    <div
      {...styles.head({ isOpen, themeName })}
      onClick={onToggle}
      ref={ref}
      role="button"
      aria-expanded={isOpen}
      {...filterReactProps(rest)}
    >
      {children}
      <div {...styles.iconSlot()}>
        <CaretDownIcon {...styles.rotatable({ isOpen, themeName })} />
      </div>
    </div>
  )
})

const Body = forwardRef(({ children, ...rest }, forwardedRef) => {
  const themeName = useTheme()
  const { isOpen } = useDrawerContext()
  const { 'aria-hidden': ariaHidden, ref } = useCollapsible(isOpen)
  useImperativeHandle(forwardedRef, () => ref.current)
  return (
    <div
      aria-hidden={ariaHidden}
      ref={ref}
      {...styles.body(themeName)}
      {...filterReactProps(rest)}
    >
      {children}
    </div>
  )
})

export const Drawer = ({ children, isOpen, onToggle, ...rest }) => {
  const value = useToggle({ isOpen, onToggle })
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  )
}

Head.displayName = 'Drawer.Head'
Head.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

Body.displayName = 'Drawer.Body'
Body.propTypes = {
  ...Head.propTypes
}

Drawer.propTypes = {
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool,
  ...Head.propTypes
}
Drawer.displayName = 'Drawer'
Drawer.Head = Head
Drawer.Body = Body
