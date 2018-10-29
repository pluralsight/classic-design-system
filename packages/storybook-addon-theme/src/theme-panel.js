import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import Theme from '@pluralsight/ps-design-system-theme/react'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const styles = {
  panel: props => glamor.css({ padding: 15 }),
  button: props => glamor.css({ marginRight: 10 })
}

class ThemeButton extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.props.onSelect(event, this.props.name)
  }

  render () {
    return (
      <button {...styles.button(this.props)} onClick={this.handleClick}>
        {capitalize(this.props.name)}
      </button>
    )
  }
}

ThemeButton.propTypes = {
  name: PropTypes.oneOf(Object.values(Theme.names)).isRequired,
  onSelect: PropTypes.func.isRequired
}

class ThemePanel extends React.Component {
  constructor (props) {
    super(props)
    this.handleThemeSelect = this.handleThemeSelect.bind(this)
  }

  handleThemeSelect (event, themeName) {
    this.props.channel.emit('theme', themeName)
    this.props.api.setQueryParams({ themeName })
  }

  render () {
    return (
      <div {...styles.panel(this.props)} {...this.props}>
        {Object.values(Theme.names).map(name => (
          <ThemeButton
            key={name}
            name={name}
            onSelect={this.handleThemeSelect}
          />
        ))}
      </div>
    )
  }
}

ThemePanel.propTypes = {
  api: PropTypes.shape({
    setQueryParams: PropTypes.func.isRequired
  }).isRequired,
  channel: PropTypes.shape({
    emit: PropTypes.func.isRequired
  }).isRequired
}

export default ThemePanel
