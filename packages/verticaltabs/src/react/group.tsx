import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import Collapsible from '@pluralsight/ps-design-system-collapsible'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, {
  HTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useState
} from 'react'

import { List } from './list'

import stylesheet from '../css'

const styles = {
  group: () => css({ label: 'verticaltabs__group' }),

  groupHeader: (themeName: ValueOf<typeof Theme.names>) => {
    const label = 'verticaltabs__group__header'

    return compose(
      css({ label }),
      css(stylesheet[`.psds-${label}`]),
      css(stylesheet[`.psds-${label}.psds-theme--${themeName}`])
    )
  },

  groupButton: () => css(stylesheet['.psds-verticaltabs__group__button']),

  groupCollapsibleList: () =>
    compose(
      css(stylesheet['.psds-verticaltabs__list']),
      css(stylesheet['.psds-verticaltabs__group__collapsible-list'])
    ),

  rotatable: (open: boolean) =>
    css(
      stylesheet['.psds-verticaltabs__rotatable'],
      open && stylesheet['.psds-verticaltabs__rotatable--isOpen']
    ),

  headerLabel: () => css(stylesheet['.psds-verticaltabs__header__label'])
}

interface GroupProps extends HTMLAttributes<HTMLLIElement> {
  header?: ReactElement<typeof GroupHeader>
  startOpen?: boolean
}

interface GroupStatics {
  Header: typeof GroupHeader
}

interface GroupComponent
  extends RefForwardingComponent<GroupProps, HTMLLIElement, GroupStatics> {}

const Group = forwardRef((props, ref) => {
  const { children, header, startOpen, ...rest } = props

  return (
    <li ref={ref} {...styles.group()} {...rest}>
      {header}

      <List>{children}</List>
    </li>
  )
}) as GroupComponent

interface GroupHeaderProps extends HTMLAttributes<HTMLElement> {
  tagName?: React.ElementType | keyof JSX.IntrinsicElements
}
const GroupHeader = forwardRef<any, GroupHeaderProps>((props, ref) => {
  const { children, tagName: Tag = 'h2', ...rest } = props
  const themeName = useTheme()

  return (
    <Tag {...rest} {...styles.groupHeader(themeName)} ref={ref}>
      <div>
        <span {...styles.headerLabel()}>{children}</span>
      </div>
    </Tag>
  )
})

Group.Header = GroupHeader

Group.displayName = 'VerticalTabs.Group'
Group.Header.displayName = 'VerticalTabs.Group.Header'

interface CollapsibleGroupProps extends HTMLAttributes<HTMLDivElement> {
  groupButtonAriaLabel?: string
  header?: ReactElement<typeof CollapsibleGroupHeader>
  startOpen?: boolean
}

interface CollapsibleGroupStatics {
  Header: typeof CollapsibleGroupHeader
}

interface CollapsibleGroupComponent
  extends RefForwardingComponent<
    CollapsibleGroupProps,
    HTMLDivElement,
    CollapsibleGroupStatics
  > {}

const CollapsibleGroup = forwardRef((props, ref) => {
  const { children, header, startOpen, groupButtonAriaLabel, ...rest } = props
  const [open, setOpenState] = useState(startOpen)

  const getButtonAriaLabel = () => {
    const prefix = open ? 'Collapse' : 'Expand'
    return groupButtonAriaLabel ? `${prefix} ${groupButtonAriaLabel}` : prefix
  }

  const toggle = () => {
    setOpenState(!open)
  }

  return (
    <div ref={ref} {...rest}>
      {isValidElement(header) &&
        cloneElement(header, {
          toggle,
          open,
          getButtonAriaLabel
        })}

      <Collapsible
        isOpen={open}
        tagName="ul"
        {...styles.groupCollapsibleList()}
      >
        {children}
      </Collapsible>
    </div>
  )
}) as CollapsibleGroupComponent

interface CollapsibleGroupHeaderProps extends HTMLAttributes<HTMLElement> {
  getButtonAriaLabel?: () => string
  open?: boolean
  tagName?: React.ElementType | keyof JSX.IntrinsicElements
  toggle?: () => void
}
const CollapsibleGroupHeader = forwardRef<any, CollapsibleGroupHeaderProps>(
  (props, ref) => {
    const {
      children,
      open,
      getButtonAriaLabel,
      tagName: Tag = 'h2',
      toggle,
      ...rest
    } = props
    const themeName = useTheme()

    return (
      <Tag {...rest} {...styles.groupHeader(themeName)} ref={ref}>
        <button
          {...styles.groupButton()}
          aria-label={getButtonAriaLabel()}
          onClick={toggle}
        >
          <span {...styles.headerLabel()}>{children}</span>

          <CaretDownIcon
            size={CaretDownIcon.sizes.small}
            {...styles.rotatable(open)}
          />
        </button>
      </Tag>
    )
  }
)

CollapsibleGroup.Header = CollapsibleGroupHeader

CollapsibleGroup.displayName = 'VerticalTabs.CollapsibleGroup'
CollapsibleGroup.Header.displayName = 'VerticalTabs.CollapsibleGroup.Header'

export { Group, CollapsibleGroup }
