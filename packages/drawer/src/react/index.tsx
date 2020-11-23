import { css } from 'glamor'
import React, {
  createContext,
  useContext,
  useImperativeHandle,
  forwardRef
} from 'react'

import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import {
  useToggle,
  RefFor,
  HTMLPropsFor,
  ValueOf
} from '@pluralsight/ps-design-system-util'

import { useCollapsible } from '@pluralsight/ps-design-system-collapsible'
import stylesheet from '../css'

const styles = {
  head: (themeName: ValueOf<typeof themeNames>, isOpen: boolean) =>
    css(
      stylesheet[`.psds-drawer__summary`],
      isOpen && stylesheet['.psds-drawer__summary.psds-drawer--isOpen'],
      stylesheet[`.psds-drawer__summary.psds-theme--${themeName}`]
    ),
  body: (themeName: ValueOf<typeof themeNames>) =>
    css(
      stylesheet['.psds-drawer__details'],
      stylesheet[`.psds-drawer__details.psds-theme--${themeName}`]
    ),
  iconSlot: () => css(stylesheet['.psds-drawer__icon-slot']),
  rotatable: (themeName: ValueOf<typeof themeNames>, isOpen: boolean) =>
    css(
      stylesheet['.psds-drawer__rotatable'],
      stylesheet[`.psds-drawer__rotatable.psds-theme--${themeName}`],
      isOpen && stylesheet['.psds-drawer__rotatable.psds-drawer--isOpen']
    ),
  collapsible: () => css(stylesheet['.psds-drawer__collapsible'])
}

interface DrawerContextValue {
  isOpen: boolean
  onToggle: () => unknown
}
const initialValue = {
  isOpen: false,
  onToggle: () => {}
}

const DrawerContext = createContext<DrawerContextValue>(initialValue)

export const useDrawerContext = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error(
      `Drawer compound components cannot be rendered outside the Drawer component`
    )
  }
  return context
}

interface SummaryProps extends HTMLPropsFor<'div'> {}
const Summary = forwardRef<HTMLDivElement, SummaryProps>(
  ({ children, ...rest }, ref) => {
    const themeName = useTheme()
    const { isOpen, onToggle } = useDrawerContext()
    return (
      <div
        {...styles.head(themeName, isOpen)}
        onClick={onToggle}
        ref={ref}
        role="button"
        aria-expanded={isOpen}
        {...rest}
      >
        {children}
        <div {...styles.iconSlot()}>
          <CaretDownIcon {...styles.rotatable(themeName, isOpen)} />
        </div>
      </div>
    )
  }
)

interface DetailsProps extends HTMLPropsFor<'div'> {}
const Details = forwardRef<HTMLDivElement, DetailsProps>(
  (props, forwardedRef) => {
    const themeName = useTheme()
    const { isOpen } = useDrawerContext()
    const { 'aria-hidden': ariaHidden, ref } = useCollapsible(isOpen)
    useImperativeHandle(
      forwardedRef,
      () =>
        (((ref as unknown) as RefFor<'div'>)
          .current as unknown) as HTMLDivElement
    )
    return (
      <div
        aria-hidden={ariaHidden}
        ref={ref}
        {...styles.body(themeName)}
        {...props}
      />
    )
  }
)

interface DrawerStatics {
  Summary: typeof Summary
  Details: typeof Details
}

interface DrawerProps {
  isOpen?: boolean
  onToggle?: () => unknown
}

const Drawer: React.FC<DrawerProps> & DrawerStatics = ({
  children,
  isOpen,
  onToggle
}) => {
  const value = useToggle({ isOpen, onToggle })
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  )
}

Summary.displayName = 'Drawer.Summary'

Details.displayName = 'Drawer.Details'

Drawer.displayName = 'Drawer'
Drawer.Summary = Summary
Drawer.Details = Details

export default Drawer
