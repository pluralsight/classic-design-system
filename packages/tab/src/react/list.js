import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'

const styles = {
  list: ({ themeName }) =>
    glamor.css(
      css['.psds-tab__list'],
      css[`.psds-tab__list.psds-theme--${themeName}`]
    ),
  overflowButton: ({ position, themeName }) =>
    glamor.css(
      css['.psds-tab__overflow-button'],
      css[`.psds-tab__overflow-button--${position}`]
    )
}

function OverflowButton(props) {
  return (
    <button {...styles.overflowButton(props)} tabIndex="-1">
      <Icon
        id={
          props.position === 'right' ? Icon.ids.caretRight : Icon.ids.caretLeft
        }
      />
    </button>
  )
}
OverflowButton.propTypes = {
  position: PropTypes.oneOf(['left', 'right'])
}

const findActiveIndex = els =>
  React.Children.toArray(els).findIndex(el => el && el.props.active)

const List = React.forwardRef(function List(props, ref) {
  const activeIndexFromProps = findActiveIndex(props.children)
  const [activeIndex, setActiveIndex] = React.useState(
    activeIndexFromProps > -1 ? activeIndexFromProps : 0
  )
  const itemRefs = React.Children.map(props.children, () => React.createRef())
  React.useMemo(
    () => {
      if (activeIndex !== activeIndexFromProps && activeIndexFromProps !== -1)
        setActiveIndex(activeIndexFromProps)
    },
    [activeIndex, activeIndexFromProps]
  )

  function handleListItemClick(i, originalOnClick, evt) {
    setActiveIndex(i)
    if (typeof originalOnClick === 'function') originalOnClick(i, evt)
  }
  function handleKeyDown(evt) {
    if (evt.key !== 'ArrowRight' && evt.key !== 'ArrowLeft') return

    evt.stopPropagation()
    evt.preventDefault()
    const delta = evt.key === 'ArrowRight' ? 1 : -1
    const nextRef = itemRefs[activeIndex + delta]
    if (nextRef && nextRef.current) {
      nextRef.current.focus()
      nextRef.current.click()
    }
  }

  const { children, ...rest } = props
  const listProps = {
    ...rest,
    role: 'tablist',
    onKeyDown: handleKeyDown,
    tabIndex: '0'
  }
  return (
    <div {...filterReactProps(listProps)} {...styles.list(listProps)} ref={ref}>
      <OverflowButton position="left" />
      {React.Children.map(
        props.children,
        (comp, i) =>
          comp &&
          React.cloneElement(comp, {
            active: activeIndex === i,
            key: comp.id,
            onClick: evt => handleListItemClick(i, comp.props.onClick, evt),
            ref: itemRefs[i]
          })
      )}
      <OverflowButton position="right" />
    </div>
  )
})
List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
List.contextTypes = {
  themeName: PropTypes.string
}
export default withTheme(List)
