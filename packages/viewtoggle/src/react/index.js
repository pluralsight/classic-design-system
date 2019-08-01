import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  optionButton: props =>
    glamor.css(
      css['.psds-viewtoggle__option'],
      props.active && css['.psds-viewtoggle__option--active']
    ),
  list: props => glamor.css(css['.psds-viewtoggle']),
  activePillBg: props => glamor.css(css['.psds-viewtoggle__option-bg']),
  pillBgSpacer: props => glamor.css(css['.psds-viewtoggle__option-bg__spacer'])
}

const ViewToggle = React.forwardRef(({ onSelect, ...props }, forwardedRef) => {
  const ref = forwardedRef || React.useRef()
  const hasRenderedOnce = useHasRenderedOnce()

  const initialIndex = findActiveIndex(props.children)
  const [activeIndex, setActiveIndex] = React.useState(initialIndex)

  React.useEffect(() => {
    const index = findActiveIndex(props.children)
    setActiveIndex(index)
  }, [props.children])

  function handleSelect(evt, index) {
    setActiveIndex(index)

    // TODO: update this prop callback so that Event is the first param.
    //       this would be a breaking change
    if (evt && isFunction(onSelect)) onSelect(index, evt)
  }

  function renderActivePill() {
    const activeEl = React.Children.toArray(props.children)[activeIndex]

    let activePillStyle = {}
    if (hasRenderedOnce && ref.current) {
      const selector = `button:nth-of-type(${activeIndex + 1})`
      const activeNode = ref.current.querySelector(selector)

      if (activeNode) activePillStyle = { left: activeNode.offsetLeft }
    }

    return (
      <ActivePillBg aria-hidden style={activePillStyle}>
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
        active: activeIndex === i
      })
    })
  }

  return (
    <List ref={ref} role="radiogroup" {...props}>
      {renderActivePill()}
      {renderChildren()}
    </List>
  )
})

ViewToggle.propTypes = {
  children: PropTypes.node,
  onSelect: PropTypes.func
}

const List = React.forwardRef((props, ref) => (
  <div ref={ref} {...styles.list(props)} {...filterReactProps(props)} />
))

const ActivePillBg = props => <div {...styles.activePillBg(props)} {...props} />

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

const OptionButton = React.forwardRef((props, ref) => (
  <button
    ref={ref}
    {...styles.optionButton(props)}
    {...filterReactProps(props, { tagName: 'button' })}
  />
))

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
