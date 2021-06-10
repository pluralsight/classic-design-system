import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import Collapsible from '@pluralsight/ps-design-system-collapsible'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import {
  RefForwardingComponent,
  ValueOf,
  HTMLPropsFor,
  omit
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { List } from './list'

const glamor = glamorDefault || glamorExports

const styles = {
  group: () => glamor.css({ label: 'verticaltabs__group' }),

  groupHeader: (themeName: ValueOf<typeof Theme.names>) => {
    const label = 'verticaltabs__group__header'

    return glamor.compose(
      glamor.css({ label }),
      glamor.css(stylesheet[`.psds-${label}`]),
      glamor.css(stylesheet[`.psds-${label}.psds-theme--${themeName}`])
    )
  },

  groupButton: () =>
    glamor.css(stylesheet['.psds-verticaltabs__group__button']),

  groupCollapsibleList: () =>
    glamor.compose(
      glamor.css(stylesheet['.psds-verticaltabs__list']),
      glamor.css(stylesheet['.psds-verticaltabs__group__collapsible-list'])
    ),

  rotatable: (open: boolean) =>
    glamor.css(
      stylesheet['.psds-verticaltabs__rotatable'],
      open && stylesheet['.psds-verticaltabs__rotatable--isOpen']
    ),

  headerLabel: () => glamor.css(stylesheet['.psds-verticaltabs__header__label'])
}

interface GroupProps extends HTMLPropsFor<'li'> {
  header?: React.ReactElement<typeof GroupHeader>
  startOpen?: boolean
}

interface GroupStatics {
  Header: typeof GroupHeader
}

interface GroupComponent
  extends RefForwardingComponent<GroupProps, HTMLLIElement, GroupStatics> {}

const Group = React.forwardRef((props, ref) => {
  const rest = omit(props as Record<string, any>, ['header', 'startOpen'])

  return (
    <li ref={ref} {...styles.group()} {...rest}>
      {props.header}

      <List>{props.children}</List>
    </li>
  )
}) as GroupComponent

interface GroupHeaderProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: React.ElementType | keyof JSX.IntrinsicElements
}
const GroupHeader = React.forwardRef<any, GroupHeaderProps>((props, ref) => {
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

interface CollapsibleGroupProps extends HTMLPropsFor<'div'> {
  groupButtonAriaLabel?: string
  header?: React.ReactElement<typeof CollapsibleGroupHeader>
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

const CollapsibleGroup = React.forwardRef((props, ref) => {
  const { children, header, startOpen, ...rest } = props
  const [open, setOpenState] = React.useState(startOpen)

  const toggle = () => {
    setOpenState(!open)
  }

  return (
    <div ref={ref} {...rest}>
      {React.isValidElement(header) &&
        React.cloneElement<CollapsibleGroupHeaderProps>(header as any, {
          toggle,
          open
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

interface CollapsibleGroupHeaderProps
  extends React.HTMLAttributes<HTMLElement> {
  open?: boolean
  tagName?: React.ElementType | keyof JSX.IntrinsicElements
  toggle?: () => void
}
const CollapsibleGroupHeader = React.forwardRef<
  any,
  CollapsibleGroupHeaderProps
>((props, ref) => {
  const { children, open, tagName: Tag = 'h2', toggle, ...rest } = props
  const themeName = useTheme()

  return (
    <Tag {...rest} {...styles.groupHeader(themeName)} ref={ref}>
      <button
        {...styles.groupButton()}
        onClick={toggle}
        aria-expanded={open ? 'true' : 'false'}
      >
        <span {...styles.headerLabel()}>{children}</span>

        <CaretDownIcon
          aria-hidden="true"
          size={CaretDownIcon.sizes.small}
          {...styles.rotatable(open)}
        />
      </button>
    </Tag>
  )
})

CollapsibleGroup.Header = CollapsibleGroupHeader

CollapsibleGroup.displayName = 'VerticalTabs.CollapsibleGroup'
CollapsibleGroup.Header.displayName = 'VerticalTabs.CollapsibleGroup.Header'

export { Group, CollapsibleGroup }
