import { compose, css } from 'glamor'
import React, { cloneElement, forwardRef, useState } from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Collapsible from '@pluralsight/ps-design-system-collapsible'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'

import { List } from './list'

import stylesheet from '../css'

const styles = {
  group: () => css({ label: 'verticaltabs__group' }),

  groupHeader: themeName => {
    const label = 'verticaltabs__group__header'

    return compose(
      css({ label }),
      css(stylesheet[`.psds-${label}`]),
      css(stylesheet[`.psds-${label}.psds-theme--${themeName}`])
    )
  },

  groupButton: _ => css(stylesheet['.psds-verticaltabs__group__button']),

  groupCollapsibleList: _ =>
    compose(
      css(stylesheet['.psds-verticaltabs__list']),
      css(stylesheet['.psds-verticaltabs__group__collapsible-list'])
    ),

  rotatable: open =>
    css(
      stylesheet['.psds-verticaltabs__rotatable'],
      open && stylesheet['.psds-verticaltabs__rotatable--isOpen']
    ),

  headerLabel: _ => css(stylesheet['.psds-verticaltabs__header__label'])
}

const Group = forwardRef(({ children, header, ...rest }, ref) => {
  return (
    <li
      ref={ref}
      {...styles.group()}
      {...filterReactProps(rest, { tagName: 'li' })}
    >
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
      <div>
        <span {...styles.headerLabel()}>{children}</span>
      </div>
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
        <span {...styles.headerLabel()}>{children}</span>

        <CaretDownIcon
          size={CaretDownIcon.sizes.small}
          {...styles.rotatable(open)}
        />
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
