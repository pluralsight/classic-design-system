import { css } from 'glamor'
import PropTypes from 'prop-types'
import React, {
  useState,
  createContext,
  useContext,
  useImperativeHandle,
  useMemo
} from 'react'

import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { useCollapsible } from '@pluralsight/ps-design-system-collapsible/rc'
import stylesheet from './css/index.js'

const styles = {
  head: ({ themeName, open }) =>
    css(
      stylesheet[`.psds-drawer__head`],
      open && stylesheet['.psds-drawer__head.psds-drawer--isOpen'],
      stylesheet[`.psds-drawer__head.psds-theme--${themeName}`]
    ),
  body: themeName =>
    css(
      stylesheet['.psds-drawer__body'],
      stylesheet[`.psds-drawer__body.psds-theme--${themeName}`]
    ),
  iconSlot: () => css(stylesheet['.psds-drawer__icon-slot']),
  rotatable: ({ open, themeName }) =>
    css(
      stylesheet['.psds-drawer__rotatable'],
      stylesheet[`.psds-drawer__rotatable.psds-theme--${themeName}`],
      open && stylesheet['.psds-drawer__rotatable.psds-drawer--isOpen']
    ),
  collapsible: () => css(stylesheet['.psds-drawer__collapsible'])
}
const DrawerContext = createContext()

export const useDrawerContext = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error(
      `Drawer compound components cannot be rendered outside the Drawer component`
    )
  }
  return context
}

const Head = React.forwardRef(({ children, ...rest }, ref) => {
  const themeName = useTheme()
  const { open, onToggle } = useDrawerContext()
  return (
    <div
      {...styles.head({ open, themeName })}
      onClick={onToggle}
      ref={ref}
      {...rest}
    >
      {children}
      <div {...styles.iconSlot()}>
        <CaretDownIcon {...styles.rotatable({ open, themeName })} />
      </div>
    </div>
  )
})

const Body = React.forwardRef(({ children, ...rest }, forwardedRef) => {
  const themeName = useTheme()
  const { open } = useDrawerContext()
  const { 'aria-hidden': ariaHidden, ref } = useCollapsible(open)
  useImperativeHandle(forwardedRef, () => ref.current)
  return (
    <div
      aria-hidden={ariaHidden}
      ref={ref}
      {...styles.body(themeName)}
      {...rest}
    >
      {children}
    </div>
  )
})

export const DrawerProvider = ({ children, open, onToggle }) => {
  const value = useMemo(() => ({ open, onToggle }), [open, onToggle])
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  )
}

export const Drawer = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <DrawerProvider open={open} onToggle={() => setOpen(!open)}>
      {children}
    </DrawerProvider>
  )
}

Head.displayName = 'Drawer(Head)'
Head.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

Body.displayName = 'Drawer(Body)'
Body.propTypes = {
  ...Head.propTypes
}

DrawerProvider.propTypes = {
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  ...Head.propTypes
}
DrawerProvider.displayName = 'Drawer(Provider)'
Drawer.propTypes = {
  ...Head.propTypes
}
Drawer.Head = Head
Drawer.Body = Body
