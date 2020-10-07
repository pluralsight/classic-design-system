import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { ValueOf, combineFns, omit } from '@pluralsight/ps-design-system-util'
import { StyleAttribute, compose, css } from 'glamor'
import React, {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  useState
} from 'react'

import stylesheet from '../css'

import { useHideLabels } from './context'
import { List, CollapsibleList } from './list'

type StyleFn = (
  themeName?: ValueOf<Theme.names>,
  props?: Record<string, unknown>
) => StyleAttribute

const styles: { [key: string]: StyleFn } = {
  item: themeName => {
    const label = 'verticaltabs__item'

    return compose(
      css({ label }),
      css(stylesheet[`.psds-${label}`]),
      css(stylesheet[`.psds-${label}.psds-theme--${themeName}`])
    )
  },

  itemIcon: () => css(stylesheet['.psds-verticaltabs__item__icon']),
  itemIconActive: () =>
    css(stylesheet['.psds-verticaltabs__item__icon--active']),

  itemTier: (themeName, props: { type: string }) => {
    const label = `verticaltabs__${props.type}`

    return compose(
      css({ label }),
      css(stylesheet[`.psds-${label}`]),
      css(stylesheet[`.psds-${label}.psds-theme--${themeName}`])
    )
  },

  tier1Header: () => {
    const label = `verticaltabs__tier1__header`

    return compose(css({ label }), css(stylesheet[`.psds-${label}`]))
  },
  tier1HeaderInner: () => {
    const label = `verticaltabs__tier1__header__inner`

    return compose(css({ label }), css(stylesheet[`.psds-${label}`]))
  },

  tier2Header: () => {
    const label = `verticaltabs__tier2__header`

    return compose(css({ label }), css(stylesheet[`.psds-${label}`]))
  },

  tierHeaderLabel: (_themeName, props: { hideLabels: boolean }) => {
    const label = `verticaltabs__header__label`

    return compose(
      css({ label }),
      css(stylesheet[`.psds-${label}`]),
      props.hideLabels && css(stylesheet[`.psds-${label}--hide-labels`])
    )
  },
  tierHeaderLabelIcon: (_themeName, props: { collapsed: boolean }) => {
    const label = `verticaltabs__header__label__icon`

    return compose(
      css({ label }),
      css(stylesheet[`.psds-${label}`]),
      props.collapsed && css(stylesheet[`.psds-${label}--collapsed`])
    )
  }
}

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  active?: ReactNode
  collapsed?: boolean
  collapsible?: boolean
  header?: ReactElement
  itemType?: string
}

interface ItemHeaderProps
  extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement> {
  active?: boolean
  collapsed?: boolean
  collapsible?: boolean
  href?: string
}

const Item = forwardRef<HTMLLIElement, ItemProps>((props, ref) => {
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

  const [collapsed, setCollapsed] = useState<boolean>(initialCollapsed)
  const themeName = useTheme()

  const handleHeaderClick = combineFns(() => {
    setCollapsed(!collapsed)
  }, onClick)
  const ListComp = collapsible ? CollapsibleList : List

  return (
    <li ref={ref} {...rest}>
      <div
        {...styles.item(themeName)}
        {...styles.itemTier(themeName, { type })}
        {...(active && { 'data-active': true })}
      >
        {cloneElement(header, {
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

interface Tier1Props extends ItemProps {
  header: ReactElement<typeof Tier1Header>
}
const Tier1: React.FC<Tier1Props> & { Header: typeof Tier1Header } = props => (
  <Item {...props} itemType="tier1" />
)

interface Tier1HeaderProps extends ItemHeaderProps {
  icon?: ReactElement
}

const Tier1Header = forwardRef<any, Tier1HeaderProps>((props, ref) => {
  const { active, collapsed, collapsible, children, icon, ...rest } = props
  const hideLabels = useHideLabels()

  const Tag = rest.href ? 'a' : rest.onClick ? 'button' : 'span'

  return (
    <Tag {...styles.tier1Header()} {...rest} ref={ref}>
      {icon &&
        cloneElement(icon, {
          size: CaretDownIcon.sizes.medium,
          ...styles.itemIcon(),
          ...(active ? { 'data-active': true } : {})
        })}

      <span {...styles.tierHeaderLabel(null, { hideLabels })}>{children}</span>

      {collapsible && (
        <CaretDownIcon
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

interface Tier2Props extends ItemProps {
  header: ReactElement<typeof Tier1Header>
}

const Tier2: React.FC<Tier2Props> & {
  Header: typeof Tier2Header
} = props => {
  return <Item {...props} itemType="tier2" />
}

interface Tier2HeaderProps extends ItemHeaderProps {}
const Tier2Header = forwardRef<any, Tier2HeaderProps>((props, ref) => {
  const hideLabels = useHideLabels()

  // NOTE: some props are given during clone that are not used as should not be
  //       passed to the underlying dom node
  const rest = omit(props as any, ['active', 'collapsed', 'collapsible'])
  const Tag = rest.href ? 'a' : rest.onClick ? 'button' : 'span'

  return (
    <Tag {...styles.tier2Header} {...rest} ref={ref}>
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
