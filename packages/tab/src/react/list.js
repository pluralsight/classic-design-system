import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'

import css from '../css'

const List = glamorous.div(css['.psds-tab__list'], ({ themeName }) => ({
  ...css[`.psds-tab__list.psds-theme--${themeName}`],
  ':focus': css['.psds-tab__list:focus'],
  ':focus div': css['.psds-tab__list:focus .psds-tab__list-item__text']
}))

const findActiveIndex = els =>
  React.Children.toArray(els).findIndex(el => el.props.active)

class ListComponent extends React.Component {
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
    return (
      <List
        role="tablist"
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
        themeName={this.context.themeName || themeDefaultName}
      >
        {React.Children.map(this.props.children, (el, i) =>
          React.cloneElement(el, {
            active: this.state.activeIndex === i,
            key: el.id,
            onClick: evt => this.handleListItemClick(i, el.props.onClick, evt),
            innerRef: itemEl => (this.itemEls[i] = itemEl)
          })
        )}
      </List>
    )
  }
}
ListComponent.contextTypes = {
  themeName: PropTypes.string
}

export default ListComponent
