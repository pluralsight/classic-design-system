import { useCollapsible } from '@pluralsight/ps-design-system-collapsible'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  classNames,
  generateId,
  useToggle,
  RefFor
} from '@pluralsight/ps-design-system-util'
import React from 'react'

import '../css/index.css'

interface DrawerContextValue {
  detailId: string
  isOpen: boolean
  onToggle: () => unknown
  summaryId: string
}
const initialValue = {
  detailId: '',
  isOpen: false,
  onToggle: () => {},
  summaryId: ''
}

const DrawerContext = React.createContext<DrawerContextValue>(initialValue)

export const useDrawerContext = () => {
  const context = React.useContext(DrawerContext)
  if (!context) {
    throw new Error(
      `Drawer compound components cannot be rendered outside the Drawer component`
    )
  }
  return context
}

interface SummaryProps extends React.HTMLAttributes<HTMLButtonElement> {}
const Summary = React.forwardRef<HTMLButtonElement, SummaryProps>(
  ({ children, className, ...rest }, ref) => {
    const themeName = useTheme()
    const { summaryId, detailId, isOpen, onToggle } = useDrawerContext()
    return (
      <button
        className={classNames(
          `psds-drawer__summary`,
          isOpen && 'psds-drawer--is-open',
          `psds-theme--${themeName}`,
          className
        )}
        onClick={onToggle}
        ref={ref}
        aria-expanded={isOpen}
        id={summaryId}
        aria-controls={detailId}
        {...rest}
      >
        {children}
        <div className="psds-drawer__icon-slot">
          <CaretDownIcon
            className={classNames(
              'psds-drawer__rotatable',
              `psds-theme--${themeName}`,
              isOpen && 'psds-drawer--is-open'
            )}
          />
          <ScreenReaderOnly>
            {isOpen ? 'Expanded' : 'Collapsed'}
          </ScreenReaderOnly>
        </div>
      </button>
    )
  }
)

interface DetailsProps extends React.HTMLAttributes<HTMLDivElement> {}
const Details = React.forwardRef<HTMLDivElement, DetailsProps>(
  ({ className, ...rest }, forwardedRef) => {
    const themeName = useTheme()
    const { summaryId, detailId, isOpen } = useDrawerContext()
    const { 'aria-hidden': ariaHidden, ref } = useCollapsible(isOpen)
    React.useImperativeHandle(
      forwardedRef,
      () =>
        (ref as unknown as RefFor<'div'>).current as unknown as HTMLDivElement
    )
    return (
      <div
        aria-hidden={ariaHidden}
        aria-labelledby={summaryId}
        id={detailId}
        role="region"
        ref={ref}
        {...rest}
        className={classNames(
          'psds-drawer__details',
          `psds-theme--${themeName}`,
          className
        )}
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
  const summaryId = React.useMemo(() => generateId('psds-drawer-summary-'), [])
  const detailId = React.useMemo(() => generateId('psds-drawer-detail-'), [])
  const value = { ...useToggle({ isOpen, onToggle }), summaryId, detailId }
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
