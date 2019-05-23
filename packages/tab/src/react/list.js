import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'

const styles = {
  list: ({ themeName }) =>
    glamor.css(
      css['.psds-tab__list'],
      css[`.psds-tab__list.psds-theme--${themeName}`]
    )
}

const findActiveIndex = els =>
  React.Children.toArray(els).findIndex(el => el && el.props.active)

class List extends React.Component {
  constructor(props) {
    super(props)
    const activeIndex = findActiveIndex(this.props.children)
    this.state = { activeIndex: activeIndex > -1 ? activeIndex : 0 }
    this.itemEls = []
    this.handleListItemClick = this.handleListItemClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    const nextActiveIndex = findActiveIndex(nextProps.children)
    if (this.state.activeIndex !== nextActiveIndex && nextActiveIndex !== -1) {
      this.setState({ activeIndex: nextActiveIndex })
    }
  }
  handleListItemClick(i, originalOnClick, evt) {
    this.setState({ activeIndex: i }, _ => {
      if (typeof originalOnClick === 'function') originalOnClick(i, evt)
    })
  }
  handleKeyDown(evt) {
    if (evt.key !== 'ArrowRight' && evt.key !== 'ArrowLeft') return

    evt.stopPropagation()
    evt.preventDefault()
    const delta = evt.key === 'ArrowRight' ? 1 : -1
    const nextItem = this.itemEls[this.state.activeIndex + delta]

    if (nextItem) {
      nextItem.focus()
      nextItem.click()
    }
  }
  render() {
    const { children, ...rest } = this.props
    const listProps = {
      ...rest,
      role: 'tablist',
      onKeyDown: this.handleKeyDown,
      tabIndex: '0',
      // TODO: use withTheme instead
      themeName: this.context.themeName || themeDefaultName
    }
    return (
      <div {...filterReactProps(listProps)} {...styles.list(listProps)}>
        {React.Children.map(
          this.props.children,
          (el, i) =>
            el &&
            React.cloneElement(el, {
              active: this.state.activeIndex === i,
              key: el.id,
              onClick: evt =>
                this.handleListItemClick(i, el.props.onClick, evt),
              innerRef: itemEl => (this.itemEls[i] = itemEl)
            })
        )}
      </div>
    )
  }
}
List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
List.contextTypes = {
  themeName: PropTypes.string
}

export default List
