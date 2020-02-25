import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  optionButton: props =>
    compose(
      css(
        stylesheet['.psds-viewtoggle__option'],
        stylesheet[`.psds-viewtoggle__option.psds-theme--${props.themeName}`]
      ),
      props.active && css(stylesheet['.psds-viewtoggle__option--active'])
    ),
  list: props =>
    css(
      stylesheet['.psds-viewtoggle'],
      stylesheet[`.psds-viewtoggle.psds-theme--${props.themeName}`]
    ),
  activePillBg: props =>
    css(
      stylesheet['.psds-viewtoggle__option-bg'],
      stylesheet[`.psds-viewtoggle__option-bg.psds-theme--${props.themeName}`]
    ),
  pillBgSpacer: () => css(stylesheet['.psds-viewtoggle__option-bg__spacer'])
}

const ViewToggle = React.forwardRef(({ onSelect, ...props }, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)
  const themeName = useTheme()
  const hasRenderedOnce = useHasRenderedOnce()

  const initialIndex = React.useMemo(() => findActiveIndex(props.children), [
    props.children
  ])
  const [activeIndex, setActiveIndex] = React.useState(initialIndex)

  React.useEffect(() => {
    const index = findActiveIndex(props.children)
    setActiveIndex(index)
  }, [props.children])

  function handleSelect(evt, index) {
    setActiveIndex(index)

    if (evt && isFunction(onSelect)) onSelect(evt, index)
  }

  function renderActivePill() {
    const activeEl = React.Children.toArray(props.children)[activeIndex]
    if (!activeEl) return null

    let activePillStyle = {}
    if (hasRenderedOnce && ref.current) {
      const selector = `button:nth-of-type(${activeIndex + 1})`
      const activeNode = ref.current.querySelector(selector)

      if (activeNode) activePillStyle = { left: activeNode.offsetLeft }
    }

    return (
      <ActivePillBg style={activePillStyle} themeName={themeName}>
        <PillBgSpacer>{activeEl.props.children}</PillBgSpacer>
      </ActivePillBg>
    )
  }

  function renderChildren() {
    return React.Children.map(props.children, (child, i) => {
      if (i >= vars.maxOptionsCount) return null

      return React.cloneElement(child, {
        _i: i,
        _onSelect: handleSelect,
        active: activeIndex === i,
        themeName
      })
    })
  }

  return (
    <List ref={ref} role="radiogroup" themeName={themeName} {...props}>
      {renderActivePill()}
      {renderChildren()}
    </List>
  )
})

ViewToggle.propTypes = {
  children: PropTypes.node,
  onSelect: PropTypes.func
}

const List = React.forwardRef((props, ref) => {
  return <div ref={ref} {...styles.list(props)} {...filterReactProps(props)} />
})

const ActivePillBg = props => (
  <div {...styles.activePillBg(props)} style={props.style} aria-hidden>
    {props.children}
  </div>
)
ActivePillBg.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

const PillBgSpacer = props => (
  <span {...styles.pillBgSpacer(props)} {...props} />
)

const Option = React.forwardRef((props, ref) => {
  function handleClick(evt) {
    props._onSelect(evt, props._i)
  }

  return (
    <OptionButton
      aria-selected={props.active}
      onClick={handleClick}
      ref={ref}
      role="radio"
      {...props}
    />
  )
})

Option.propTypes = {
  _i: PropTypes.number,
  _onSelect: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node
}
Option.defaultProps = {
  active: false
}

const OptionButton = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      {...styles.optionButton(props)}
      {...filterReactProps(props, { tagName: 'button' })}
    />
  )
})

function findActiveIndex(els) {
  const index = React.Children.toArray(els).findIndex(el => el.props.active)
  return index >= 0 ? index : 0
}

function isFunction(fn) {
  return typeof fn === 'function'
}

function useHasRenderedOnce() {
  const [hasRenderedOnce, setHasRenderedOnce] = React.useState(false)

  React.useEffect(() => {
    setHasRenderedOnce(true)
  }, [])

  return hasRenderedOnce
}

ViewToggle.Option = Option
ViewToggle.Option.displayName = 'ViewToggle.Option'

export default ViewToggle
