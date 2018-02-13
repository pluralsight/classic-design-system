import * as glamor from 'glamor'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import css from '../css'
import * as vars from '../vars'

const OptionButton = glamorous.button(
  css['.psds-viewtoggle__option'],
  ({ active }) => (active ? css['.psds-viewtoggle__option--active'] : null)
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
        aria-selected={this.props.active}
        innerRef={this.props._innerRef}
      >
        {this.props.children}
      </OptionButton>
    )
  }
}

Option.displayName = 'ViewToggle.Option'
Option.propTypes = {
  _i: PropTypes.number,
  _innerRef: PropTypes.func,
  _onSelect: PropTypes.func,
  active: PropTypes.bool
}
Option.defaultProps = {
  active: false
}

const List = glamorous.div(css['.psds-viewtoggle'])

const ActivePillBg = glamorous.div(css['.psds-viewtoggle__option-bg'])

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
          _innerRef: el => (this.childrenEls[i] = el),
          _onSelect: this.handleSelect,
          active: this.state.activeIndex === i
        })
    })
  }
  renderActivePill() {
    const i = this.state.activeIndex
    const node = this.childrenEls[i]
    const style = node
      ? {
          left: node.offsetLeft
        }
      : {}
    return (
      <ActivePillBg style={style}>
        <span {...glamor.css(css['.psds-viewtoggle__option-bg__spacer'])}>
          {React.Children.toArray(this.props.children)[i].props.children}
        </span>
      </ActivePillBg>
    )
  }
  render() {
    return (
      <List>
        {this.renderActivePill()}
        {this.renderChildren(this.props.children, this.props)}
      </List>
    )
  }
}
ViewToggle.displayName = 'ViewToggle'
ViewToggle.propTypes = {
  onSelect: PropTypes.func
}

ViewToggle.Option = Option

export default ViewToggle
