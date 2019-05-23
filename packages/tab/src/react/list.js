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
      css[`.psds-tab__overflow-button--${position}`],
      css[`.psds-tab__overflow-button.psds-theme--${themeName}`],
      css[`.psds-tab__overflow-button--${position}.psds-theme--${themeName}`]
    ),
  slider: () => glamor.css(css['.psds-tab__slider'])
}

const OverflowButton = withTheme(props => {
  return (
    <button {...styles.overflowButton(props)} tabIndex="-1">
      <Icon
        id={
          props.position === 'right' ? Icon.ids.caretRight : Icon.ids.caretLeft
        }
      />
    </button>
  )
})
OverflowButton.propTypes = {
  position: PropTypes.oneOf(['left', 'right'])
}

const findActiveIndex = els =>
  React.Children.toArray(els).findIndex(el => el && el.props.active)

const List = React.forwardRef(function List(props, listRef) {
  if (!listRef) listRef = React.useRef() // eslint-disable-line react-hooks/rules-of-hooks
  const sliderRef = React.useRef()
  const activeIndexFromProps = findActiveIndex(props.children)

  const [dims, setDims] = React.useState({
    isOverflowingLeft: false,
    isOverflowingRight: false
  })

  const [activeIndex, setActiveIndex] = React.useState(
    activeIndexFromProps > -1 ? activeIndexFromProps : 0
  )
  const itemRefs = React.useMemo(
    _ => React.Children.map(props.children, () => React.createRef()),
    [props.children]
  )
  React.useEffect(
    () => {
      if (activeIndex !== activeIndexFromProps && activeIndexFromProps !== -1)
        setActiveIndex(activeIndexFromProps)
    },
    [activeIndex, activeIndexFromProps]
  )

  React.useEffect(
    () => {
      const listWidth = getWidth(listRef)
      const sliderWidth = getWidth(sliderRef)
      const isOverflowingRight = sliderWidth > listWidth

      const listLeftX = getLeftX(listRef)
      const sliderLeftX = getLeftX(sliderRef)
      const isOverflowingLeft = sliderLeftX < listLeftX

      setDims({
        isOverflowingLeft,
        isOverflowingRight
      })
    },
    [listRef, sliderRef]
  )

  function getWidth(ref) {
    if (!(ref && ref.current)) return 0
    const rect = ref.current.getBoundingClientRect()
    return rect.width
  }
  function getLeftX(ref) {
    if (!(ref && ref.current)) return 0
    const rect = ref.current.getBoundingClientRect()
    return window.pageXOffset + rect.left
  }
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
    <div
      {...filterReactProps(listProps)}
      {...styles.list(listProps)}
      ref={listRef}
    >
      {dims.isOverflowingLeft && <OverflowButton position="left" />}
      <div {...styles.slider(rest)} ref={sliderRef}>
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
      </div>
      {dims.isOverflowingRight && <OverflowButton position="right" />}
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
