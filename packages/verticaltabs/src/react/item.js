import { css } from 'glamor'
import React, { cloneElement, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon from '@pluralsight/ps-design-system-icon'

import List from './list.js'

import stylesheet from '../css/index.js'

const styles = {
  item: _ => css(stylesheet['.psds-verticaltabs__item']),

  itemTag: tag =>
    css(
      tag === 'button'
        ? stylesheet['.psds-verticaltabs__button']
        : tag === 'a'
        ? stylesheet['.psds-verticaltabs__item__link']
        : stylesheet['.psds-verticaltabs__item__span']
    ),

  itemIcon: themeName =>
    css(
      stylesheet['.psds-verticaltabs__item__icon'],
      stylesheet[`.psds-verticaltabs__item__icon.psds-theme--${themeName}`]
    ),
  itemIconActive: themeName =>
    css(
      stylesheet['.psds-verticaltabs__item__icon--active'],
      stylesheet[
        `.psds-verticaltabs__item__icon--active.psds-theme--${themeName}`
      ]
    ),

  itemTier: (themeName, tier) =>
    tier === 'tier1'
      ? css(
          stylesheet['.psds-verticaltabs__tier1'],
          stylesheet[`.psds-verticaltabs__tier1.psds-theme--${themeName}`]
        )
      : css(
          stylesheet['.psds-verticaltabs__tier2'],
          stylesheet[`.psds-verticaltabs__tier2.psds-theme--${themeName}`]
        ),
  tier1Header: _ => css(stylesheet['.pds-verticaltabs__tier1__header']),
  tier1HeaderInner: _ =>
    css(stylesheet['.pds-verticaltabs__tier1__header__inner']),
  tierHeaderLabel: _ => css(stylesheet['.pds-verticaltabs__header__label']),
  tier2Header: _ => css(stylesheet['.pds-verticaltabs__tier2__header'])
}

const Item = forwardRef((props, ref) => {
  const { active, children, header, itemType, ...rest } = props
  const themeName = useTheme()

  return (
    <li {...filterReactProps(rest, { tagName: 'li' })} ref={ref}>
      <div
        {...styles.item()}
        {...styles.itemTier(themeName, itemType)}
        {...(active && { 'data-active': true })}
      >
        {cloneElement(header, { active })}
      </div>

      {children && <List>{children}</List>}
    </li>
  )
})

Item.propTypes = {
  active: PropTypes.bool,
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
  const { active, children, icon, ...rest } = props
  const themeName = useTheme()
  const TagName = rest.href ? 'a' : rest.onClick ? 'button' : 'span'

  return (
    <TagName
      {...styles.itemTag(TagName)}
      {...styles.tier1Header()}
      {...filterReactProps(rest, { tagName: TagName })}
      ref={ref}
    >
      {icon &&
        cloneElement(icon, {
          size: Icon.sizes.medium,
          ...styles.itemIcon(themeName),
          ...(active ? { 'data-active': true } : {})
        })}
      <span {...styles.tierHeaderLabel()}>{children}</span>
    </TagName>
  )
})

Tier1.Header.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  icon: PropTypes.node
}

Tier1.displayName = 'VerticalTabs.Tier1'
Tier1.Header.displayName = 'VerticalTabs.Tier1.Header'

const Tier2 = ({ children, icon, ...props }) => (
  <Item {...props} itemType="tier2" />
)
Tier2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  icon: PropTypes.node
}

Tier2.Header = forwardRef(({ active, children, ...rest }, ref) => {
  const TagName = rest.href ? 'a' : rest.onClick ? 'button' : 'span'

  return (
    <TagName
      {...styles.itemTag(TagName)}
      {...styles.tier2Header()}
      {...filterReactProps(rest, { tagName: TagName })}
      ref={ref}
    >
      {children}
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
