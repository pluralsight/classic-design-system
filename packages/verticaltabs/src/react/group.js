import { css } from 'glamor'
import React, { cloneElement, forwardRef, useState } from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Collapsible from '@pluralsight/ps-design-system-collapsible'
import Icon from '@pluralsight/ps-design-system-icon'

import List from './list.js'

import stylesheet from '../css/index.js'

const styles = {
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
    ),

  headerLabel: _ => css(stylesheet['.pds-verticaltabs__header__label'])
}

const Group = forwardRef(({ children, header, ...rest }, ref) => {
  return (
    <li ref={ref} {...filterReactProps(rest, { tagName: 'li' })}>
      {header}

      <List>{children}</List>
    </li>
  )
})

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  header: PropTypes.node
}

const GroupHeader = forwardRef(({ children, tagName, ...rest }, ref) => {
  const themeName = useTheme()

  const TagName = tagName

  return (
    <TagName
      {...styles.groupHeader(themeName)}
      {...filterReactProps(rest, { tagName })}
      ref={ref}
    >
      <span {...styles.headerLabel()}>{children}</span>
    </TagName>
  )
})

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

Group.Header = GroupHeader

Group.displayName = 'VerticalTabs.Group'
Group.Header.displayName = 'VerticalTabs.Group.Header'

const CollapsibleGroup = forwardRef((props, ref) => {
  const { children, header, startOpen, groupButtonAriaLabel, ...rest } = props
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
})

CollapsibleGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  header: PropTypes.node,
  startOpen: PropTypes.bool,
  groupButtonAriaLabel: PropTypes.string
}

const CollapsibleGroupHeader = forwardRef((props, ref) => {
  const { children, open, tagName, toggle, getButtonAriaLabel, ...rest } = props

  const themeName = useTheme()
  const TagName = tagName

  return (
    <TagName
      ref={ref}
      {...styles.groupHeader(themeName)}
      {...filterReactProps(rest, { tagName })}
    >
      <button
        {...styles.groupButton()}
        aria-label={getButtonAriaLabel()}
        onClick={toggle}
      >
        <div {...styles.groupButtonInner()}>
          <span {...styles.headerLabel()}>{children}</span>
          <Icon
            size={Icon.sizes.small}
            id={Icon.ids.caretDown}
            {...styles.rotatable(open)}
          />
        </div>
      </button>
    </TagName>
  )
})

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

CollapsibleGroup.Header = CollapsibleGroupHeader

CollapsibleGroup.displayName = 'VerticalTabs.CollapsibleGroup'
CollapsibleGroup.Header.displayName = 'VerticalTabs.CollapsibleGroup.Header'

export { Group, CollapsibleGroup }
