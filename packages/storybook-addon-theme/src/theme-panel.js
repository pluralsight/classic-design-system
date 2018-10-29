import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import Theme from '@pluralsight/ps-design-system-theme/react'

import Swatch from './swatch'

const styles = {
  panel: props => glamor.css({ padding: '10px 15px' })
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
          <Swatch key={name} name={name} onSelect={this.handleThemeSelect} />
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
