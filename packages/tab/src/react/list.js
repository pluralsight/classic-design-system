import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'

const List = glamorous.div(
  {
    display: 'flex',
    width: '100%',
    height: '64px'
  },
  ({ themeName }) => ({
    borderBottom: `1px solid ${themeName === themeNames.light
      ? core.colors.gray02
      : core.colors.gray03}`
  })
)

const findActiveIndex = els => {
  const i = React.Children.toArray(els).findIndex(el => el.props.active)
  return i > -1 ? i : 0
}

class ListComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: findActiveIndex(this.props.children) }
    this.handleListItemClick = this.handleListItemClick.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    const nextActiveIndex = findActiveIndex(nextProps.children)
    if (this.state.activeIndex !== nextActiveIndex) {
      this.setState({ activeIndex: nextActiveIndex })
    }
  }
  handleListItemClick(i, originalOnClick, evt) {
    this.setState({ activeIndex: i }, _ => {
      if (typeof originalOnClick === 'function') originalOnClick(i, evt)
    })
  }
  render() {
    return (
      <List role="tablist" themeName={this.context.themeName}>
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
ListComponent.contextTypes = {
  themeName: PropTypes.string
}

export default ListComponent
