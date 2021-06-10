import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import {
  ValueOf,
  combineFns,
  omit,
  HTMLPropsFor,
  RefFor
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React, { useEffect } from 'react'

import { useHideLabels } from './context'
import stylesheet from '../css/index'
import { List, CollapsibleList } from './list'

type StyleFn = (
  themeName?: ValueOf<keyof typeof Theme.names>,
  props?: Record<string, unknown>
) => glamorExports.StyleAttribute

const glamor = glamorDefault || glamorExports

const styles: { [key: string]: StyleFn } = {
  item: themeName => {
    const label = 'verticaltabs__item'

    return glamor.compose(
      glamor.css({ label }),
      glamor.css(stylesheet[`.psds-${label}`]),
      glamor.css(stylesheet[`.psds-${label}.psds-theme--${themeName}`])
    )
  },

  itemIcon: () => glamor.css(stylesheet['.psds-verticaltabs__item__icon']),
  itemIconActive: () =>
    glamor.css(stylesheet['.psds-verticaltabs__item__icon--active']),

  itemTier: (themeName, props: { type: string }) => {
    const label = `verticaltabs__${props.type}`

    return glamor.compose(
      glamor.css({ label }),
      glamor.css(stylesheet[`.psds-${label}`]),
      glamor.css(stylesheet[`.psds-${label}.psds-theme--${themeName}`])
    )
  },

  tier1Header: () => {
    const label = `verticaltabs__tier1__header`

    return glamor.compose(
      glamor.css({ label }),
      glamor.css(stylesheet[`.psds-${label}`])
    )
  },
  tier1HeaderInner: () => {
    const label = `verticaltabs__tier1__header__inner`

    return glamor.compose(
      glamor.css({ label }),
      glamor.css(stylesheet[`.psds-${label}`])
    )
  },

  tier2Header: () => {
    const label = `verticaltabs__tier2__header`

    return glamor.compose(
      glamor.css({ label }),
      glamor.css(stylesheet[`.psds-${label}`])
    )
  },

  tierHeaderLabel: (_themeName, props: { hideLabels: boolean }) => {
    const label = `verticaltabs__header__label`

    return glamor.compose(
      glamor.css({ label }),
      glamor.css(stylesheet[`.psds-${label}`]),
      props.hideLabels && glamor.css(stylesheet[`.psds-${label}--hide-labels`])
    )
  },
  tierHeaderLabelIcon: (_themeName, props: { collapsed: boolean }) => {
    const label = `verticaltabs__header__label__icon`

    return glamor.compose(
      glamor.css({ label }),
      glamor.css(stylesheet[`.psds-${label}`]),
      props.collapsed && glamor.css(stylesheet[`.psds-${label}--collapsed`])
    )
  }
}

interface ItemProps extends HTMLPropsFor<'li'> {
  active?: React.ReactNode
  collapsed?: boolean
  collapsible?: boolean
  header?: React.ReactElement
  itemType?: string
}

interface ItemHeaderBaseProps {
  active?: boolean
  collapsed?: boolean
  collapsible?: boolean
  icon?: React.ReactElement
}
interface AnchorHeaderProps extends ItemHeaderBaseProps, HTMLPropsFor<'a'> {
  onclick?: undefined
  href?: string
}
interface ButtonHeaderProps
  extends ItemHeaderBaseProps,
    HTMLPropsFor<'button'> {
  onclick?: React.MouseEventHandler
  href?: undefined
}
interface SpanHeaderProps extends ItemHeaderBaseProps, HTMLPropsFor<'span'> {
  onclick?: undefined
  href?: undefined
}

type ItemHeaderProps = AnchorHeaderProps | ButtonHeaderProps | SpanHeaderProps

const Item = React.forwardRef<HTMLLIElement, ItemProps>((props, ref) => {
  const {
    active,
    collapsed: initialCollapsed = false,
    collapsible = false,
    children,
    header,
    onClick,
    itemType: type,
    ...rest
  } = props

  const [collapsed, setCollapsed] = React.useState<boolean>(initialCollapsed)
  useEffect(() => {
    setCollapsed(initialCollapsed)
  }, [initialCollapsed])

  const themeName = useTheme()

  const handleHeaderClick = combineFns<[React.MouseEvent<HTMLLIElement>]>(
    () => {
      setCollapsed(!collapsed)
    },
    onClick
  )
  const ListComp = collapsible ? CollapsibleList : List

  return (
    <li ref={ref} {...rest}>
      <div
        {...styles.item(themeName)}
        {...styles.itemTier(themeName, { type })}
        {...(active && { 'data-active': true })}
      >
        {React.cloneElement(header, {
          active,
          collapsed,
          collapsible,
          ...(collapsible && { onClick: handleHeaderClick })
        })}
      </div>

      {children && <ListComp collapsed={collapsed}>{children}</ListComp>}
    </li>
  )
})

Item.displayName = 'VerticalTabs.Item'

interface Tier1Props extends Omit<React.ComponentProps<typeof Item>, 'header'> {
  header: React.ReactElement<typeof Tier1Header>
}
const Tier1: React.FC<Tier1Props> & { Header: typeof Tier1Header } = props => (
  <Item {...props} itemType="tier1" />
)

const Tier1Header = React.forwardRef<any, ItemHeaderProps>((props, ref) => {
  const { active, collapsed, collapsible, children, icon, ...rest } = props
  const hideLabels = useHideLabels()
  const Tag: React.FC = wrapperProps =>
    rest.href ? (
      <a {...wrapperProps} ref={ref as RefFor<'a'>} />
    ) : rest.onClick ? (
      <button {...wrapperProps} ref={ref as RefFor<'button'>} />
    ) : (
      <span {...wrapperProps} ref={ref as RefFor<'span'>} />
    )
  return (
    <Tag {...styles.tier1Header()} {...rest} aria-expanded={!collapsed}>
      {icon &&
        React.cloneElement(icon, {
          size: CaretDownIcon.sizes.medium,
          ...styles.itemIcon(),
          ...(active ? { 'data-active': true } : {})
        })}

      <span {...styles.tierHeaderLabel(null, { hideLabels })}>{children}</span>

      {collapsible && (
        <CaretDownIcon
          aria-hidden="true"
          size={CaretDownIcon.sizes.small}
          {...styles.tierHeaderLabelIcon(null, { collapsed })}
        />
      )}
    </Tag>
  )
})

Tier1.Header = Tier1Header

Tier1.displayName = 'VerticalTabs.Tier1'
Tier1.Header.displayName = 'VerticalTabs.Tier1.Header'

interface Tier2Props extends Omit<React.ComponentProps<typeof Item>, 'header'> {
  header: React.ReactElement<typeof Tier1Header>
}

const Tier2: React.FC<Tier2Props> & {
  Header: typeof Tier2Header
} = props => {
  return <Item {...props} itemType="tier2" />
}

const Tier2Header = React.forwardRef<any, ItemHeaderProps>((props, ref) => {
  const hideLabels = useHideLabels()

  // NOTE: some props are given during clone that are not used as should not be
  //       passed to the underlying dom node
  const rest = omit(props as any, ['active', 'collapsed', 'collapsible'])
  const Tag: React.FC = wrapperProps =>
    rest.href ? (
      <a {...wrapperProps} ref={ref as RefFor<'a'>} />
    ) : rest.onClick ? (
      <button {...wrapperProps} ref={ref as RefFor<'button'>} />
    ) : (
      <span {...wrapperProps} ref={ref as RefFor<'span'>} />
    )

  return (
    <Tag {...styles.tier2Header} {...rest}>
      <span {...styles.tierHeaderLabel(null, { hideLabels })}>
        {props.children}
      </span>
    </Tag>
  )
})

Tier2.Header = Tier2Header

Tier2.displayName = 'VerticalTabs.Tier2'
Tier2.Header.displayName = 'VerticalTabs.Tier2.Header'

export default Item
export { Tier1, Tier2 }
