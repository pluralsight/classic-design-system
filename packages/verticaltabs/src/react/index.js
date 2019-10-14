import { css } from 'glamor'
import React, { cloneElement, forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@pluralsight/ps-design-system-theme/react.js'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Collapsible from '@pluralsight/ps-design-system-collapsible'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import stylesheet from '../css/index.js'

const styles = {
  verticaltabs: themeName =>
    css(
      stylesheet['.psds-verticaltabs'],
      stylesheet[`.psds-verticaltabs.psds-theme--${themeName}`]
    ),
  divider: themeName =>
    css(
      stylesheet['.psds-verticaltabs__divider'],
      stylesheet[`.psds-verticaltabs__divider.psds-theme--${themeName}`]
    ),
  item: _ => css(stylesheet['.psds-verticaltabs__item']),
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
  itemList: _ => css(stylesheet['.psds-verticaltabs__list']),
  tier1Header: _ => css(stylesheet['.pds-verticaltabs__tier1__header']),
  tier1HeaderInner: _ =>
    css(stylesheet['.pds-verticaltabs__tier1__header__inner']),
  tierHeaderLabel: _ => css(stylesheet['.pds-verticaltabs__header__label']),
  tier2Header: _ => css(stylesheet['.pds-verticaltabs__tier2__header']),
  groupHeader: themeName =>
    css(
      stylesheet['.psds-verticaltabs__group__header'],
      stylesheet[`.psds-verticaltabs__group__header.psds-theme--${themeName}`]
    ),
  groupHeaderCollapsible: themeName =>
    css(
      stylesheet['.psds-verticaltabs__group__header'],
      stylesheet[`.psds-verticaltabs__group__header.psds-theme--${themeName}`]
    ),
  groupList: _ => css(stylesheet['.psds-verticaltabs__list']),
  groupCollapsibleList: _ =>
    css(
      stylesheet['.psds-verticaltabs__list'],
      stylesheet['.psds-verticaltabs__group__collapsible-list']
    ),
  groupButton: _ =>
    css(
      stylesheet['.psds-verticaltabs__button'],
      stylesheet['.psds-verticaltabs__group__button']
    ),
  groupButtonInner: _ => css(stylesheet['.psds-verticaltabs__button__inner']),
  rotatable: open =>
    css(
      stylesheet['.psds-verticaltabs__rotatable'],
      open && stylesheet['.psds-verticaltabs__rotatable--isOpen']
    )
}

const CollapsibleGroupHeader = forwardRef(
  ({ children, open, tagName, toggle, getButtonAriaLabel, ...rest }, ref) => {
    const themeName = useTheme()
    const TagName = tagName
    return (
      <TagName
        {...styles.groupHeader(themeName)}
        ref={ref}
        {...filterReactProps(rest, { tagName })}
      >
        <button
          onClick={toggle}
          {...styles.groupButton()}
          aria-label={getButtonAriaLabel()}
        >
          <div {...styles.groupButtonInner()}>
            <span {...styles.tierHeaderLabel()}>{children}</span>
            <Icon
              size={Icon.sizes.small}
              id={Icon.ids.caretDown}
              {...styles.rotatable(open)}
            />
          </div>
        </button>
      </TagName>
    )
  }
)
CollapsibleGroupHeader.displayName = 'VerticalTabs.CollapsibleGroup.Header'
CollapsibleGroupHeader.propTypes = {
  getButtonAriaLabel: PropTypes.func,
  children: PropTypes.string,
  open: PropTypes.bool,
  tagName: PropTypes.string,
  toggle: PropTypes.func
}
CollapsibleGroupHeader.defaultProps = {
  tagName: 'h2'
}

const CollapsibleGroup = forwardRef(
  ({ children, header, startOpen, groupButtonAriaLabel, ...rest }, ref) => {
    const [open, setOpenState] = useState(startOpen)
    const getButtonAriaLabel = () => {
      const prefix = open ? 'Collapse' : 'Expand'
      return groupButtonAriaLabel ? `${prefix} ${groupButtonAriaLabel}` : prefix
    }

    const toggle = evt => {
      const nextOpen = !open
      setOpenState(nextOpen)
    }
    return (
      <div {...filterReactProps(rest)} ref={ref}>
        {cloneElement(header, { toggle, open, getButtonAriaLabel })}
        <Collapsible
          isOpen={open}
          tagName="ul"
          {...styles.groupCollapsibleList()}
        >
          {children}
        </Collapsible>
      </div>
    )
  }
)
CollapsibleGroup.displayName = 'VerticalTabs.CollapsibleGroup'
CollapsibleGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  header: PropTypes.node,
  startOpen: PropTypes.bool,
  groupButtonAriaLabel: PropTypes.string
}
CollapsibleGroup.Header = CollapsibleGroupHeader

const GroupHeader = forwardRef(({ children, tagName, ...rest }, ref) => {
  const themeName = useTheme()
  const TagName = tagName
  return (
    <TagName
      {...styles.groupHeader(themeName)}
      {...filterReactProps(rest, { tagName })}
      ref={ref}
    >
      <span {...styles.tierHeaderLabel()}>{children}</span>
    </TagName>
  )
})
GroupHeader.displayName = 'VerticalTabs.GroupHeader'
GroupHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  tagName: PropTypes.string
}
GroupHeader.defaultProps = {
  tagName: 'h2'
}

const Group = forwardRef(({ children, header, ...rest }, ref) => {
  return (
    <li ref={ref} {...filterReactProps(rest, { tagName: 'li' })}>
      {header}
      <ul {...styles.groupList()}>{children}</ul>
    </li>
  )
})
Group.displayName = 'VerticalTabs.Group'
Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  header: PropTypes.node
}
Group.Header = GroupHeader

const Item = forwardRef(
  ({ active, children, header, itemType, ...rest }, ref) => {
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
        {children && <ul {...styles.itemList()}>{children}</ul>}
      </li>
    )
  }
)
Item.displayName = 'VerticalTabs.Item'
Item.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  header: PropTypes.node,
  itemType: PropTypes.string
}

const Tier1 = props => <Item {...props} itemType="tier1" />
Tier1.displayName = 'VerticalTabs.Tier1'
Tier1.Header = forwardRef(({ active, children, icon, ...rest }, ref) => {
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

const Tier2 = ({ children, icon, ...props }) => (
  <Item {...props} itemType="tier2" />
)
Tier2.displayName = 'VerticalTabs.Tier2'
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
      {...filterReactProps(rest, { tagName: 'tier2' })}
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

const Divider = () => {
  const themeName = useTheme()
  return <hr {...styles.divider(themeName)} />
}
Divider.displayName = 'VerticalTabs.Divider'

const VerticalTabs = forwardRef(({ children, ...rest }, ref) => {
  const themeName = useTheme()
  return (
    <ul
      ref={ref}
      {...styles.verticaltabs(themeName)}
      {...filterReactProps(rest)}
    >
      {children}
    </ul>
  )
})
VerticalTabs.displayName = 'VerticalTabs'
VerticalTabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}
VerticalTabs.displayName = 'VerticalTabs'
VerticalTabs.Group = Group
VerticalTabs.CollapsibleGroup = CollapsibleGroup
VerticalTabs.Tier1 = Tier1
VerticalTabs.Tier2 = Tier2
VerticalTabs.Divider = Divider
export default VerticalTabs
