import { compose, css } from 'glamor'
import React, { cloneElement, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'

import { useHideLabels } from './context'
import { List, CollapsibleList } from './list'

import stylesheet from '../css/index.js'

const styles = {
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

  itemTier: (themeName, { type }) => {
    const label = `verticaltabs__${type}`

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

  tierHeaderLabel: (_, { hideLabels }) => {
    const label = `verticaltabs__header__label`

    return compose(
      css({ label }),
      css(stylesheet[`.psds-${label}`]),
      hideLabels && css(stylesheet[`.psds-${label}--hide-labels`])
    )
  },
  tierHeaderLabelIcon: (_, { collapsed }) => {
    const label = `verticaltabs__header__label__icon`

    return compose(
      css({ label }),
      css(stylesheet[`.psds-${label}`]),
      collapsed && css(stylesheet[`.psds-${label}--collapsed`])
    )
  }
}

const Item = forwardRef((props, ref) => {
  const {
    active,
    collapsed: _collapsed = false,
    collapsible = false,
    children,
    header,
    itemType: type,
    ...rest
  } = props
  const themeName = useTheme()

  const [collapsed, setCollapsed] = React.useState(_collapsed)

  const handleHeaderClick = evt => {
    setCollapsed(!collapsed)
    if (typeof header.props.onClick === 'function') header.props.onClick(evt)
  }
  const ListComp = collapsible ? CollapsibleList : List

  return (
    <li {...filterReactProps(rest, { tagName: 'li' })} ref={ref}>
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

Item.propTypes = {
  active: PropTypes.bool,
  collapsed: PropTypes.bool,
  collapsible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  header: PropTypes.node,
  itemType: PropTypes.string
}

Item.displayName = 'VerticalTabs.Item'

const Tier1 = props => <Item {...props} itemType="tier1" />

Tier1.Header = forwardRef((props, ref) => {
  const { active, collapsed, collapsible, children, icon, ...rest } = props
  const hideLabels = useHideLabels()

  const TagName = rest.href ? 'a' : rest.onClick ? 'button' : 'span'

  return (
    <TagName
      {...styles.tier1Header()}
      {...filterReactProps(rest, { tagName: TagName })}
      ref={ref}
    >
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
    </TagName>
  )
})

Tier1.Header.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  collapsed: PropTypes.bool,
  collapsible: PropTypes.bool,
  icon: PropTypes.node
}

Tier1.displayName = 'VerticalTabs.Tier1'
Tier1.Header.displayName = 'VerticalTabs.Tier1.Header'

const Tier2 = ({ children, icon, ...props }) => {
  return <Item {...props} itemType="tier2" />
}

Tier2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  icon: PropTypes.node
}

Tier2.Header = forwardRef(({ active, children, ...rest }, ref) => {
  const hideLabels = useHideLabels()
  const TagName = rest.href ? 'a' : rest.onClick ? 'button' : 'span'

  return (
    <TagName
      {...styles.tier2Header}
      {...filterReactProps(rest, { tagName: TagName })}
      ref={ref}
    >
      <span {...styles.tierHeaderLabel(null, { hideLabels })}>{children}</span>
    </TagName>
  )
})

Tier2.Header.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

Tier2.displayName = 'VerticalTabs.Tier2'
Tier2.Header.displayName = 'VerticalTabs.Tier2.Header'

export default Item
export { Tier1, Tier2 }
