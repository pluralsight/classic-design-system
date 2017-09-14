import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import React from 'react'

const List = glamorous.div({
  display: 'flex',
  width: '100%',
  height: '64px',
  borderBottom: `1px solid ${core.colors.gray03}`
})

const findActiveIndex = els => {
  const i = React.Children.toArray(els).findIndex(el => el.props.active)
  return i > -1 ? i : 0
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: findActiveIndex(this.props.children) }
    this.handleListItemClick = this.handleListItemClick.bind(this)
  }
  handleListItemClick(i, originalOnClick, evt) {
    this.setState({ activeIndex: i }, _ => {
      if (typeof originalOnClick === 'function') originalOnClick(i, evt)
    })
  }
  render() {
    return (
      <List role="tablist">
        {React.Children.map(this.props.children, (el, i) =>
          React.cloneElement(el, {
            active: this.state.activeIndex === i,
            key: el.id,
            onClick: evt => this.handleListItemClick(i, el.props.onClick, evt)
          })
        )}
      </List>
    )
  }
}
