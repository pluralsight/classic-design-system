import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

const maxOptionsCount = 3

const css = {
  outerHeight: '24px',
  innerHeight: '20px'
}

const optionStyles = {
  display: 'inline-block',
  maxWidth: '160px',
  height: css.innerHeight,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  lineHeight: `calc(${css.innerHeight} - 1px)`,
  fontSize: '10px',
  fontWeight: core.type.fontWeightMedium,
  padding: `0 ${core.layout.spacingSmall}`,
  border: 'none',
  borderRadius: `calc(${css.innerHeight} / 2)`,
  cursor: 'pointer',
  transition: `all ${core.motion.speedNormal}`
}

const OptionButton = glamorous.button(
  {
    ...optionStyles,
    position: 'relative',
    background: 'none'
  },
  ({ active }) => ({
    color: active ? core.colors.gray05 : core.colors.bone
  })
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

const List = glamorous.div({
  position: 'relative',
  display: 'inline-flex',
  margin: 0,
  padding: '2px 3px',
  height: css.outerHeight,
  background: core.colors.gray03,
  borderRadius: `calc(${css.outerHeight} / 2)`,
  overflow: 'hidden'
})

const ActivePillBg = glamorous.div({
  ...optionStyles,
  position: 'absolute',
  top: '2px',
  background: core.colors.white,
  boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
})

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
      if (i < maxOptionsCount)
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
        <span style={{ opacity: 0 }}>
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
