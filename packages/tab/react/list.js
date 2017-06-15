import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from '../css/list.module.css'

const findActiveIndex = els => {
  const i = (els || []).findIndex(el => el.props.active)
  return i > -1 ? i : 0
}

const rmSystemProps = props => {
  const { css, ...rest } = props
  return rest
}

const getClassName = props =>
  classNames({
    [props.css['ps-tab-list']]: true,
    [props.className]: props.className
  })

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: findActiveIndex(this.props.children) }
    this.handleListItemClick = this.handleListItemClick.bind(this)
  }
  handleListItemClick(i, originalOnClick, evt) {
    this.setState({ activeIndex: i }, _ => {
      if (typeof originalOnClick === 'function') originalOnClick(evt)
    })
  }
  renderListItems(els) {
    return els.map((el, i) =>
      React.cloneElement(el, {
        active: this.state.activeIndex === i,
        key: i,
        listItemIndex: i,
        originalOnClick: el.props.onClick,
        onClick: evt => this.handleListItemClick(i, el.props.onClick, evt)
      })
    )
  }
  render() {
    return (
      <div
        role="tablist"
        {...rmSystemProps(this.props)}
        className={getClassName(this.props)}
      >
        {this.renderListItems(this.props.children)}
      </div>
    )
  }
}

export default styleable(css)(List)
