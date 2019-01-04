import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css from '../css'
import * as vars from '../vars'

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

const OptionButton = props => (
  <button
    {...styles.optionButton(props)}
    {...filterReactProps(props, { tagName: 'button' })}
  />
)

class Option extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    if (this.props.active) setTimeout(_ => this.handleClick(), 0)
  }

  handleClick(evt) {
    this.props._onSelect(this.props._i, evt)
  }

  render() {
    return (
      <OptionButton
        active={this.props.active}
        onClick={this.handleClick}
        role="radio"
        aria-selected={this.props.active}
      >
        {this.props.children}
      </OptionButton>
    )
  }
}

Option.displayName = 'ViewToggle.Option'
Option.propTypes = {
  _i: PropTypes.number,
  _onSelect: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node
}
Option.defaultProps = {
  active: false
}

const List = props => (
  <div {...styles.list(props)} {...filterReactProps(props)} />
)

const ActivePillBg = props => <div {...styles.activePillBg(props)} {...props} />

const PillBgSpacer = props => (
  <span {...styles.pillBgSpacer(props)} {...props} />
)

const findActiveIndex = els =>
  React.Children.toArray(els).findIndex(el => el.props.active)

class ViewToggle extends React.Component {
  constructor(props) {
    super(props)
    const activeIndex = findActiveIndex(this.props.children)
    this.state = {
      activeIndex: activeIndex > -1 ? activeIndex : 0
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.childrenEls = []
  }

  componentWillReceiveProps(nextProps) {
    const nextActiveIndex = findActiveIndex(nextProps.children)

    if (this.state.activeIndex !== nextActiveIndex && nextActiveIndex !== -1) {
      this.setState({ activeIndex: nextActiveIndex })
    }
  }

  handleSelect(i, evt) {
    this.setState({ activeIndex: i }, _ => {
      if (typeof this.props.onSelect === 'function' && evt)
        this.props.onSelect(i, evt)
    })
  }

  renderChildren(children, props) {
    return React.Children.map(children, (child, i) => {
      if (i < vars.maxOptionsCount)
        return React.cloneElement(child, {
          _i: i,
          _onSelect: this.handleSelect,
          active: this.state.activeIndex === i,
          ref: el => {
            this.childrenEls[i] = ReactDOM.findDOMNode(el)
            if (typeof child.ref === 'function') child.ref(el)
          }
        })
    })
  }

  renderActivePill() {
    const activeIndex = this.state.activeIndex

    const activeNode = this.childrenEls[activeIndex]
    const activeEl = React.Children.toArray(this.props.children)[activeIndex]

    const style = {
      ...(activeNode && { left: activeNode.offsetLeft })
    }

    return (
      <ActivePillBg style={style} aria-hidden>
        <PillBgSpacer>{activeEl.props.children}</PillBgSpacer>
      </ActivePillBg>
    )
  }

  render() {
    return (
      <List role="radiogroup">
        {this.renderActivePill()}
        {this.renderChildren(this.props.children, this.props)}
      </List>
    )
  }
}
ViewToggle.displayName = 'ViewToggle'
ViewToggle.propTypes = {
  children: PropTypes.node,
  onSelect: PropTypes.func
}

ViewToggle.Option = Option

export default ViewToggle
